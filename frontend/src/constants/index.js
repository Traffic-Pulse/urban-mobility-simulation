import { img2, img1, Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, icon1, icon2, icon3, icon4 } from "../images"
import { environment, facebook, instagram, realtime, twitter } from "../images/icons";

export const shoes = [
	{
	  thumbnail: img2,
	  bigShoe: img2,
	},
	{
	  thumbnail: img2,
	  bigShoe: img1,
	},
	{
	  thumbnail: img2,
	  bigShoe: img2,
	},
];
  
export const statistics = [
	{ value: '1k+', label: 'Brands' },
	{ value: '500+', label: 'Shops' },
	{ value: '250k+', label: 'Customers' },
];

export const services = [
	{
	  imgURL: icon1,
	  label: "Infrastructure Planning",
	  subtext: "Planners lack data-driven insights, hindering effective resource allocation and road planning in urban areas."
	},
	{
	  imgURL: icon2,
	  label: "Traffic Management",
	  subtext: "Limited data hampers traffic signal optimization, causing delays and commuter frustration."
	},
	{
	  imgURL: icon3,
	  label: "Identifying High-Risk Areas",
	  subtext: "Without simulations, cities can't pinpoint congestion or accident zones."
	},
	{
		imgURL: icon4,
		label: "Integration Complexity",
		subtext: "Integrating diverse data and systems into a simulation requires compatibility and technical expertise."
	  },
	  {
		imgURL: realtime,
		label: "Real-Time Accuracy",
		subtext: "Real-time simulations need accurate data updates and robust synchronization."
	  },
	  {
		imgURL: environment,
		label: "Environmental Impact",
		subtext: "Simulations assess traffic impact, supporting emission reduction and sustainability."
	  },
  ];

  export const reviews1 = [
	{
		imgURL: Picture1,
		customerName: 'Rutvik Pathak',
		role: "Visualization Developer",
		position: "Project Leader"
	  },
	  {
		imgURL: Picture2,
		customerName: 'Narveer Saharan',
		role: "Backend Developer",
		position: "Co-Leader"
	  },
	  {
		imgURL: Picture3,
		customerName: 'Oweipadei Joshua Bayefa',
		role: "Frontend Developer",
		position: "Co-Leader"
	  },
  ];

  export const reviews2 = [
	{
		imgURL: Picture7,
		customerName: 'Mamata Kandel',
		role: "QA Tester",
		position: "Co-Leader"
	  },
	  {
		imgURL: Picture6,
		customerName: 'Tanisha Gupta',
		role: "Traffic Standard Analysist",
		position: "Member"
	  },
	  {
		imgURL: Picture4,
		customerName: 'Harshdeep Kaur',
		role: "Database Administrator",
		position: "Member"
	  },
  ];

  export const reviews3 = [
	  {
		imgURL: Picture5,
		customerName: 'Beant Kaur',
		role: "Data Analysist",
		position: "Member"
	  }
  ];

  export const footerLinks = [
	{
	  title: "Go to",
	  links: [
		{ name: "Contact", link: "/contact" },
		{ name: "Our Services", link: "/policies" },
		{ name: "Github", link: "https://github.com/Traffic-Pulse/urban-mobility-simulation" },
	  ],
	},
	{
	  title: "Help",
	  links: [
		{ name: "About us", link: "/" },
		{ name: "FAQs", link: "/" },
	  ],
	},
	{
	  title: "Get in touch",
	  links: [
		{ name: "trafficpulse.simulation@gmail.com", link: "mailto:trafficpulse.simulation@gmail.com" },
		{ name: "Tel: +1 (519) 572-2515", link: "tel:+1 (519) 572-2515" },
		{ name: "4000 Victoria Park Ave, North York, ON M2H 3S7", link: "Address: 4000 Victoria Park Ave, North York, ON M2H 3S7" },
	  ],
	},
  ];
  
  export const socialMedia = [
	{ src: facebook, alt: "facebook logo", color: "#3b5999" },
	{ src: twitter, alt: "twitter logo", color: "#1da1f2" },
	{ src: instagram, alt: "instagram logo", color: "#e4405f" },
  ];