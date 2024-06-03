<script>
	export let data;
	console.log(data);
  </script>

<div class="columns-1 md:columns-3 lg:columns-4">
				{#each data.albums as album}
			<div class="p-4 break-inside-avoid-column" style="di">
				<header class="p-4"><h2 class="h2"><a href="/album/{album.id}">{album.title}</a></h2></header>
				<section class="p-4">
					{#if album && album.FeaturedPhoto && album.FeaturedPhoto.fileName}
					<img loading="lazy" src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.FeaturedPhoto.fileName}" alt="{album.FeaturedPhoto.fileName}" srcset="">
				  {:else}
					<p>No image available</p>
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



