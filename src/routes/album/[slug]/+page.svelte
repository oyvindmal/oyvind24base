<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>
<div class="container">
    <div class="card">
        <header class="card-header p-5"><h2 class="h2">{data.albums[0].title}</h2></header>
        <section class="p-5">
            {#each data.albums[0].Metadata as metadata}
            <span class="badge variant-filled">{metadata.value}</span>
            {/each}

            <span class="badge variant-filled">{data.albums[0].Metadata[0].value}</span>
            <span class="badge variant-filled">{data.albums[0].Metadata[1].value}</span>
        </section>
        <section class="p-4">
            <div class="grid grid-cols-6 gap-4">
                {#each data.albums[0].Photos as photo}
            <div>
                <img loading="lazy" class="h-auto max-w-full rounded-lg" src="https://photos.oyvindmal.no/thumbs/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}">
            </div>
            {/each}
            </div>
        </section>
    </div>
</div>


