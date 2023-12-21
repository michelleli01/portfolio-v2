<script lang="ts">
	import type { Project } from '$lib/types/index';
	import avs_page from '$lib/assets/microsoft/avs_page.png';
	import microsoft_photos from '$lib/assets/microsoft/microsoft_photos.png';

	let projects: Project[] = [
		{
			title: 'Azure Infrastructure Services',
			github: '',
			company: 'microsoft',
			role: ['software engineer intern'],
			desc: 'Interned for two summers developing automation script for validating resource deployment on AVS servers and integrating in-house service into live product.',
			years: ['2022', '2023'],
			skills: ['c#', 'f#', 'docker', 'azure', 'ci/cd pipline', 'agile workflow'],
			image: microsoft_photos,
			mobile_image: avs_page
		},
		{
			title: 'CU Reviews',
			github: 'https://github.com/cornell-dti/course-reviews-2.0',
			company: 'cornell dti',
			role: ['technical project manager', 'developer'],
			desc: 'A course review website used by over 5000+ students monthly',
			years: ['2021', '2022'],
			skills: ['reactjs', 'typescript', 'express', 'jest', 'mongodb'],
			image: '',
			mobile_image: ''
		},
		{
			title: 'Portfolio',
			github: '',
			company: 'personal project',
			role: ['developer', 'designer'],
			desc: "This website! Hope you're enjoying it so far :)",
			years: ['2023'],
			skills: ['svelte', 'typescript', 'pnpm', 'vite', 'tailwindcss'],
			image: '',
			mobile_image: ''
		}
	];
</script>

{#each projects as project}
	<section
		class="h-screen flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 lg:justify-between"
	>
		<div class="flex flex-col justify-center gap-4 items-start w-[25rem] md:w-[36rem]">
			<div class="flex items-start gap-4">
				<p class="font-serif font-bold text-heading-1 text-primary tracking-wide">
					{project.title}
				</p>
				{#if project.github === ''}
					<div></div>
				{:else}
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

			<div class="flex items-center">
				<div class="font-serif text-heading-3 text-accent">read more</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="47"
					height="39"
					viewBox="0 0 47 39"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M26.3789 9.16076C26.6543 8.93838 27.0276 8.81348 27.4168 8.81348C27.8061 8.81348 28.1794 8.93838 28.4547 9.16076L40.2048 18.6608C40.4798 18.8834 40.6343 19.1852 40.6343 19.4999C40.6343 19.8146 40.4798 20.1164 40.2048 20.3391L28.4547 29.8391C28.3203 29.9558 28.1581 30.0493 27.978 30.1143C27.7978 30.1792 27.6033 30.2141 27.4061 30.2169C27.2089 30.2197 27.013 30.1904 26.8301 30.1306C26.6472 30.0709 26.4811 29.982 26.3416 29.8692C26.2022 29.7565 26.0922 29.6222 26.0183 29.4743C25.9445 29.3264 25.9082 29.1681 25.9117 29.0086C25.9152 28.8492 25.9583 28.6919 26.0386 28.5462C26.1189 28.4006 26.2346 28.2695 26.3789 28.1608L35.6222 20.6874H7.8335C7.44396 20.6874 7.07038 20.5623 6.79493 20.3396C6.51949 20.1169 6.36475 19.8149 6.36475 19.4999C6.36475 19.185 6.51949 18.8829 6.79493 18.6602C7.07038 18.4375 7.44396 18.3124 7.8335 18.3124H35.6222L26.3789 10.8391C26.1039 10.6164 25.9494 10.3146 25.9494 9.99993C25.9494 9.68524 26.1039 9.38342 26.3789 9.16076Z"
						fill="#625035"
					/>
				</svg>
			</div>
		</div>
		<div>
			<img
				src={project.image}
				alt=""
				class="hidden md:flex md:object-cover md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]"
			/>
			<img
				src={project.mobile_image}
				alt=""
				class="md:hidden rounded-3xl shadow-default object-cover w-[25rem] h-[15rem] lg:w-[30rem] lg:h-[30rem]"
			/>
		</div>
	</section>
{/each}
