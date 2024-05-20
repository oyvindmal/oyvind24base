<script>
      import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    let albumContainer;

const handleThumbClick = (id) => {
    console.log(id);

    let selectedImage = "image"+id;
    console.log(selectedImage);

    // Get all child div elements with the id 'albumImages'
    const albumImages = albumContainer.querySelectorAll('.albumImage');
    console.log(albumImages)
    // Loop through all children and set display to none
    albumImages.forEach(image => {
        console.log(image.id);
        image.style.display = 'none';
     
    });

    // Find and display the element with the matching id
    const targetImage = albumContainer.querySelector(`.albumImage[id="${selectedImage}"]`);
    console.log(targetImage);
        if (targetImage) {
            console.log(`Showing image with id: ${selectedImage}`);
            targetImage.style.display = 'block';
        } else {
            console.log(`No image found with id: ${selectedImage}`);
        }
};


onMount(() => {
        if (albumContainer) {
            // Get all child div elements with the class 'albumImage'
            const albumImages = albumContainer.querySelectorAll('.albumImage');
            // Loop through all children and set display to none except for the first one
            albumImages.forEach((image, index) => {
                if (index === 0) {
                    image.style.display = 'block'; // Show the first image
                } else {
                    image.style.display = 'none'; // Hide all other images
                }
            });
        }
    });
</script>
<div class="container">
        <div class="card">
            <header class="card-header p-5"><h2 class="h2">{data.albums[0].title}</h2></header>
            <section class="flex flex-row gap-2">
                {#each data.albums[0].Metadata as metadata}
                <span class="badge variant-filled">{metadata.value}</span>
                {/each}
            </section>
        </div>    
        
    <div class="card">
    
        <section class="p-4">
            <div class="grid grid-cols-1 gap-4" id="albumImages" bind:this={albumContainer}>
                {#each data.albums[0].Photos as photo}
            <div class="albumImage" id="image{photo.id}">
                <img loading="lazy" class="h-auto max-w-full rounded-lg" src="https://photos.oyvindmal.no/medium/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}">
            </div>
            {/each}
            </div>
        </section>
    </div>

    <div class="card">
        <section class="p-4">
            <div class="grid grid-cols-6 gap-4">
                {#each data.albums[0].Photos as photo}
            <div>
                <img  on:click={handleThumbClick(photo.id)} loading="lazy" class="h-auto max-w-full rounded-lg" src="https://photos.oyvindmal.no/thumbs/{data.albums[0].folderName}/{photo.fileName}" alt="{photo.fileName}">
            </div>
            {/each}
            </div>
        </section>

    </div>
    
</div>


