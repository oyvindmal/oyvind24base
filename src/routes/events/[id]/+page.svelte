<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)
</script>

<h1 class="h1">{data.event[0].name}</h1>



<div class="grid grid-cols-1 gap-4">
    {#each data.albums as album}
<div class="card p-5">
    <header class="card-header"><h2 class="h2"><a href="/album/{album.id}">{album.title}</a></h2></header>
    <section class="p-4">
        {#if album && album.FeaturedPhoto && album.FeaturedPhoto.fileName}
        <img loading="lazy" src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.FeaturedPhoto.fileName}" alt="{album.FeaturedPhoto.fileName}" srcset="">
      {:else}
        <p>No image available</p>
      {/if}
     
    </section>
    <footer class="card-footer flex flex-row gap-2">
        <span class="badge variant-filled">{album.AlbumPhotos.length} {album.AlbumPhotos.length === 1 ? 'bilde' : 'bilder'}</span>
        
        {#each album.Metadata as metadata}
        <span class="badge variant-filled">{metadata.value}</span>
        {/each}
    </footer>


</div>
{/each}
</div>