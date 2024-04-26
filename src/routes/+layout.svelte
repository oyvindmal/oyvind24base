<script>
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>
<AppBar>
	<a href="/">Øyvind Malin</a>
</AppBar>
<div class="container mx-auto">

	<div class="grid grid-cols-1 gap-4">
		<slot />
	</div>
	
</div>
