<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)
</script>




<div class="grid grid-cols-1 gap-4">
    <div class="card p-5">
        <header class="card-header">
            <h1 class="h2">{data.event[0].name}</h1>
            
        </header>
        <section class="p-4"><p>{data.event[0].description}</p></section>


    </div>
    {#each data.combined as content}
<div class="card p-5">
    <header class="card-header"><h2 class="h3"><a href="/album/{content.id}">{content.title}</a></h2></header>
    {#if content && content.FeaturedPhoto && content.FeaturedPhoto.fileName}
    <section class="p-4">
        
        <img loading="lazy" src="https://photos.oyvindmal.no/medium/{content.folderName}/{content.FeaturedPhoto.fileName}" alt="{content.FeaturedPhoto.fileName}" srcset="">
    
        
     
     
    </section>
    {/if}
    {#if content && content.summary}
    <section class="p-4">
        {content.summary}
    </section>
  {/if}
  
    <footer class="card-footer flex flex-row gap-2">
        {#if content && content.AlbumPhotos}
        <span class="badge variant-filled">
          {content.AlbumPhotos.length} {content.AlbumPhotos.length === 1 ? 'bilde' : 'bilder'}
        </span>
      {/if}
      
      {#if content && content.Metadata}
        {#each content.Metadata as metadata}
          {#if metadata && metadata.value}
            <span class="badge variant-filled">{metadata.value}</span>
          {/if}
        {/each}
      {/if}
    </footer>


</div>
{/each}
</div>