<script>
	import logo from '$lib/assets/logo.svg';
	import hamburger from '$lib/assets/hamburger.svg';

	let showMenu = false;

	let toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<header class="md:flex items-center justify-between">
	<div class="flex items-center justify-between">
		<a href="/"> <img src={logo} alt="michelle's logo" /> </a>
		<button on:click={toggleMenu} class="sm:hidden">
			<img src={hamburger} alt="hamburger menu" />
		</button>
	</div>

	<nav>
		<ul
			class="text-heading-3 text-general font-serif gap-4 flex-col items-center gap-[1rem] {showMenu
				? 'flex'
				: 'hidden'} md:flex md:flex-row md:gap-8"
		>
			<li>
				<a href="/">blog</a>
			</li>
			<li>
				<a href="/">work</a>
			</li>
			<li>
				<a href="/">about</a>
			</li>
			<li>
				<a href="/">resume</a>
			</li>
		</ul>
	</nav>
</header>
