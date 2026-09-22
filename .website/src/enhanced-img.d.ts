/**
 * Ambient declaration for width-pinned `?enhanced` imports.
 *
 * @sveltejs/enhanced-img only ships a declaration for the bare `*?enhanced`
 * specifier. Pinning widths with `&w=` matters: it is what makes the plugin
 * emit `w` descriptors in the srcset instead of `1x`/`2x`, and a `sizes`
 * attribute is ignored unless the srcset uses `w` descriptors. Without it the
 * browser downloads the full 1536px source for a 320px-wide column.
 *
 * A wildcard module pattern may contain only one `*`, so the width list cannot
 * be generic — it has to be spelled out and kept in sync with the imports in
 * src/lib/content/work.ts.
 *
 * This file deliberately has no import/export at the top level, so it stays a
 * global script rather than becoming a module (which would turn the
 * declaration below into a module augmentation).
 */
declare module '*?enhanced&w=1200;800;400' {
	const value: import('@sveltejs/enhanced-img').Picture;
	export default value;
}
