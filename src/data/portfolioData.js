import React from 'react';

function getPortfolioData() {
	let data = [
	{
		title: "Trending Sloth",
		thumbnail: "/portfolio-items/portfolio-trending-sloth-sm.jpg",
		images: [
			'/portfolio-items/portfolio-single-1-1.jpg',
			'/portfolio-items/portfolio-single-1-1.jpg',
			'/portfolio-items/portfolio-single-1-1.jpg'
		],
		type: "Content website",
		route: "/portfolio/trending-sloth/",
		description: "",
		year: "2019",
		company: "AwareAds",
		role: <>Lead Designer and <nobr>Front-end Developer</nobr></>,
		tech: <>Javascript, HTML, SCSS, Smarty&nbsp;Templating</>,
		id: "trending-sloth"
	},
	{
		title: "Cheestrings",
		thumbnail: "/portfolio-items/portfolio-cheestrings-sm.jpg",
		images: [
			''
		],
		type: "Scrolling Adventure",
		route: "/portfolio/cheestrings/",
		description: "",
		year: "2017",
		company: "Isobar",
		role: <>Front-end Development</>,
		tech: "Javascript, HTML, CSS",
		id: "cheestrings"
	},
	{
		title: "Communa",
		thumbnail: "/portfolio-items/portfolio-communa-sm.jpg",
		images: [
			''
		],
		type: "Research Survey Platform",
		route: "/portfolio/communa/",
		description: "",
		year: "2018-2019",
		company: "AwareAds",
		role: "Front-end Development, Design work",
		tech: "Javascript, HTML, CSS",
		id: "communa"
	}
	];

	return data;
}

export default getPortfolioData;