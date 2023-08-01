const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute("data-visible");
	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else if (visibility === "true") {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((element) => {
	element.addEventListener("click", () => {
		const visibility = primaryNav.getAttribute("data-visible");
		if (visibility === "false") {
			primaryNav.setAttribute("data-visible", true);
			navToggle.setAttribute("aria-expanded", true);
		} else if (visibility === "true") {
			primaryNav.setAttribute("data-visible", false);
			navToggle.setAttribute("aria-expanded", false);
		}
	});
});

const nav = document.getElementById("mynav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

function updateNavColor(entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) {
		nav.classList.add("nav-colored");
		nav.classList.remove("nav-transparent");
	} else {
		nav.classList.add("nav-transparent");
		nav.classList.remove("nav-colored");
	}
}

const headerObserver = new IntersectionObserver(updateNavColor, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const heroImg = document.querySelector("#text-box-head");
const musicHeader = document.querySelector("#about-header");
const musicDescription = document.querySelector("#about-description");
const storyHeader = document.querySelector("#projects-header");
// const storyDescription = document.querySelector("#projects-description");
const filmTech = document.querySelector("#contact-header");
const contactContent = document.querySelector("#contact-content");

// back to top button
// const backToTop = document.querySelector("#back-to-top");

const body = document.querySelector("body");

const animationElements = [
	heroImg,
	musicHeader,
	musicDescription,
	storyHeader,

	filmTech,
	contactContent,
];
//storyDescription,
// directorHeader,
// directorDescription,
// worldWideEffort,

const animationPair = {
	"text-box-head": heroImg,
	"about-header": musicHeader,
	"about-description": musicDescription,
	"projects-header": storyHeader,

	"contact-header": filmTech,
	"contact-content": contactContent,
};
//"story-description": storyDescription,
// "director-header": directorHeader,
// "director-description": directorDescription,
// "worldwide-effort": worldWideEffort,

const animationValues = [""];
const observer = new IntersectionObserver((entries) => {
	//   console.log(entries);
	entries.forEach((entry, index) => {
		// const musicHeader = entry.target.querySelector("#music-header");

		if (entry.isIntersecting) {
			animationPair[entry.target.id].classList.remove("hidden");
			animationPair[entry.target.id].classList.add(
				"animate__animated",
				"animate__slow",
				"animate__fadeInUp",
				"show"
			);
			return;
			// if we added the class, exit the function
		}

		// We're not intersecting, so remove the class!
		// animationElements.forEach()
		// animationPair[entry.target.id].classList.add("hidden");
		animationPair[entry.target.id].classList.remove(
			"animate__animated",
			"animate__slow",
			"animate__fadeInUp",
			"show"
		);
	});
});

// observer.observe(document.querySelector("#music-header"));

animationElements.forEach((element) => {
	console.log(element);
	observer.observe(element);
});

// backToTop.addEventListener("click", (event) => {
// 	// document.scrollTop = 0;
// 	window.scrollTo(0, 0);
// 	// window.scrollY(0);
// });

// document.addEventListener("scroll", () => {
// 	const y = body.getBoundingClientRect();

// 	if (y.top < -3200) {
// 		backToTop.classList.add(
// 			"block",
// 			"animate__rotateInUpLeft",
// 			"animate__animated",
// 			"animate__slow"
// 		);
// 		backToTop.classList.remove("hide");
// 	} else {
// 		backToTop.classList.add("hide");
// 		backToTop.classList.remove(
// 			"block",
// 			"animate__rotateInUpLeft",
// 			"animate__animated",
// 			"animate__slow"
// 		);
// 	}
// });
