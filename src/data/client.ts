// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Henry's Professional Painting",
	tagline: "Trusted Since 1987",
	description: "Henry's Professional Painting is San Diego's trusted painting specialist for residential and commercial clients. Licensed, insured, and bonded — serving La Mesa and Greater San Diego since 1987.",
	url: "https://www.yourwebsite.com",
	author: "Henry's Professional Painting",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "info@henrysprofessionalpainting.com",
	phoneForTel: "619-644-5570",
	phoneFormatted: "(619) 644-5570",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "La Mesa",
		lineTwo: "",
		city: "La Mesa",
		state: "CA",
		zip: "91942",
		mapLink: "https://goo.gl/maps/LaMesaCA",
	},
	socials: {
		facebook: "https://www.facebook.com/HenrysProfessionalPainting",
		instagram: "https://www.instagram.com/henrys_professional_painting/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
