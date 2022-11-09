const slider = document.querySelector(".slider");
const min_value = document.querySelector(".value--min");
const max_value = document.querySelector(".value--max");

min_value.textContent = Math.abs(slider.min);
max_value.textContent = slider.max;

const RGB_TO_RED = {
  red: 231,
  green: 148,
  blue: 31,
};

const RGB_TO_GREEN = {
  red: 231,
  green: 148,
  blue: 31,
};

let redA = 231;
let greenA = 148;
let blueA = 31;

let redB = 231;
let greenB = 148;
let blueB = 31;

let currenValue = 0;

slider.addEventListener("input", function (e) {
  const targetValue = parseFloat();
  if (+e.target.value < 0) {
    this.style.opacity = 1;

    min_value.textContent =
      ((Math.abs(slider.min) - Math.abs(e.target.value)).toFixed(2) * 100) /
      100;

    max_value.textContent =
      ((+slider.max + Math.abs(e.target.value)).toFixed(2) * 100) / 100;

    let beforeValue = "";

    beforeValue = ((+min_value.textContent / 6) * 100).toFixed(0);

    const targetValue = Math.abs(e.target.value);

    redB = targetValue > currenValue ? redB + 0.8 : redB - 0.8;
    greenB = targetValue > currenValue ? greenB - 4.93 : greenB + 4.93;
    blueB = targetValue > currenValue ? blueB - 1.03 : blueB + 1.03;

    redA = targetValue > currenValue ? redA - 7.7 : redA + 7.7;
    greenA = targetValue > currenValue ? greenA + 3.56 : greenA - 3.56;
    blueA = targetValue > currenValue ? blueA - 1.03 : blueA + 1.03;

    currenValue = targetValue;

    // this.style.background = `linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(223,220,214,1) ${beforeValue}%, rgba(255,0,0,1) 100%)`;

    this.style.background = `linear-gradient(90deg,  rgba(${redA}, ${greenA}, ${blueA}, 1)  0%, rgba(223,220,214,1) ${beforeValue}%, rgba(${redB}, ${greenB}, ${blueB},1) 100%)`;
  }

  if (+e.target.value >= 0) {
    this.style.opacity = 1;
    setTimeout(() => (this.style.opacity = 1), 1000);

    max_value.textContent =
      ((slider.max - e.target.value).toFixed(2) * 100) / 100;

    min_value.textContent =
      ((Math.abs(slider.min) + +e.target.value).toFixed(2) * 100) / 100;

    let afterValue = "";

    afterValue = ((+min_value.textContent / 6) * 100).toFixed(0);

    if (+e.target.value === 0) {
      this.style.background =
        "linear-gradient(90deg, rgba(231, 148, 31, 1) 0%,rgba(223,220,214, 1) 50%,rgba(231, 148, 31, 1) 100%)";
      redA = 231;
      greenA = 148;
      blueA = 31;

      redB = 231;
      greenB = 148;
      blueB = 31;

      currenValue = 0;
      return;
    }

    const targetValue = Math.abs(e.target.value);

    redB = targetValue > currenValue ? redB + 0.8 : redB - 0.8;
    greenB = targetValue > currenValue ? greenB - 4.93 : greenB + 4.93;
    blueB = targetValue > currenValue ? blueB - 1.03 : blueB + 1.03;

    redA = targetValue > currenValue ? redA - 7.7 : redA + 7.7;
    greenA = targetValue > currenValue ? greenA + 3.56 : greenA - 3.56;
    blueA = targetValue > currenValue ? blueA - 1.03 : blueA + 1.03;

    this.style.background = `linear-gradient(90deg,  rgba(${redB}, ${greenB}, ${blueB}, 1)  0%, rgba(223,220,214,1) ${afterValue}%, rgba(${redA}, ${greenA}, ${blueA},1) 100%)`;

    currenValue = targetValue;
  }
});
