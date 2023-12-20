<script>
	import scroll_circle from '$lib/assets/scroll_circle.svg';
</script>

<section class="font-serif text-general flex-wrap mt-10">
	<div class="w-full mb-40">
		<h1 class="text-title font-semibold">
			Hey, my name is <div class="text-primary">Michelle</div>
		</h1>
		<p class="text-heading-3 font-medium">software engineer @ microsoft</p>
	</div>

	<div>
		<div class="font-medium text-heading-3 tracking-widest flex justify-between items-center">
			<div class="flex flex-col items-start text-center">
				<div class="flex gap-2">
					<p>web</p>
					<p class="text-primary">developer</p>
				</div>
				<div class="flex gap-2">
					<p>forever</p>
					<p class="text-primary">student</p>
				</div>
			</div>
			<div class="flex gap-2">
				<p>based in</p>
				<p class="text-primary">new york city</p>
			</div>
		</div>
	</div>

	<div class="flex justify-center items-center">
		<img src={scroll_circle} alt="circle" />
	</div>
</section>
