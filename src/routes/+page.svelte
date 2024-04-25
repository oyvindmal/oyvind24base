<script>
	export let data;
	console.log(data);
  </script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Øyvind Malin</h1>
		<ul>
			{#each data.albums as album}
			<li>{album.title}</li>
		  {/each}
		</ul>
	</div>
</div>
