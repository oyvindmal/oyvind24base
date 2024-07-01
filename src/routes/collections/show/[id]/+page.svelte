<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)
</script>



<!-- div class="p-4">
 
<ol class="relative border-s border-gray-200 dark:border-gray-700">                  
  <li class="mb-10 ms-6">            
      <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
      </span>
      <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
          <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
          <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
      </div>
  </li>
  <li class="mb-10 ms-6">
      <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas Lean image"/>
      </span>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div class="items-center justify-between mb-3 sm:flex">
              <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
              <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
          </div>
          <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
      </div>
  </li>
  <li class="ms-6">
      <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
      </span>
      <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
          <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
          <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to  <span class="font-semibold text-gray-900 dark:text-white">Finished</span></div>
      </div>
  </li>
</ol>


</div -->


<div class="grid grid-cols-1 gap-4">
    <div class="card p-5">
        <header class="card-header">
            <h1 class="h2">{data.event[0].name}</h1>
            
        </header>
        <section class="p-4"><p>{data.event[0].description}</p></section>


    </div>
    {#each data.combined as content}
<div class="card p-5">
    <header class="card-header"><h2 class="h3"><a href="/album/{content.id}">{content.title}</a></h2></header>
    {#if content && content.FeaturedPhoto && content.FeaturedPhoto.fileName}
    <section class="p-4">
        
        <img loading="lazy" src="https://photos.oyvindmal.no/medium/{content.folderName}/{content.FeaturedPhoto.fileName}" alt="{content.FeaturedPhoto.fileName}" srcset="">
    
        
     
     
    </section>

   
  {:else}
  {#if content.AlbumPhotos.length != 0}
  <img loading="lazy" src="https://photos.oyvindmal.no/medium/{content.folderName}/{content.AlbumPhotos[0].fileName}" alt="{content.AlbumPhotos[0].fileName}" srcset="">
 
  {:else}
    <p>Tomt album</p>
    {/if}

    {/if}
    {#if content && content.summary}
    <section class="p-4">
        {content.summary}
    </section>
  {/if}
  
    <footer class="card-footer flex flex-row gap-2">
        {#if content && content.AlbumPhotos}
        <span class="badge variant-filled">
          {content.AlbumPhotos.length} {content.AlbumPhotos.length === 1 ? 'bilde' : 'bilder'}
        </span>
      {/if}
      
      {#if content && content.Metadata}
        {#each content.Metadata as metadata}
          {#if metadata && metadata.value}
            <span class="badge variant-filled">{metadata.value}</span>
          {/if}
        {/each}
      {/if}
    </footer>


</div>
{/each}
</div>