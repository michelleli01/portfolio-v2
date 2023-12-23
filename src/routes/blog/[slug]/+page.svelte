<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<article class="flex flex-col gap-4">
	<div class="flex flex-col items-center w-[65ch] mx-auto">
		<div class="flex flex-col items-start">
			<h1 class="text-heading-1 font-semibold font-serif text-primary">{data.meta.title}</h1>
			<p class="font-sans text-body text-gray-2">{data.meta.date}</p>
		</div>
	</div>

	<div
		class="mx-auto font-sans pb-10 text-general prose-pre:bg-gray-2 prose prose-p:text-[1.05rem] prose-h2:font-semibold prose-h3:font-semibold prose-h3:text-heading-3"
	>
		<svelte:component this={data.content} />
	</div>
</article>
