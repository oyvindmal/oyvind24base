<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
	

    {#each data.albums[0].Photos as photo}
    <div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">
    <img
        class=""
        style="height:70vh"
        src="https://photos.oyvindmal.no/medium/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}"
        loading="lazy"
    />

    </div>
{/each}
		
	
</div>