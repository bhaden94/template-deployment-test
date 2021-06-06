import { ITechnologiesObject, TechnologiesObject } from "./TechnologiesObject";

/* Project image import section */
import Google from "../images/projects/google-clone.png";
import Netflix from "../images/projects/netflix-clone.png";

export interface IProjectObject {
	media: string;
	title: string;
	shortDesc: string; // max 125 characters long, everything else will be cutoff in card
	accomplishments: string[]; // This can be as many bullets as you want, but will show a scroll bar if necesary
	liveLink?: string; // optional
	codeLink?: string; // optional
	techUsed?: ITechnologiesObject[]; // max 9 techologies here for proper display on card. Also optional
}

/*
	Put your projects in here to be displayed in a grid on the page
	
	The accomplishments field can be as many bullets as you want, but there will be a scroll
	bar if needed. If you want more room for accomplishments, then remove the techUsed section.

	The techUsed field will be limited to the first 9 technologies.
	This is so we don't overflow the card on some screen sizes
		note: go to TechnologiesObj.tsx to modify the list of technologies that are available for use

	Optional fields:
		liveLink
		codeLink
		techUsed
*/
export function ProjectObject(): IProjectObject[] {
	// The number passed in here is the size of the technology icons
	// You can change this to make the icons smaller or larger
	const tech: ITechnologiesObject = TechnologiesObject(35);

	// make sure projects are in the order you want them displayed
	return [
		{
			media: Google,
			title: "Google Search Clone",
			shortDesc: "This is a remake of Google Search",
			accomplishments: [
				"Best searching algorithm in the world",
				"All custom CSS in Material Design",
				"Deployed to Heroku",
			],
			liveLink: "https://www.google.com",
			codeLink: "https://github.com/",
			techUsed: [tech.react, tech.css, tech.typescript, tech.heroku],
		},
		{
			media: Netflix,
			title: "Netflix Clone",
			shortDesc: "Bet you can't tell the difference...",
			accomplishments: [
				"React & Bootstrap",
				"Custom responsiveness across entire site",
				"One of a kind pagination techniques",
				"Another cool accomplishment",
				"Creating more accomplishments since I don't have technologies used",
				"You will definitely get hired for this one",
			],
			liveLink: "https://www.netflix.com",
		},
	];
}
