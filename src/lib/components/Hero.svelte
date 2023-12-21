<script>
	import arrow_down from '$lib/assets/icons/arrow_down.svg';
</script>

<!-- mt-32 md:mt-28 lg:mt-10 -->
<section class="flex w-full h-screen items-center justify-center font-serif text-general flex-wrap">
	<!-- mb-20 md:mb-36 lg:mb-40 -->
	<div class="w-full">
		<h1 class="text-title font-semibold">
			Hey, my name is <div class="text-primary">Michelle</div>
		</h1>
		<p class="text-heading-3 font-medium">software engineer @ microsoft</p>
	</div>

	<div class="flex flex-col w-screen">
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
		<!-- mt-36 md:mt-16 lg:mt-12 pb-6 -->
		<div class="flex flex-col justify-center items-center p-8 text-heading-4 tracking-widest">
			<p>scroll for more</p>
			<img src={arrow_down} alt="down arrow" />
		</div>
	</div>
</section>
