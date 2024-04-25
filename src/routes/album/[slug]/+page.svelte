<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">

	<div class="space-y-5">
	
        <h2 class="h2">{data.albums[0].title}</h2>
			<ul>
                {#each data.photos as photo}
                <li><img src="https://photos.oyvindmal.no/medium/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}"></li>
		  {/each}
            </ul>
		
	</div>
</div>