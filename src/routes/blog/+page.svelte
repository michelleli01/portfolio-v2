<script>
	export let data;
</script>

<section class="h-screen">
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="/blog/{post.slug}" class="text-primary font-semibold font-serif text-heading-3"
					>{post.title}</a
				>
				<p class="text-gray-2 font-sans text-body">{post.date}</p>
				<p class="text-general">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
