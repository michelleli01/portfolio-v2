<script>
	import logo from '$lib/assets/logo.svg';
	import hamburger from '$lib/assets/icons/hamburger.svg';

	let showMenu = false;

	let toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<header class="bg-gray py-3 px-8 md:flex items-center justify-between">
	<div class="flex items-center justify-between">
		<a href="/"> <img src={logo} alt="michelle's logo" /> </a>
		<button on:click={toggleMenu} class="md:hidden">
			<img src={hamburger} alt="hamburger menu" />
		</button>
	</div>

	<nav class="">
		<ul
			class="divide-y-4 divide-secondary divide-opacity-60 md:divide-y-0 py-4 text-heading-3 text-general font-serif gap-4 flex-col items-center {showMenu
				? 'flex'
				: 'hidden'} md:bg-gray md:p-0 md:flex md:flex-row md:gap-8"
		>
			<li class="w-[100%] flex justify-center items-center">
				<a
					href="/blog"
					class=" transition duration-150 ease-in-out no-underline hover:underline hover:text-gray-2"
					>blog</a
				>
			</li>
			<li class="w-[100%] flex justify-center items-center">
				<a
					href="/#work"
					class="transition duration-150 ease-in-out no-underline hover:underline hover:text-gray-2"
					>work</a
				>
			</li>
			<li class="w-[100%] flex justify-center items-center">
				<a
					href="/about"
					class="transition duration-150 ease-in-out no-underline hover:underline hover:text-gray-2"
					>about</a
				>
			</li>
			<li class="w-[100%] flex justify-center items-center">
				<a
					class="transition duration-150 ease-in-out no-underline hover:underline hover:text-gray-2"
					target="_blank"
					href="https://drive.google.com/file/d/1qbOu9RK86xYTpTR5VBESJH1afOY4CJfc/view?usp=sharing"
					>resume</a
				>
			</li>
		</ul>
	</nav>
</header>
