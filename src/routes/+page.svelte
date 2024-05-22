<script>
	export let data;
	console.log(data);
	import SocialIcons from '@rodneylab/svelte-social-icons';
  </script>


<div class="card bg-gradient-to-r from-gray-400 to-gray-500 p-4 text-center content-center align-middle">

	<section class="p-4">
		<h2 class="h1 text-neutral-50">Hei</h2>
	
	</section>
	<section class="p-4">
		<p class="text-neutral-50 p-4"> Mitt navn er Øyvind, jeg tar bilder av ting.</p>
	</section>
	<section class="p-4">
		<SocialIcons alt="" network="instagram" fgColor="#eeeeee" bgColor="#111111" />
		<SocialIcons alt="" network="tiktok" fgColor="#eeeeee" bgColor="#111111" />
		<SocialIcons alt="" network="youtube" fgColor="#eeeeee" bgColor="#111111" />
	</section>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<div style="height:40vh;" class="card bg-center bg-cover p-4 text-center content-center align-middle bg-[url('https://photos.oyvindmal.no/medium/valo24-honningbarna/honningbarna-7.jpg')]">

		<h2 class="h1 text-neutral-50 bg-slate-500 p-4 rounded-2xl  opacity-90"><a href="/events">Konserter og events &rsaquo;</a></h2>
	</div>
	
	
	
	<div  style="height:40vh;" class="card bg-center bg-cover p-4 text-center content-center bg-[url('https://photos.oyvindmal.no/medium/190524orn/IMG_0455.JPG')]">
	
		<h2 class="h1 text-neutral-50 bg-slate-500 p-4 rounded-2xl  opacity-90"><a href="/album">Alle album &rsaquo;</a></h2>
	</div>
	<div  style="height:40vh; display:none;" class="card bg-center bg-cover p-4 text-center content-center bg-[url('https://photos.oyvindmal.no/medium/190524orn/IMG_0455.JPG')]">
	
		<h2 class="h1 text-neutral-50 bg-slate-500 p-4 rounded-2xl  opacity-90"><a href="/album">Alle album &rsaquo;</a></h2>
	</div>
	<div  style="height:40vh;  display:none;" class="card bg-center bg-cover p-4 text-center content-center bg-[url('https://photos.oyvindmal.no/medium/190524orn/IMG_0455.JPG')]">
	
		<h2 class="h1 text-neutral-50 bg-slate-500 p-4 rounded-2xl  opacity-90"><a href="/album">Alle album &rsaquo;</a></h2>
	</div>
</div>

