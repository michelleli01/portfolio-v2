export type Project = {
	title: string;
	slug: string;
	github: string;
	company: string;
	role: string[];
	desc: string;
	years: string[];
	skills: string[];
	image: string;
	mobileImg: string;
	readMore: boolean;
};

export type FooterLink = {
	route: string;
	logo: string;
};

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	published: boolean;
};
