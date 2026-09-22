<script lang="ts">
	import { enhance } from '$app/forms';
	import Seo from '$lib/components/Seo.svelte';
	import { business } from '$lib/config';
	import { quote } from '$lib/content/pages';
	import { routes, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema } from '$lib/schema';
	import type { QuoteFormResult } from '$lib/quote-form';

	interface Props {
		locale: Locale;
		altPath: string;
		form: QuoteFormResult | null;
	}

	let { locale, altPath, form }: Props = $props();

	const c = $derived(quote[locale]);
	const s = $derived(t[locale]);
	const f = $derived(s.form);

	let submitting = $state(false);

	const errorKey = $derived(form?.error ?? null);
	const errorMessage = $derived(errorKey ? f.errors[errorKey] : null);
	const sent = $derived(form?.success === true);
	/** Values echoed back after a failed submit, so nothing is retyped. */
	const prior = $derived(form?.values ?? null);

	const fieldLabels = $derived(
		locale === 'fr'
			? {
					name: 'Nom',
					phone: 'Téléphone',
					email: 'Courriel',
					type: 'Type de bâtiment',
					area: 'Secteur ou adresse',
					message: 'Décrivez votre besoin',
					messageHint:
						'Superficie approximative, fréquence souhaitée, heures d’accès — tout détail accélère la soumission.',
					contactHint: 'Laissez au moins un des deux.',
					typeOptions: [
						'Immeuble ou copropriété',
						'Bureau',
						'Clinique',
						'Garderie ou école',
						'Commerce',
						'Restaurant',
						'Entrepôt',
						'Garage intérieur',
						'Résidence',
						'Autre'
					]
				}
			: {
					name: 'Name',
					phone: 'Phone',
					email: 'Email',
					type: 'Building type',
					area: 'Area or address',
					message: 'Describe what you need',
					messageHint:
						'Approximate area, desired frequency, access hours — any detail speeds up the quote.',
					contactHint: 'Leave at least one of the two.',
					typeOptions: [
						'Building or condominium',
						'Office',
						'Clinic',
						'Daycare or school',
						'Retail',
						'Restaurant',
						'Warehouse',
						'Indoor parking garage',
						'Home',
						'Other'
					]
				}
	);

	const fieldClass =
		'mt-2 w-full border border-rule bg-paper px-4 py-3 text-ink focus:border-blue focus:ring-0';
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.quote[locale]}
	{altPath}
	schemas={[
		breadcrumbSchema([
			{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
			{ name: s.cta.quote, url: routes.quote[locale] }
		])
	]}
/>

<header class="shell pt-12 pb-section">
	<h1 class="max-w-3xl text-h1 font-semibold">{c.h1}</h1>
	<p class="measure mt-6 text-lead text-muted">{c.lede}</p>
</header>

<section class="bg-paper-tint">
	<div class="shell py-section">
		{#if sent}
			<div class="measure" role="status">
				<div class="h-0.5 w-16 bg-green" aria-hidden="true"></div>
				<h2 class="mt-6 text-h2 font-semibold">{f.successTitle}</h2>
				<p class="mt-4 text-muted">{f.successBody}</p>
				<a
					href="tel:{business.phoneHref}"
					class="mt-8 inline-block bg-blue px-7 py-4 font-semibold text-white tabular-nums transition-colors hover:bg-ink"
				>
					{business.phone}
				</a>
			</div>
		{:else}
			<form
				method="POST"
				class="measure space-y-6"
				use:enhance={() => {
					submitting = true;
					return async ({ update }) => {
						// Keep entered values on failure; reset only on success.
						await update({ reset: false });
						submitting = false;
					};
				}}
			>
				{#if errorMessage}
					<p
						role="alert"
						class="border-l-2 border-blue bg-paper px-4 py-3 text-sm font-medium text-ink"
					>
						{errorMessage}
					</p>
				{/if}

				<!--
					Honeypot. Hidden from sight and from assistive tech, and skipped by
					tab order, so no real visitor can fill it. Anything that does is a
					bot, and the server answers with a success shape so it gets no
					signal to adapt to.
				-->
				<div class="absolute left-[-9999px]" aria-hidden="true">
					<label for="website">Website</label>
					<input id="website" name="website" type="text" tabindex="-1" autocomplete="off" />
				</div>

				<div class="grid gap-6 sm:grid-cols-2">
					<div>
						<label for="name" class="text-sm font-semibold">
							{fieldLabels.name}
							<span class="font-normal text-muted">({f.required})</span>
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							autocomplete="name"
							value={prior?.name ?? ''}
							aria-invalid={errorKey === 'name' ? 'true' : undefined}
							class={fieldClass}
						/>
					</div>
					<div>
						<label for="phone" class="text-sm font-semibold">{fieldLabels.phone}</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							autocomplete="tel"
							inputmode="tel"
							value={prior?.phone ?? ''}
							aria-invalid={errorKey === 'phone' || errorKey === 'contact' ? 'true' : undefined}
							class={fieldClass}
						/>
					</div>
				</div>

				<div>
					<label for="email" class="text-sm font-semibold">{fieldLabels.email}</label>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						value={prior?.email ?? ''}
						aria-describedby="contact-hint"
						aria-invalid={errorKey === 'email' || errorKey === 'contact' ? 'true' : undefined}
						class={fieldClass}
					/>
					<p id="contact-hint" class="mt-2 text-sm text-muted">{fieldLabels.contactHint}</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2">
					<div>
						<label for="type" class="text-sm font-semibold">{fieldLabels.type}</label>
						<select id="type" name="type" class={fieldClass}>
							{#each fieldLabels.typeOptions as option}
								<option selected={prior?.type === option}>{option}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="area" class="text-sm font-semibold">{fieldLabels.area}</label>
						<input
							id="area"
							name="area"
							type="text"
							value={prior?.area ?? ''}
							class={fieldClass}
						/>
					</div>
				</div>

				<div>
					<label for="message" class="text-sm font-semibold">{fieldLabels.message}</label>
					<textarea id="message" name="message" rows="5" class={fieldClass}
						>{prior?.message ?? ''}</textarea
					>
					<p class="mt-2 text-sm text-muted">{fieldLabels.messageHint}</p>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
					<button
						type="submit"
						disabled={submitting}
						class="bg-blue px-7 py-4 font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
					>
						{submitting ? f.sending : f.submit}
					</button>
					<span class="text-sm text-muted">
						{locale === 'fr' ? 'ou appelez' : 'or call'}
						<a href="tel:{business.phoneHref}" class="font-semibold text-blue hover:underline">
							{business.phone}
						</a>
					</span>
				</div>
			</form>
		{/if}
	</div>
</section>
