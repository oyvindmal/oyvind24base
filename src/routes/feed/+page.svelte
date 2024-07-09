<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("data", data);
</script>

<div class="p-4">

        <h1 class="h1">Feed</h1>

 
        

        <div class="p4">

        {#each data.all as item}
        <div class="p-4">
            <h2 class="h2">{item.title} ({item.contentType})</h2>
            {#if item.contentType === "videos"}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/{item.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/if}
            {#if item && item.FeaturedPhoto && item.FeaturedPhoto.fileName}
            <img loading="lazy" src="https://photos.oyvindmal.no/medium/{item.folderName}/{item.FeaturedPhoto.fileName}" alt="{item.FeaturedPhoto.fileName}" srcset="">
    
          {/if}
            <p>{item.summary}</p>
            <p>{item.date}</p>

        </div>
    
{/each}
         
        </div>

</div>