<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<section class="h-screen bg-gray px-4 md:px-8 lg:px-40 pt-12">
	<Header />
	<slot />
</section>
