<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<ul>
    {#each data.pages as page}
    <li><a href="/pages/{page.id}">{page.title}</a></li>
    {/each}
</ul>