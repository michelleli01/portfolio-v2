<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<article class="flex flex-col gap-4">
	<hgroup class="flex flex-col items-center">
		<h1 class="text-heading-1 font-semibold font-serif text-primary">{data.meta.title}</h1>
		<p class="text-sans text-body text-gray-2">{data.meta.date}</p>
	</hgroup>

	<div
		class="mx-auto pb-10 text-general prose-pre:bg-gray-2 prose prose-headings:font-sans prose-body:font-sans prose-h2:font-semibold prose-h3:font-medium prose-h3:text-heading-3"
	>
		<svelte:component this={data.content} class="" />
	</div>
</article>
