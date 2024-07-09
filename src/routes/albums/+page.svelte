<script>
	export let data;
	console.log(data);
	function formatToSimpleDate(dateString) {
    const date = new Date(dateString);
    const pad = (num) => num.toString().padStart(2, '0');

    const day = pad(date.getUTCDate());
    const month = pad(date.getUTCMonth() + 1);
    const year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
}
  </script>
<div  class="min-h-screen w-full bg-surface-700">
	<div class=" p-4 text-center content-center align-middle">

		<section class="p-4">
			<h2 class="h1 text-neutral-50">Hei</h2>
		
		</section>
		<section class="p-4">
			<p class="text-neutral-50 p-4"> Mitt navn er Øyvind, jeg tar bilder av ting. Her er en liste over alle mine album</p>
		</section>
	
	</div>

	<div class="grid grid-cols-1 p-4 gap-4">
		{#each data.albums as collection}
		<div style="background:#FFF;" class="grid grid-cols-1 p-4 md:grid-cols-2 gap-4">
			
				<div>

					{#if collection && collection.FeaturedPhoto && collection.FeaturedPhoto.fileName}
					<img loading="lazy" src="https://photos.oyvindmal.no/medium/{collection.folderName}/{collection.FeaturedPhoto.fileName}" alt="{collection.FeaturedPhoto.fileName}" srcset="">
				  {:else}
				  {#if collection && collection.AlbumPhotos.length != 0}
				  <img loading="lazy" src="https://photos.oyvindmal.no/medium/{collection.folderName}/{collection.AlbumPhotos[0].fileName}" alt="{collection.AlbumPhotos[0].fileName}" srcset="">
				 
				  {:else}
					<p>Tomt album</p>
					{/if}
				  {/if}
		
		
				</div>
				<div>
					<h1 class="h1"><a href="/albums/{collection.id}">{collection.title}</a></h1>
					<p>{formatToSimpleDate(collection.date)}</p>
					{#if collection && collection.summary} 

                    {collection.summary}

                    {/if}
				</div>
				
			
		</div>

		{/each}
	</div>
</div>


<div class="p-4 columns-1 md:columns-3 lg:columns-4">
				{#each data.albums as album}
			<div class="p-4 break-inside-avoid-column card">
				<header class="p-4"><h2 class="h2"><a href="/album/{album.id}">{album.title}</a></h2></header>
				<section class="p-4">
					{#if album && album.FeaturedPhoto && album.FeaturedPhoto.fileName}
					<img loading="lazy" src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.FeaturedPhoto.fileName}" alt="{album.FeaturedPhoto.fileName}" srcset="">
				  {:else}
				  {#if album && album.AlbumPhotos.length != 0}
				  <img loading="lazy" src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.AlbumPhotos[0].fileName}" alt="{album.AlbumPhotos[0].fileName}" srcset="">
				 
				  {:else}
					<p>Tomt album</p>
					{/if}
				  {/if}
				 
				</section>
				<footer>
					<span class="badge variant-filled">{album.AlbumPhotos.length} {album.AlbumPhotos.length === 1 ? 'bilde' : 'bilder'}</span>
					
					{#each album.Metadata as metadata}
					<span class="badge variant-filled">{metadata.value}</span>
					{/each}
				</footer>
		
		
			</div>
		  {/each}
</div>



