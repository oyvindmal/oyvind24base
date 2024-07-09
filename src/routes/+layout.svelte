<script>
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
						
</script>
<AppBar>
	<svelte:fragment slot="lead">&nbsp;</svelte:fragment>
	
	<h1 class="h2"><a href="/">Øyvind Malin</a></h1>
	<svelte:fragment slot="trail">
		<a  class="btn btn-sm variant-filled" href="/albums">Alle album</a>	
		<a  class="btn btn-sm variant-filled" href="/vcard">Kontakt</a>	
	<LightSwitch /></svelte:fragment>
</AppBar>

<slot />

