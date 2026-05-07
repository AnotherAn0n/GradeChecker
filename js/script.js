const main = document.querySelector("main");
const container = document.querySelector(".container")
const items = "Technika Przyroda Muzyka Plastyka Biologia Chemia E.D.B. Fizyka Geografia Historia Informatyka J.Angielski J.Niemiecki J.Polski Matematyka W.O.S. W.F.".split(" ")
// const items = "Technika Przyroda".split(" ");
let terms;
let sum = [];
let avg;

const calcAvg = () => {
	sum = [];
	terms = document.querySelectorAll(".average__input ");
	for (term of terms) {
		sum.push(term.value * 1);
	}
	terms = sum;
	sum = 0;
	if (terms.indexOf(0) == -1) {
		for (term of terms) {
			sum += term;
		}
		avg = sum / terms.length;
        if(avg >= 4.75) {
            container.classList.add("good")
        }else {
            container.classList.remove("good")
        }
        console.log(avg);
	}
};
const createAllItems = () => {
	items.forEach((item) => {
		createItem(item);
	});
	main.innerHTML += '<button class="calc-btn">Calculate!</button>';
	calcBtn = document.querySelector(".calc-btn");
	calcBtn.addEventListener("click", calcAvg);
};
const createItem = (name) => {
	main.innerHTML += `<div class="average"><p class="average__tag">${name}</p><div class="average__box"><input type="text" class="average__input"></div></div>`;
};

createAllItems();
