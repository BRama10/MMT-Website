import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override your override since outdated
		// Override http methods in the Todo forms
		// methodOverride: {
		// 	allowed: ['PATCH', 'DELETE']
		// }
	},
	preprocess: vitePreprocess(),
};

export default config;
