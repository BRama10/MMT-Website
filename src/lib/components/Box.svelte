<script>
    export let color = "black";
    export let bgcolor = "inherit";
</script>

<div class={`p-2 border-2 border-${color} m-10 bg-${bgcolor}`}>
    <slot></slot>
</div>
