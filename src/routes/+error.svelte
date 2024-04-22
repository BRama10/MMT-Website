<script context="module">
	export function load({ error, status }) {
		
		return {
			props: { error, status }
		};
	}
</script>

<script>
	/** @type {number} */
	export let status;

	import redirects from "$lib/jsons/redirects.json";
	import { onMount } from "svelte";
	/** @type {import('@sveltejs/kit').Load} */
	let pageURL = "";

	let loading = true;

	onMount(() => {
		loading = true;
        pageURL = window.location.pathname;
		console.log(error)
		console.log(redirects)
		console.log(pageURL)
		// Check if there's a redirect defined for the current URL
		const redirect = redirects.find(({ from }) => from === pageURL);
		if (redirect) {
			window.location.href = redirect.to;
		}
		loading = false
    })

	/** @type {Error & {frame?: string} & {loc?: object}} */
	export let error;

	import PageHeader from '$lib/components/PageHeader.svelte';
</script>
<html lang="">
{#if !loading}
	<PageHeader title="Error: {status}" description="{error.message}" button_url="/" button_text= "Come back to charted territory!" button_id="homeButton"/> 
{/if}

</html>
<style>
	
</style>
<!-- TODO figure out what to do with frames/stacktraces in prod -->
<!-- frame is populated by Svelte in its CompileError and is a Rollup/Vite convention -->
<!--
{#if error.frame}
	<pre>{error.frame}</pre>
{/if}
{#if error.stack}
	<pre>{error.stack}</pre>
{/if} 
-->
