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
		class="mx-auto pb-10 text-general prose-pre:bg-gray-2 prose prose-headings:font-sans prose-p:font-sans prose-p:text-body prose-h2:font-semibold prose-h3:font-medium prose-h3:text-heading-3"
	>
		<svelte:component this={data.content} />
	</div>
</article>
