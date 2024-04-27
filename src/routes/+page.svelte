<script>
	export let data;
	console.log(data);
  </script>
<div class="grid grid-cols-1 gap-4">
				{#each data.albums as album}
			<div class="card p-5">
				<header class="card-header"><h2 class="h2"><a href="/album/{album.id}">{album.title}</a></h2></header>
				<section class="p-4">
					{#if album && album.Photos && album.Photos.fileName}
					<img loading="lazy" src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.Photos.fileName}" alt="{album.Photos.fileName}" srcset="">
				  {:else}
					<p>No image available</p>
				  {/if}
				 
				</section>
				<section class="p-4">
					<span class="chip variant-filled">{album.Photos}</span>
				</section>
		
		
			</div>
		  {/each}
</div>

