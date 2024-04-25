<script>
	export let data;
	console.log(data);
  </script>
<div class="container h-full mx-auto flex justify-center items-center">

	<div class="space-y-5">
	
		<ul>
			{#each data.albums as album}
			<li><a href="/album/{album.id}">{album.title}</a></li>
		  {/each}
		</ul>
	</div>
</div>



