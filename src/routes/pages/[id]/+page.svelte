<script>
    /** @type {import('./$types').PageData} */
    import SvelteMarkdown from 'svelte-markdown'
    export let data;
    export let source = data.pages[0].content;
    console.log(data);
</script>

<h1 class="h2">{data.pages[0].title}</h1>

{#if data.pages[0].content} 
   <SvelteMarkdown {source} /> 
{/if}