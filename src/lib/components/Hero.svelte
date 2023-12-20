<script>
	import arrow_down from '$lib/assets/icons/arrow_down.svg';
</script>

<section class="font-serif text-general flex-wrap mt-32 md:mt-28 lg:mt-10">
	<div class="w-full mb-20 md:mb-36 lg:mb-40">
		<h1 class="text-title font-semibold">
			Hey, my name is <div class="text-primary">Michelle</div>
		</h1>
		<p class="text-heading-3 font-medium">software engineer @ microsoft</p>
	</div>

	<div class="font-medium text-heading-3 tracking-widest flex justify-between items-center">
		<div class="flex flex-col items-start text-center hidden md:flex">
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
	<div
		class="flex flex-col justify-center items-center text-heading-4 tracking-widest mt-36 md:mt-16 lg:mt-10"
	>
		<p>scroll for more</p>
		<img src={arrow_down} alt="down arrow" />
	</div>
</section>
