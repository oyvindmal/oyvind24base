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
    {#each data.combined as album}
<div class="card p-5">
    <header class="card-header"><h2 class="h3"><a href="/album/{album.id}">{album.title}</a></h2></header>
    {#if album && album.FeaturedPhoto && album.FeaturedPhoto.fileName}
    <section class="p-4">
        
        <img loading="lazy" src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.FeaturedPhoto.fileName}" alt="{album.FeaturedPhoto.fileName}" srcset="">
    
        
     
     
    </section>
    {/if}
    {#if album && album.summary}
    <section class="p-4">
        {album.summary}
    </section>
  {/if}
  
    <footer class="card-footer flex flex-row gap-2">
        {#if album && album.AlbumPhotos}
        <span class="badge variant-filled">
          {album.AlbumPhotos.length} {album.AlbumPhotos.length === 1 ? 'bilde' : 'bilder'}
        </span>
      {/if}
      
      {#if album && album.Metadata}
        {#each album.Metadata as metadata}
          {#if metadata && metadata.value}
            <span class="badge variant-filled">{metadata.value}</span>
          {/if}
        {/each}
      {/if}
    </footer>


</div>
{/each}
</div>