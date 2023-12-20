<script>
	import logo from '$lib/assets/logo.svg';
	import hamburger from '$lib/assets/icons/hamburger.svg';

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
				<a href="/blog">blog</a>
			</li>
			<li>
				<a href="/#work">work</a>
			</li>
			<li>
				<a href="/about">about</a>
			</li>
			<li>
				<a
					target="_blank"
					href="https://drive.google.com/file/d/1qbOu9RK86xYTpTR5VBESJH1afOY4CJfc/view?usp=sharing"
					>resume</a
				>
			</li>
		</ul>
	</nav>
</header>
