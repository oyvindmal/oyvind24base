<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;


    let elemCarousel: HTMLDivElement;


function carouselLeft(): void {
	const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
}
		

function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
}


function carouselThumbnail(index: number) {
	elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
}
				
								
</script>


<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		&larr;
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each data.albums[0].Photos as photo}
			<img
				class="snap-center w-full rounded-container-token"
                style="height:70vh"
                src="https://photos.oyvindmal.no/medium/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}"
				loading="lazy"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
	    &rarr;
	</button>
</div>


<div class="card p-4 grid grid-cols-6 gap-4">
	{#each data.albums[0].Photos as photo, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<img
				class="rounded-container-token"
				src="https://photos.oyvindmal.no/thumbs/{data.albums[0].folderName}/{photo.fileName}" 
           
				alt={photo.fileName}
				loading="lazy"
			/>
		</button>
	{/each}
</div>
