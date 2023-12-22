<script>
	import arrow_right from '$lib/assets/icons/arrow_right.svg';
	export let data;
</script>

<svelte:head>
	<title>blog | michelle li</title>
</svelte:head>

<section class="h-screen">
	<ul class="posts">
		{#each data.posts as post}
			<a href="/blog/{post.slug}">
				<li class="border-l-4 flex justify-between items-center gap-8 py-8 mb-4 border-accent">
					<div class="pl-8">
						<h1 class="text-primary font-semibold font-serif text-heading-2">{post.title}</h1>
						<p class="text-gray-2 font-sans text-body">{post.date}</p>
						<p class="text-general">{post.description}</p>
					</div>
					<img src={arrow_right} alt="" />
				</li>
			</a>
		{/each}
	</ul>
</section>
