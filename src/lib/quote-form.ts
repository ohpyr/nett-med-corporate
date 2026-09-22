/**
 * Shapes shared between the quote form action and the component that renders
 * its result.
 *
 * Deliberately not in `$lib/server`: the component imports these, and anything
 * reachable from client code must not live in a server-only module.
 */

/** Which message the form should show. Maps to `t[locale].form.errors`. */
export type FieldError = 'name' | 'contact' | 'phone' | 'email' | 'rate' | 'generic';

/** Values echoed back on failure so the visitor never retypes the form. */
export interface QuoteValues {
	name: string;
	phone: string;
	email: string;
	type: string;
	area: string;
	message: string;
}

/**
 * Result of a submit, as the page component receives it.
 *
 * Modelled as one object with optional keys rather than a discriminated union
 * because that is what SvelteKit's generated `ActionData` collapses to — it
 * merges the success and failure branches and marks the absent side
 * `?: undefined`. A union here would be structurally incompatible and the
 * route would not type-check.
 */
export interface QuoteFormResult {
	success?: boolean;
	error?: FieldError;
	values?: QuoteValues;
}
