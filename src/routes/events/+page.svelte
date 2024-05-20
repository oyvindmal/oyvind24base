<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

    {#each data.events as event}
    <div class="card p-4">
        <section class="p-4"><h2 class="h2"><a href="/events/{event.id}">{event.name}</a></h2></section>
        <section class="p-4"><p>{event.description}</p></section>
        <section class="p-4"><a href="/events/{event.id}" class="btn btn-sm variant-filled">Se innhold</a></section>
        
     

    
    </div>
    {/each}


