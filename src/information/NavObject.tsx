import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

/* Section imports */
import About from "../components/about/About";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

/* Icon imports for sidebar navigation */
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FaceIcon from "@material-ui/icons/Face";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		icon: {
			color: theme.palette.primary.main,
		},
	})
);

export interface INavObject {
	text: string;
	icon: any;
	section: any;
}

/*
	In this section you can specify the Navigation items and section in your portfolio.
	You can remove sections from this list, but you will not be able to add additional sections.
	You can also re-order the sections.

	The sections that you have no control over the order or apperance of is the landing page all the way at the top
	and the contact page at the bottom. Those will always be there and they will always be first and last respectively.

	If you choose to remove sections, please remove the repsective imports from the top of this file.
*/
export function NavObject(): INavObject[] {
	const classes = useStyles();

	return [
		{
			text: "About",
			icon: <FaceIcon className={classes.icon} />,
			section: <About />,
		},
		{
			text: "Skills",
			icon: <BarChartIcon className={classes.icon} />,
			section: <Skills />,
		},
		{
			text: "Projects",
			icon: <DashboardIcon className={classes.icon} />,
			section: <Projects />,
		},
		{
			text: "Experience",
			icon: <WorkIcon className={classes.icon} />,
			section: <Experience />,
		},
		{
			text: "Education",
			icon: <SchoolIcon className={classes.icon} />,
			section: <Education />,
		},
	];
}
