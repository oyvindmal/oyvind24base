<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>
<ul>
    {#each data.events as event}
    <li><a href="/events/{event.id}">{event.name}</a></li>
    {/each}
</ul>