import React from 'react';

function getPortfolioData() {
	let data = [
	{
		title: "Trending Sloth",
		thumbnail: "/portfolio-items/portfolio-trending-sloth-sm.jpg",
		images: [
			'/portfolio-items/portfolio-trending-sloth-1.jpg',
			'/portfolio-items/portfolio-trending-sloth-2.jpg'
		],
		type: "Content website",
		route: "/portfolio/trending-sloth/",
		description: "",
		year: "2019",
		company: "AwareAds",
		role: <>Lead Designer and <nobr>Front-end Developer</nobr></>,
		tech: <>Javascript, HTML, SCSS, Smarty&nbsp;Templating</>,
		id: "trending-sloth",
		url: "http://trendingsloth.com"
	},
	{
		title: "Cheestrings",
		thumbnail: "/portfolio-items/portfolio-cheestrings-sm.jpg",
		images: [
			'/portfolio-items/portfolio-cheestrings-1.jpg',
			'/portfolio-items/portfolio-cheestrings-2.jpg',
			'/portfolio-items/portfolio-cheestrings-3.jpg',
		],
		type: "Scrolling Adventure",
		route: "/portfolio/cheestrings/",
		description: "",
		year: "2017",
		company: "Isobar",
		role: <>Front-end Developer</>,
		tech: "Javascript, HTML, CSS",
		id: "cheestrings",
		url: "http://cheestrings.ca"
	},
	{
		title: "Communa",
		thumbnail: "/portfolio-items/portfolio-communa-sm.jpg",
		images: [
			'/portfolio-items/portfolio-communa-1.jpg',
			'/portfolio-items/portfolio-communa-2.jpg'
		],
		type: "Research Survey Platform",
		route: "/portfolio/communa/",
		description: "",
		year: "2018-2019",
		company: "AwareAds",
		role: "Front-end Developer, Design work",
		tech: "Javascript, HTML, CSS",
		id: "communa",
		url: "http://communa.com"
	},
	{
		title: "Sony Rewards",
		thumbnail: "/portfolio-items/portfolio-sony-rewards-sm.jpg",
		images: [
			'/portfolio-items/portfolio-sony-rewards-1.jpg',
			'/portfolio-items/portfolio-sony-rewards-2.jpg'
		],
		type: "Rewards Portal",
		route: "/portfolio/sony-rewards/",
		description: "[...] Specifically, I worked on the user account profile & preferences section.",
		year: "2014",
		company: "Klick Health",
		role: <>Front-end Developer</>,
		tech: "Javascript, HTML, CSS",
		id: "sony-rewards",
		url: "https://rewards.sony.com/"
	},
	{
		title: "Made with Nestle",
		thumbnail: "/portfolio-items/portfolio-nestle-sm.jpg",
		images: [
			'/portfolio-items/portfolio-nestle-3.jpg',
			'/portfolio-items/portfolio-nestle-1.jpg',
			'/portfolio-items/portfolio-nestle-2.jpg'
		],
		type: "Recipe Website",
		route: "/portfolio/made-with-nestle/",
		description: "",
		year: "2016",
		company: "OneMethod",
		role: <>Front-end Developer</>,
		tech: "Javascript, HTML, Stylus",
		id: "made-with-nestle",
		url: "https://madewithnestle.ca"
	},

	{
		title: "Toronto Sierra Elevation",
		thumbnail: "/portfolio-items/portfolio-gmc-sierra-sm.jpg",
		images: [
			'/portfolio-items/portfolio-gmc-sierra-1.jpg',
			'/portfolio-items/portfolio-gmc-sierra-2.jpg'
		],
		type: "Dealership Sale Landing Page",
		route: "/portfolio/toronto-gmc-sierra/",
		description: "",
		year: "2016",
		company: "Isobar",
		role: <>Front-end Developer</>,
		tech: "Javascript, HTML, CSS",
		id: "toronto-gmc-sierra",
		url: "http://torontosierraelevation.com"
	},
	{
		title: "Trintellix",
		thumbnail: "/portfolio-items/portfolio-brintellix-sm.jpg",
		images: [
			'/portfolio-items/portfolio-brintellix-1.jpg',
			'/portfolio-items/portfolio-brintellix-2.jpg'
		],
		type: "Medication Website",
		route: "/portfolio/trintellix/",
		description: "",
		year: "2013",
		company: "Klick Health",
		role: <>Front-end Developer</>,
		tech: "Javascript, HTML, CSS",
		id: "trintellix",
		url: "http://us.trintellix.com"
	},
	{
		title: "Spark Change Today",
		thumbnail: "/portfolio-items/portfolio-spark-change-sm.jpg",
		images: [
			'/portfolio-items/portfolio-spark-change-1.jpg',
			'/portfolio-items/portfolio-spark-change-2.jpg'
		],
		type: "Community Website",
		route: "/portfolio/spark-change/",
		description: "Website where users could nominate community members as \"Sparks\", who would be shown on the site. Custom Wordpress theme built from scratch. Had a searchable map, that would allow users to search for Community Living Ontario locations by postal code (using the Google Maps API). Had a form used to nominate Sparks.",
		year: "2014",
		company: "KPDI",
		role: <>Lead Web Developer</>,
		tech: "Javascript, Custom Wordpress Theme, HTML, CSS",
		id: "spark-change",
		url: ""
	},
	{
		title: "Astellas Patient Education Resource Portal",
		thumbnail: "/portfolio-items/portfolio-astellas-perp-sm.jpg",
		images: [
			'/portfolio-items/portfolio-astellas-perp-1.jpg',
			'/portfolio-items/portfolio-astellas-perp-2.jpg'
		],
		type: "Patient Information Portal",
		route: "/portfolio/astellas-patient-portal/",
		description: "Website where patients can find infomational documents.",
		year: "2016",
		company: "Klick Health",
		role: <>Lead Front-end Developer</>,
		tech: "Javascript, Custom Wordpress Theme, HTML, CSS",
		id: "astellas-patient-portal",
		url: "http://astellasresources.com"
	}
		];

	return data;
}

export default getPortfolioData;