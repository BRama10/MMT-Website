<script lang="ts">
  import { fade } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  let isInView = false;
</script>

<div class="mt-8 wrapper" use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }} on:inview_change={(event) => isInView = event.detail.inView}>
  {#if isInView}
    <div in:fade class="bg-white border border-gray-300 rounded-lg p-6 w-72">
      <h3 class="text-lg font-semibold mb-2">Appears from nowhere</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, adipisci nihil iste.
      </p>
    </div>
  {/if}
</div>
