<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("data", data);  
</script>
<div class="p-4">
    <section class="p-4">
        <h1 class="h1">{data.albums[0].title}</h1>
    </section>
    <div class="columns-2 md:columns-3 lg:columns-4">
        
    
        {#each data.albums[0].Photos as photo}
    
        <img
            class=""
           
            src="https://photos.oyvindmal.no/medium/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}"
            loading="lazy"
        />
    
        
    {/each}
            
        
    </div>
</div>