<script>
	import michelle_photo from '$lib/assets/about/michelle_photo.png';
	import about_photos from '$lib/assets/about/about_photos.png';
	import adirondacks from '$lib/assets/about/adirondacks.jpg';
	import mailbox_peak from '$lib/assets/about/mailbox_peak.png';
</script>

<svelte:head>
	<title>about | michelle li</title>
</svelte:head>

<section class="py-10 divide-y-4 divide-secondary divide-opacity-60">
	<div class="flex flex-col md:flex-row justify-between items-center gap-12 pb-8 md:pb-20">
		<img
			src={michelle_photo}
			alt="me (michelle) in montreal"
			class="flex md:hidden object-cover rounded-lg"
		/>
		<div>
			<h1 class="font-serif text-primary font-medium text-heading-2">Thanks for stopping by!</h1>
			<div class="font-sans text-general text-body pt-6">
				<p>
					I grew up in Maryland and studied <a
						target="_blank"
						href="https://cis.cornell.edu/"
						class="text-gray-2 underline font-semibold"
					>
						Computer Science
					</a>
					at Cornell University in the College of Engineering with a minor in
					<a
						class="text-gray-2 underline font-semibold"
						target="_blank"
						href="https://infosci.cornell.edu/node/801">Data Science</a
					>!
				</p>
				<br />
				<p>
					I'm currently a <a
						target="_blank"
						href="https://portal.azure.com/#home"
						class="text-gray-2 font-semibold underline">Software Engineer at Microsoft</a
					> on the Azure Infrastructure Services team living in New York City.
				</p>
				<br />
				<p>
					I specialize in backend engineering and web development, and love learning about anything
					tech related really! I've been coding for around 8 years and have been playing around with
					web development for around 3 years.
				</p>
				<br />
				<p>
					On campus, I co-led development of 7 projects, overseeing 12 technical product managers
					and 50 developers, for Cornell's largest software development project team, <a
						class="text-gray-2 font-semibold underline"
						target="_blank"
						href="https://www.cornelldti.org/">Cornell DTI</a
					>. I previously interned at
					<a href="https://portal.azure.com/#home" class="text-gray-2 font-semibold underline"
						>Microsoft</a
					>
					on the Azure Infrastructure Services team for two summers and worked at a startup,
					<a
						href="https://www.aeyesafe.com/"
						target="_blank"
						class="text-gray-2 font-semibold underline">Aeyesafe</a
					>, as a backend engineer for one summer.
				</p>
				<br />
			</div>
		</div>
		<img
			src={michelle_photo}
			alt="me (michelle) in montreal"
			class="w-[35%] object-cover rounded-lg hidden md:flex"
		/>
	</div>

	<div class="p-10 md:gap-4 lg:gap-0 flex flex-col md:flex-row justify-between items-center">
		<div>
			<p class="text-primary font-serif text-heading-3">
				Outside of work and school you can find me...
			</p>
			<ul class="text-general font-sans text-body list-disc list-inside">
				<li class="">dangling on the top of a rock climbing wall 🧗‍♂️</li>
				<li>looking up new restaurants to try 😋</li>
				<li>listening to music 🎧</li>
				<li>making matcha 🍵</li>
				<li>playing around with some new tech stack/framework 📚</li>
				<div class="font-semibold">or...</div>
				<li>googling how to center a div for the 100th time 👩‍💻</li>
			</ul>
		</div>
		<img
			src={about_photos}
			alt="some photos of me in the wild"
			class="hidden md:flex object-cover w-[45%]"
		/>
		<div class="flex justify-between items-center md:hidden pt-6">
			<img src={mailbox_peak} alt="me after hiking mailbox peak" class="rounded-2xl w-[45%]" />
			<img src={adirondacks} alt="me after hiking mailbox peak" class="rounded-2xl w-[40%]" />
		</div>
	</div>
</section>
