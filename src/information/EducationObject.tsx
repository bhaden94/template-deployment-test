export interface IEducationObject {
	degree: string;
	school: string;
	schoolLink?: string; // optional
	dateFinished?: Date; // optional
	bullets?: string[]; // optional
}

/*
    This is where your education will go. 
    Put anything here, even free courses you have taken if you want!
    
    Place in the order you want to appear on screen

    The schoolLink, dateFinished, and bullets are all optional here.
    You can also put in a future date for dateFinished and it will display as an 'Expected' date

	For the date it is new Date(year, month, day) where months are numbered 1-12
*/
export function EducationObject(): IEducationObject[] {
	return [
		{
			degree: "Full Stack Software Developer Bootcamp",
			school: "Lambda School",
			schoolLink: "https://lambdaschool.com/",
			dateFinished: new Date(2022, 3, 0),
			bullets: [
				"Led team of 4 developers to create awesome application",
				"Collaborated with other developers on group projects and established a project workflow using Git & GitHub",
			],
		},
		{
			degree: "Bachelor of Science (B.S.) Computer Science",
			school: "MIT",
			schoolLink: "https://www.mit.edu/",
			bullets: [
				"Became really good at Data Structures & Algorithms",
			],
		},
		{
			degree: "Associate of Applied Science (AAS) Liberal Arts",
			school: "Some College",
			dateFinished: new Date(2020, 8, 0),
		},
	];
}
