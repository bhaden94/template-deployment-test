import { ITechnologiesObject, TechnologiesObject } from "./TechnologiesObject";

export interface ISkillsObject {
	title: string;
	tech: { name: string; icon: ITechnologiesObject }[];
}

/*
	This is where you put the skills that will be showcased in the Skills section

	Each object in the array will create a new Skills entry and must have a
	title for the header of that entry

	The tech array will need an object for each technology you add.
	The name is what will appear below the icon and the icon comes from the
	TechologiesObj.tsx file. 
	If there is an icon that is not there go to https://simple-icons.github.io/simple-icons-website/
	to find more and import them in TechologiesObj.tsx
*/
export function SkillsObject(): ISkillsObject[] {
	// The number passed in to TechnologiesObject is the size of the Skills icons
	// You can change this if you want the icons to be smaller or larger.
	const tech: ITechnologiesObject = TechnologiesObject(75);

	return [
		{
			title: "General Programming",
			tech: [
				{
					name: "JavaScript",
					icon: tech.javascript
				},
				{
					name: "Java",
					icon: tech.java
				},
			]
		},
		{
			title: "Frontend",
			tech: [
				{
					name: "React",
					icon: tech.react,
				},
				{
					name: "HTML5",
					icon: tech.html,
				},
				{
					name: "CSS3",
					icon: tech.css,
				},
			],
		},
		{
			title: "Backend",
			tech: [
				{
					name: "NodeJS",
					icon: tech.node,
				},
				{
					name: "MongoDB",
					icon: tech.mongodb,
				},
				{
					name: "PostgreSQL",
					icon: tech.postgresql,
				},
				{
					name: "MySQL",
					icon: tech.mysql,
				},
			],
		},
	];
}
