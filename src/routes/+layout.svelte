<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<section class="h-full bg-gray px-4 md:px-8 lg:px-40 pt-12">
	<slot />
</section>
<Footer />
