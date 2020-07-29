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
		role: "Front-end Development, Design work",
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
	}
		];

	return data;
}

export default getPortfolioData;