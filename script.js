const destinasiTitle = document.querySelector(".destinasi-title");
const destinasiImg = document.querySelector(".img-container");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

let count = 0;

const destinationList = [
	"Pantai Saleo",
	"Star Lagoon",
	"Pulau Arborek",
	"Yenbuba",
	"Pasir Timbul",
	"Wayag"
];

const imgList = [
	"img/pantai-saleo.jpg",
	"img/star-lagoon.jpg",
	"img/pulau-arborek.jpg",
	"img/yenbuba.jpg",
	"img/pasir-timbul.jpg",
	"img/wayag.jpg"
];


rightArrow.addEventListener("click", () => {
	if (count == 5) {
		count = 0;
	} else {
		count++;
	}
	destinasiTitle.innerHTML = destinationList[count];
	destinasiImg.innerHTML = `<img src="${imgList[count]}">`;
});

leftArrow.addEventListener("click", () => {
	if (count == 0) {
		count = 5;
	} else {
		count--;
	}
	destinasiTitle.innerHTML = destinationList[count];
	destinasiImg.innerHTML = `<img src="${imgList[count]}">`;
});