<script lang="ts">
	import type { Project } from '$lib/types/index';
	import avs_page from '$lib/assets/microsoft/avs_page.png';
	import microsoft_photos from '$lib/assets/microsoft/microsoft_photos.png';
	import cu_reviews_photos from '$lib/assets/cu reviews/cu_reviews_photos.png';
	import cu_reviews_home_page from '$lib/assets/cu reviews/cu_reviews_home_page.png';
	import portfolio_home_page from '$lib/assets/portfolio/portfolio_home_page.png';
	import portfolio_photos from '$lib/assets/portfolio/portfolio_photos.png';
	import htrack_photos from '$lib/assets/htrack/htrack_photos.png';
	import homepage from '$lib/assets/htrack/homepage.gif';
	import arrow_right from '$lib/assets/icons/arrow_right.svg';

	let projects: Project[] = [
		{
			title: 'Azure Infrastructure Services',
			slug: 'microsoft',
			github: '',
			company: 'microsoft',
			role: ['software engineer intern'],
			desc: 'Interned for two summers developing automation script for validating resource deployment on AVS servers and integrating in-house service into live product.',
			years: ['2022', '2023'],
			skills: ['c#', 'f#', 'docker', 'azure', 'ci/cd pipline', 'agile workflow'],
			image: microsoft_photos,
			mobileImg: avs_page
		},
		{
			title: 'CU Reviews',
			github: 'https://github.com/cornell-dti/course-reviews-react-2.0',
			slug: 'dti',
			company: 'cornell dti',
			role: ['technical project manager', 'developer'],
			desc: 'A course review website used by over 5000+ students monthly',
			years: ['2021', '2022'],
			skills: ['reactjs', 'typescript', 'express', 'jest', 'mongodb'],
			image: cu_reviews_photos,
			mobileImg: cu_reviews_home_page
		},
		{
			title: 'Portfolio',
			slug: 'portfolio',
			github: 'https://github.com/michelleli01/portfolio-v2',
			company: 'personal project',
			role: ['developer', 'designer'],
			desc: "This website! Hope you're enjoying it so far :)",
			years: ['2023'],
			skills: ['svelte', 'typescript', 'pnpm', 'vite', 'tailwindcss'],
			image: portfolio_photos,
			mobileImg: portfolio_home_page
		},
		{
			title: 'HTrack',
			github: 'https://github.com/michelleli01/htrack',
			slug: 'htrack',
			company: 'personal project',
			role: ['developer', 'designer'],
			desc: 'A habit tracking website with a built in to do list that allows users to build more productive and fulfilling lifestyles.',
			years: ['2021'],
			skills: ['reactjs', 'javascript', 'html', 'css', 'firebase', 'express'],
			image: htrack_photos,
			mobileImg: homepage
		}
	];
</script>

<div class="divide-y-4 divide-secondary divide-opacity-60">
	{#each projects as project}
		<section
			class="pb-28 pt-20 w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 lg:justify-between"
		>
			<div class="flex flex-col justify-center gap-4 items-start md:w-[36rem]">
				<div class="flex items-start gap-4">
					<p class="font-serif font-bold text-heading-1 text-primary tracking-wide">
						{project.title}
					</p>
					{#if project.github === ''}
						<div></div>
					{:else}
						<a target="_blank" href={project.github}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="46"
								viewBox="0 0 45 46"
								fill="none"
							>
								<path
									d="M22.5 3.31255C11.6156 3.31255 2.8125 12.3407 2.8125 23.5063C2.8125 32.3376 8.325 39.8469 16.0031 42.6032C17.0437 42.8563 16.875 42.125 16.875 41.5907V38.0751C10.9125 38.8063 10.6594 34.7282 10.2656 34.0532C9.45 32.6469 7.5375 32.2813 8.12813 31.6063C9.47813 30.8751 10.8844 31.775 12.4875 34.2219C13.6406 35.9938 15.9188 35.6844 17.0719 35.4032C17.325 34.3344 17.8594 33.4063 18.5906 32.6469C12.4031 31.5219 9.81563 27.6407 9.81563 23.0282C9.81563 20.7782 10.5188 18.725 11.9531 17.0657C11.0531 14.3375 12.0375 12.0032 12.1781 11.6375C14.7375 11.4125 17.3813 13.5219 17.6063 13.6907C19.0688 13.2969 20.7281 13.0719 22.5844 13.0719C24.4406 13.0719 26.1 13.2969 27.5906 13.6907C28.0969 13.2969 30.5438 11.4969 32.9344 11.6938C33.075 12.0313 34.0312 14.3376 33.1875 17.0375C34.6219 18.6969 35.325 20.7782 35.325 23.0282C35.325 27.6407 32.7375 31.5219 26.5219 32.6469C27.0573 33.1851 27.4783 33.8261 27.7594 34.5313C28.0406 35.2344 28.1813 35.9938 28.1813 36.7532V41.8438C28.2094 42.2375 28.1812 42.6594 28.8281 42.6594C36.6188 39.9594 42.2156 32.3938 42.2156 23.5063C42.2156 12.3407 33.4125 3.28442 22.5281 3.28442L22.5 3.31255Z"
									fill="#305F27"
								/>
							</svg>
						</a>
					{/if}
				</div>
				<div class="font-serif text-heading-3 text-secondary">
					{project.company} | {#each project.role as role, index}
						{role}
						{#if index !== project.role.length - 1}
							•
						{/if}{' '}
					{/each}
				</div>
				<p class="font-sans text-general">
					{project.desc}
				</p>
				<div class="font-sans text-general flex items-center gap-2 self-stretch">
					{#each project.years as year}
						<div
							class="flex p-2 justify-center items-center gap-2 border-2 border-general rounded-[1.256rem]"
						>
							{year}
						</div>
					{/each}

					<div
						class="flex p-2 justify-center items-center gap-2 border-2 border-general rounded-[1.256rem]"
					>
						{#each project.skills as skill, index}
							{skill}
							{#if index !== project.skills.length - 1}
								•
							{/if}{' '}
						{/each}
					</div>
				</div>

				<a class="flex items-center" href="/work/{project.slug}">
					<p class="font-serif text-heading-3 text-accent">read more</p>
					<img src={arrow_right} alt="right arrow" />
				</a>
			</div>
			<div>
				<img
					src={project.image}
					alt=""
					class="hidden lg:flex md:object-cover md:w-[25rem] md:h-[100%] lg:w-[30rem] lg:h-[80%]"
				/>
				<img
					src={project.mobileImg}
					alt=""
					class="lg:hidden rounded-3xl shadow-default object-cover w-[25rem] h-[15rem] md:m-8"
				/>
			</div>
		</section>
	{/each}
</div>
