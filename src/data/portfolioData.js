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
	}
	];

	return data;
}

export default getPortfolioData;