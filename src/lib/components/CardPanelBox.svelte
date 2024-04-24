<script>
    import PanelBox from "$lib/components/PanelBox.svelte";
    /**
	 * @type {any}
	 */
     export let width;
    /**
	 * @type {any}
	 */
     export let height;
    export let borderRadius="15px";
</script>

<div style="position: relative;">
    <PanelBox {width} {borderRadius} {height}>

        <slot />
    </PanelBox>
</div>
