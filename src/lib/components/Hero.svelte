<script>
	import arrow_down from '$lib/assets/icons/arrow_down.svg';
</script>

<section
	class="flex w-full h-screen pt-16 lg:pt-0 lg:items-center justify-center font-serif text-general flex-wrap"
>
	<div class="w-full">
		<h1 class="text-title font-semibold">
			Hey, my name is <div class="text-primary">Michelle</div>
		</h1>
		<p class="text-heading-3 font-medium">software engineer @ microsoft</p>
	</div>

	<div class="flex flex-col w-screen">
		<div class="font-medium text-heading-3 tracking-widest flex justify-between items-center">
			<div class="hidden flex-col items-start text-center md:flex">
				<div class="flex gap-2">
					<p>web</p>
					<p class="text-primary">developer</p>
				</div>
				<div class="flex gap-2">
					<p>forever</p>
					<p class="text-primary">student</p>
				</div>
			</div>
			<div class="flex gap-2 mx-auto md:mx-0">
				<p>based in</p>
				<p class="text-primary">new york city</p>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center py-16 text-heading-4 tracking-widest">
			<p>scroll for more</p>
			<img src={arrow_down} alt="down arrow" />
		</div>
	</div>
</section>
