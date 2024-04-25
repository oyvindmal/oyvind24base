<script>
	export let data;
	console.log(data);
  </script>
<div class="container h-full mx-auto flex justify-center items-center">

	<div class="space-y-5">
	
		
			{#each data.albums as album}
			<h2 class="h2"><a href="/album/{album.id}">{album.title}</a></h2>
			{#if album && album.Photos && album.Photos.fileName}
  <img src="https://photos.oyvindmal.no/medium/{album.folderName}/{album.Photos.fileName}" alt="{album.Photos.fileName}" srcset="">
{:else}
  <p>No image available</p>
{/if}
		  {/each}

	</div>
</div>


