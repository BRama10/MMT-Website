<script>
  export let items = [];
  export let style;
  export let activeTabValue = 1;

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
  
</script>
<!-- 
    This is NOT very universal right now - component could be made more versatile!
    Ever item needs to have a hex, a value, 
-->
<div class="tabs" {style}>
    <ul>
        <div class="rolebar">
            {#each items as item}
            <li
                class={activeTabValue === item.id ? "active" : "inactive"}
            >
                <span style="background-color: {item.color}" on:click={handleClick(item.id)}>{item.name}</span>
            </li>
            {/each}
        </div>
    </ul>
    <div class="content">
        {#each items as item}
            {#if activeTabValue == item.id}
                <div class="box" style="background-color: {item.color} border-radius: 30px">
                    <slot {item} />
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
  .box {
    margin-bottom: 10px;
    border: 1px solid #dee2e6;
    border-radius: 20em;
    border-top: 0;
    margin-top: 0px;
  }
  ul {
    flex-wrap: wrap;
    margin-bottom: 0;
    list-style: none;
  }
  .tabs {
    justify-content: center;
  }
  .rolebar {
    justify-content: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    bottom: 0;
    text-align: center;
    border-radius: 17px 17px 0 0;
    margin-right: 3px;
  }

  span {
    border: 1px solid transparent;
    border-radius: 17px 17px 0 0;
    display: block;
    padding: 0.5rem 1rem;
  }

  li.inactive > span:hover {
    filter: brightness(105%);
    cursor: pointer;
  }

  li.active > span {
    color: #495057;
    font-weight: bold;
  }
</style>
