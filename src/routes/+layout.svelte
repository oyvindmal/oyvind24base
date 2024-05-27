<script>
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
						
</script>
<AppBar>
	<svelte:fragment slot="lead">&nbsp;</svelte:fragment>
	<h1 class="h2"><a href="/">Øyvind Malin</a></h1>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
<div  style="background:hotpink;" class="min-h-screen w-full">


	<p>hurra</p>
</div>

<slot />

