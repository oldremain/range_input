const slider = document.querySelector(".slider");
const slider_min_value = parseFloat(slider.min);
const slider_max_value = parseFloat(slider.max);
const slider_step = parseFloat(slider.step);
console.log(slider_step);

const slider_range = Math.abs(slider_min_value) + Math.abs(slider_max_value);

const min_value = document.querySelector(".value--min");
const max_value = document.querySelector(".value--max");

min_value.textContent = `${Math.abs(slider_min_value)} %`;
max_value.textContent = `${slider_max_value} %`;

const BASE_RGB = {
  red: 255,
  green: 216,
  blue: 110,
};

const RGB_TO_RED = {
  red: 255,
  green: 216,
  blue: 110,
};

const RGB_TO_GREEN = {
  red: 255,
  green: 216,
  blue: 110,
};

const slider_mid_value =
  (Math.abs(slider_max_value) + Math.abs(slider_min_value)) / 2;

const RGB_TO_RED_STEP_RED = parseFloat(
  (Math.abs(BASE_RGB.red - 255) / (slider_mid_value / slider_step)).toFixed(2)
);
const RGB_TO_RED_STEP_GREEN = parseFloat(
  ((BASE_RGB.green / (slider_mid_value / slider_step)) * 1.2).toFixed(2)
);
const RGB_TO_RED_STEP_BLUE = parseFloat(
  ((BASE_RGB.blue / (slider_mid_value / slider_step)) * 1.2).toFixed(2)
);

const RGB_TO_GREEN_STEP_RED = parseFloat(
  ((BASE_RGB.red / (slider_mid_value / slider_step)) * 1.2).toFixed(2)
);
const RGB_TO_GREEN_STEP_GREEN = parseFloat(
  (Math.abs(BASE_RGB.green - 255) / (slider_mid_value / slider_step)).toFixed(2)
);
const RGB_TO_GREEN_STEP_BLUE = parseFloat(
  ((BASE_RGB.blue / (slider_mid_value / slider_step)) * 1.2).toFixed(2)
);

// console.log(RGB_TO_RED_STEP_RED, RGB_TO_RED_STEP_GREEN, RGB_TO_RED_STEP_BLUE);

let currenValue = 0;

slider.addEventListener("input", function (e) {
  const targetValue = parseFloat(e.target.value);

  if (targetValue < 0) {
    min_value.textContent = `${(
      Math.abs(slider_min_value) - Math.abs(targetValue)
    ).toFixed(1)} %`;

    max_value.textContent = `${(
      slider_max_value + Math.abs(targetValue)
    ).toFixed(1)} %`;

    const colorTransitionPercent = (
      (parseFloat(min_value.textContent) / slider_range) *
      100
    ).toFixed(0);

    const targetValueByModule = Math.abs(targetValue);

    RGB_TO_RED.red =
      targetValueByModule > currenValue
        ? RGB_TO_RED.red + RGB_TO_RED_STEP_RED
        : RGB_TO_RED.red - RGB_TO_RED_STEP_RED;

    RGB_TO_RED.green =
      targetValueByModule > currenValue
        ? RGB_TO_RED.green - RGB_TO_RED_STEP_GREEN
        : RGB_TO_RED.green + RGB_TO_RED_STEP_GREEN;

    RGB_TO_RED.blue =
      targetValueByModule > currenValue
        ? RGB_TO_RED.blue - RGB_TO_RED_STEP_BLUE
        : RGB_TO_RED.blue + RGB_TO_RED_STEP_BLUE;

    RGB_TO_GREEN.red =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.red - RGB_TO_GREEN_STEP_RED
        : RGB_TO_GREEN.red + RGB_TO_GREEN_STEP_RED;

    RGB_TO_GREEN.green =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.green + RGB_TO_GREEN_STEP_GREEN
        : RGB_TO_GREEN.green - RGB_TO_GREEN_STEP_GREEN;

    RGB_TO_GREEN.blue =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.blue - RGB_TO_GREEN_STEP_BLUE
        : RGB_TO_GREEN.blue + RGB_TO_GREEN_STEP_BLUE;

    this.style.background = `linear-gradient(90deg,  rgba(${RGB_TO_GREEN.red}, ${RGB_TO_GREEN.green}, ${RGB_TO_GREEN.blue}, 1)  0%, rgba(223,220,214,1) ${colorTransitionPercent}%, rgba(${RGB_TO_RED.red}, ${RGB_TO_RED.green}, ${RGB_TO_RED.blue},1) 100%)`;

    currenValue = targetValueByModule;
  }

  if (targetValue >= 0) {
    max_value.textContent = `${(slider_max_value - targetValue).toFixed(1)} %`;

    min_value.textContent = `${(
      Math.abs(slider_min_value) + targetValue
    ).toFixed(1)} %`;

    const colorTransitionPercent = (
      (parseFloat(min_value.textContent) / slider_range) *
      100
    ).toFixed(0);

    if (targetValue === 0) {
      this.style.background =
        "linear-gradient(90deg, rgba(255, 216, 110, 1) 0%,rgba(223,220,214, 1) 50%,rgba(255, 216, 110, 1) 100%)";
      RGB_TO_RED.red = BASE_RGB.red;
      RGB_TO_RED.green = BASE_RGB.green;
      RGB_TO_RED.blue = BASE_RGB.blue;

      RGB_TO_GREEN.red = BASE_RGB.red;
      RGB_TO_GREEN.green = BASE_RGB.green;
      RGB_TO_GREEN.blue = BASE_RGB.blue;

      currenValue = 0;

      return;
    }

    const targetValueByModule = Math.abs(targetValue);

    RGB_TO_RED.red =
      targetValueByModule > currenValue
        ? RGB_TO_RED.red + RGB_TO_RED_STEP_RED
        : RGB_TO_RED.red - RGB_TO_RED_STEP_RED;

    RGB_TO_RED.green =
      targetValueByModule > currenValue
        ? RGB_TO_RED.green - RGB_TO_RED_STEP_GREEN
        : RGB_TO_RED.green + RGB_TO_RED_STEP_GREEN;

    RGB_TO_RED.blue =
      targetValueByModule > currenValue
        ? RGB_TO_RED.blue - RGB_TO_RED_STEP_BLUE
        : RGB_TO_RED.blue + RGB_TO_RED_STEP_BLUE;

    RGB_TO_GREEN.red =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.red - RGB_TO_GREEN_STEP_RED
        : RGB_TO_GREEN.red + RGB_TO_GREEN_STEP_RED;

    RGB_TO_GREEN.green =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.green + RGB_TO_GREEN_STEP_GREEN
        : RGB_TO_GREEN.green - RGB_TO_GREEN_STEP_GREEN;

    RGB_TO_GREEN.blue =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.blue - RGB_TO_GREEN_STEP_BLUE
        : RGB_TO_GREEN.blue + RGB_TO_GREEN_STEP_BLUE;

    this.style.background = `linear-gradient(90deg,  rgba(${RGB_TO_RED.red}, ${RGB_TO_RED.green}, ${RGB_TO_RED.blue}, 1)  0%, rgba(223,220,214,1) ${colorTransitionPercent}%, rgba(${RGB_TO_GREEN.red}, ${RGB_TO_GREEN.green}, ${RGB_TO_GREEN.blue},1) 100%)`;

    currenValue = targetValueByModule;
  }
});
