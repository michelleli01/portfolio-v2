type Project = {
	title: string;
	shortName: string;
	github: string;
	company: string;
	role: string[];
	desc: string;
	years: string[];
	skills: string[];
	image: string;
	mobileImg: string;
};

type FooterLink = {
	route: string;
	logo: string;
};

export { type Project, type FooterLink };
