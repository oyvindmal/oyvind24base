<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">

	<div class="space-y-5">
	
        <h2 class="h2">{data.albums[0].title}</h2>


<section class="grid grid-cols-2 md:grid-cols-3 gap-2">
    {#each data.photos as photo}
	<div>
		<img loading="lazy" class="h-auto max-w-full rounded-lg" src="https://photos.oyvindmal.no/medium/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}">
	</div>
    {/each}
	
</section>


		
	</div>
</div>