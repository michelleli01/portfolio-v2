<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<article class="h-screen">
	<hgroup>
		<h1 class="text-heading-1 font-serif text-primary">{data.meta.title}</h1>
		<p class="text-sans text-body text-gray-2">{data.meta.date}</p>
	</hgroup>

	<div
		class="pt-10 text-general prose-pre:bg-gray-2 prose prose-headings:font-serif prose-h2:text-heading-2 prose-h2:text-primary prose-h2:font-medium prose-h3:text-heading-3 prose-p:text-sans bg-gray"
	>
		<svelte:component this={data.content} class="" />
	</div>
</article>
