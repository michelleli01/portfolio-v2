type Project = {
	title: string;
	github: string;
	company: string;
	role: string[];
	desc: string;
	years: string[];
	skills: string[];
	image: string;
	mobile_image: string;
};

type FooterLink = {
	route: string;
	logo: string;
};

export { type Project, type FooterLink };
