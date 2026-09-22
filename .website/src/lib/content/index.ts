import type { Locale } from '$lib/i18n';
import { servicePath } from '$lib/i18n';
import { tier1 } from './tier1';
import { tier2 } from './tier2';
import { tier3 } from './tier3';
import type { LocalizedService, Pillar, Service } from './types';

export type { FAQ, IncludedItem, LocalizedService, Pillar, Service, ServiceCopy } from './types';

/** Every service, in build/publish order. */
export const services: Service[] = [...tier1, ...tier2, ...tier3];

const byId = new Map(services.map((s) => [s.id, s]));

/** Slug → service, per locale. Built once; slugs differ between locales. */
const bySlug: Record<Locale, Map<string, Service>> = {
	fr: new Map(services.map((s) => [s.fr.slug, s])),
	en: new Map(services.map((s) => [s.en.slug, s]))
};

export function localize(service: Service, locale: Locale): LocalizedService {
	return {
		...service[locale],
		id: service.id,
		tier: service.tier,
		pillar: service.pillar,
		isPillar: service.isPillar === true,
		related: service.related,
		locale
	};
}

export function getService(id: string, locale: Locale): LocalizedService | undefined {
	const service = byId.get(id);
	return service ? localize(service, locale) : undefined;
}

export function getServiceBySlug(slug: string, locale: Locale): LocalizedService | undefined {
	const service = bySlug[locale].get(slug);
	return service ? localize(service, locale) : undefined;
}

/** The raw record, for building hreflang pairs across locales. */
export function getRawBySlug(slug: string, locale: Locale): Service | undefined {
	return bySlug[locale].get(slug);
}

export function servicesInPillar(pillar: Pillar, locale: Locale): LocalizedService[] {
	return services
		.filter((s) => s.pillar === pillar && !s.isPillar)
		.map((s) => localize(s, locale));
}

export function pillarService(pillar: Pillar, locale: Locale): LocalizedService | undefined {
	const service = services.find((s) => s.pillar === pillar && s.isPillar);
	return service ? localize(service, locale) : undefined;
}

export function allServices(locale: Locale): LocalizedService[] {
	return services.map((s) => localize(s, locale));
}

/** Resolve a service’s `related` ids into linkable entries. */
export function relatedServices(service: LocalizedService, locale: Locale): LocalizedService[] {
	return service.related
		.map((id) => getService(id, locale))
		.filter((s): s is LocalizedService => Boolean(s));
}

/**
 * Absolute path for a service in a given locale.
 *
 * Takes an id rather than a localized object so it can resolve the *other*
 * locale’s slug — which is exactly what the language switcher and hreflang
 * tags need.
 */
export function pathForId(id: string, locale: Locale): string | undefined {
	const raw = byId.get(id);
	return raw ? servicePath(locale, raw[locale].slug) : undefined;
}

/** Every service path in both locales, for the sitemap. */
export function allServicePaths(): { locale: Locale; path: string; id: string }[] {
	return services.flatMap((s) => [
		{ locale: 'fr' as Locale, path: servicePath('fr', s.fr.slug), id: s.id },
		{ locale: 'en' as Locale, path: servicePath('en', s.en.slug), id: s.id }
	]);
}
