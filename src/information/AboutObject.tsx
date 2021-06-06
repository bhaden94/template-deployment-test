// import strength images here
import ui from "../images/about/browser.svg";
import perf from "../images/about/performance.svg";
import resp from "../images/about/responsive-design.svg";

// import background image here
import Bg from "../images/landing/bg.jpg";

export interface IStrength {
	short: string;
	long: string;
	image: any;
}

export interface IAboutObject {
	name: string;
	title: string;
	landingOpener: string[];
	landingOpenerColorOverride?: string;
	landingImage: string;
	headline: string;
	strengths: IStrength[];
}

/**
 * This is your information that will be displayed in the about section
 * There is also information that will be displayed in the landing page
 * This includes lndingOpener, lanindImage, and landingOpenerColorOverride
 *
 * landingOpenerColorOverride is optional and will allows you to set one color
 * for the text i the opening text. This is helpful for low contrast background images.
 *
 */
export function AboutObject(): IAboutObject {
	return {
		name: "Your Name",
		title: "Software Engineer",
		landingOpener: [
			'"There\'s a way to do it better. Find it."',
			"- Thomas Edison",
		],
		landingOpenerColorOverride: "#fff",
		landingImage: Bg,
		headline: "Who are you and what do you bring to the table.",
		strengths: [
			{
				short: "Beautifully Simplistic UI",
				long: "Less is more.",
				image: ui,
			},
			{
				short: "Performance Optimized Code",
				long: "My code is efficient, fast, and organized.",
				image: perf,
			},
			{
				short: "Responsive Web Design",
				long: "Over half of internet usage is from phones or tablets. I take pride in making sites for all devices.",
				image: resp,
			},
		],
	};
}
