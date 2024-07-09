<script>
	export let data;
	console.log("front",data);
  </script>

<div  class="min-h-screen w-full bg-surface-700">
	<div class=" p-4 text-center content-center align-middle">

		<section class="p-4">
			<h2 class="h1 text-neutral-50">Hei</h2>
		
		</section>
		<section class="p-4">
			<p class="text-neutral-50 p-4"> Mitt navn er Øyvind, jeg tar bilder av ting.</p>
		</section>
	
	</div>
	<div class="grid grid-cols-1 p-4 gap-4">
		{#each data.collections as collection}
		<div style="background:#FFF;" class="grid grid-cols-1 p-4 md:grid-cols-2 gap-4">
			
				<div>

					{#if collection && collection.FeaturedPhoto}
						
						

						<img loading="lazy" src="https://photos.oyvindmal.no/medium/{collection.FeaturedPhoto.Albums.folderName}/{collection.FeaturedPhoto.fileName}" alt="{collection.FeaturedPhoto.fileName}" srcset="">
					{:else}
					<img src="https://placehold.co/600x400" alt="">
					{/if}
		
				</div>
				<div>
					<h1 class="h1"><a href="/collections/show/{collection.id}">{collection.name}</a></h1>
					{collection.description}
				</div>
				
			
		</div>

		{/each}
	</div>
</div>



