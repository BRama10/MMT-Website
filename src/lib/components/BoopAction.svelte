<script>
	// @ts-nocheck
	import boop from './boop.js';

	export let boopParams;
	let isBooped = false;
	
	// Is there a more Svelte-y way to do this?
	/**
	 * @param {boolean} val
	 */
	function setIsBooped(val) {
		isBooped = val;
	}
	
	function triggerBoop() {
		isBooped = true;
	}
</script>

<!-- trigger onclick so demo works on mobile -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span on:mouseenter={triggerBoop} on:click={triggerBoop}  use:boop={{isBooped, ...boopParams, setter: setIsBooped}}>
	<slot/>
</span>