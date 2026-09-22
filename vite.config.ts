import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-node';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		// Must come before sveltekit(). Generates AVIF/WebP/JPEG at several
		// widths and emits intrinsic width/height, so job photos do not shift
		// the layout while they load. The source files are 1536×2048 phone
		// photos — shipping them untouched would dominate the page weight.
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Node server. Every page is still prerendered to static HTML at build
			// time and served straight off disk — the runtime exists only so the
			// quote form has somewhere to POST. That keeps marketing pages as fast
			// as they were on a static host while letting us own the lead path
			// instead of routing it through a third-party form service.
			adapter: adapter({
				out: 'build',
				precompress: true
			})
		})
	]
});
