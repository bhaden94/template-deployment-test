import { ITechnologiesObject, TechnologiesObject } from "./TechnologiesObject";

/* Section to import company logo */
import MicrosoftLogo from "../images/experience/microsoft-logo.jpg";
import AwsLogo from "../images/experience/aws-logo.jpg";
export interface IExperienceObject {
	startDate: Date;
	endDate: Date | string;
	title: string;
	company: string;
	bullets: string[];
	media: string;
	description?: string;
	techUsed?: ITechnologiesObject[];
}

/*
    This is where you will put in your past experience
    Follow the examples given and put your own past jobs in

    note: put the experience objects in the order they should appear on the page
	
	If a technology that you need is not listed go to TechnologiesObject.tsx to import it
*/
export function ExperienceObject(): IExperienceObject[] {
	// The number passed in here is the size of the technology icons
	// You can change this to make the icons smaller or larger
	const tech: ITechnologiesObject = TechnologiesObject(35);

	return [
		{
			startDate: new Date(2021, 3, 0),
			endDate: "Present",
			title: "Software Engineer",
			company: "Microsoft",
			bullets: ["Did cool stuff", "Did more really cool stuff"],
			media: MicrosoftLogo,
			techUsed: [tech.azure, tech.postgresql, tech.mysql, tech.csharp],
		},
		{
			startDate: new Date(2021, 6, 0),
			endDate: new Date(2021, 9, 0),
			title: "Software Engineer Intern",
			company: "Amazon Web Services",
			bullets: [
				"Did sweet intern stuff",
				"Did another really cool thing",
				"Completed a really cool feature",
			],
			media: AwsLogo,
			techUsed: [
				tech.aws,
				tech.python,
				tech.kibana,
				tech.elasticsearch,
				tech.github,
			],
		},
	];
}
