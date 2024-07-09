<script>
    /** @type {import('./$types').PageData} */
    export let data;
    function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
}
function formatToSimpleDate(dateString) {
    const date = new Date(dateString);
    const pad = (num) => num.toString().padStart(2, '0');

    const day = pad(date.getUTCDate());
    const month = pad(date.getUTCMonth() + 1);
    const year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
}

function formatDates(startDate, endDate) {
    if (startDate === endDate) {
        return formatDate(startDate);
    } else {
        return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
}
    console.log(data)
</script>

<div  class="min-h-screen w-full bg-surface-700">
	<div class=" p-4 text-center content-center align-middle">

		<section class="p-4">
			<h2 class="h1 text-neutral-50">{data.event[0].name}</h2>
		
		</section>
		<section class="p-4">
            <p class="text-neutral-50 p-4">
                {formatDates(data.event[0].startDate,data.event[0].endDate)}</p>
			<p class="text-neutral-50 p-4">{data.event[0].description}</p>
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