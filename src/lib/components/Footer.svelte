<script lang="ts">
	import type { FooterLink } from '$lib/types';

	import github_logo from '$lib/assets/icons/github_logo.svg';
	import linkedin_logo from '$lib/assets/icons/linkedin_logo.svg';
	import mail_icon from '$lib/assets/icons/mail_icon.svg';

	let links: FooterLink[] = [
		{
			route: 'https://github.com/michelleli01',
			logo: github_logo
		},
		{
			route: 'https://www.linkedin.com/in/michelleli0/',
			logo: linkedin_logo
		},
		{
			route: 'mailto:myl39@cornell.edu',
			logo: mail_icon
		}
	];
</script>

<footer
	class="bg-beige text-gray-2 p-8 flex justify-center md:justify-between items-center text-heading-3 font-serif"
>
	<div class="hidden md:flex md:flex-col">
		<p>made with ❤️‍🔥 by</p>
		<p>michelle li © 2023</p>
	</div>
	<div class="flex flex-col gap-2">
		<p class="flex justify-center items-center">let's connect!</p>
		<div class="flex gap-4">
			{#each links as link}
				<a href={link.route} target="_blank">
					<img src={link.logo} alt="" />
				</a>
			{/each}
		</div>
	</div>
</footer>
