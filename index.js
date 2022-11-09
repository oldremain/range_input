const slider = document.querySelector(".slider");
const slider_min_value = parseFloat(slider.min);
const slider_max_value = parseFloat(slider.max);
const slider_range = Math.abs(slider_min_value) + Math.abs(slider_max_value);

const min_value = document.querySelector(".value--min");
const max_value = document.querySelector(".value--max");

min_value.textContent = `${Math.abs(slider_min_value)} %`;
max_value.textContent = `${slider_max_value} %`;

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
        ? RGB_TO_RED.red + 0.8
        : RGB_TO_RED.red - 0.8;

    RGB_TO_RED.green =
      targetValueByModule > currenValue
        ? RGB_TO_RED.green - 4.93
        : RGB_TO_RED.green + 4.93;

    RGB_TO_RED.blue =
      targetValueByModule > currenValue
        ? RGB_TO_RED.blue - 1.03
        : RGB_TO_RED.blue + 1.03;

    RGB_TO_GREEN.red =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.red - 7.7
        : RGB_TO_GREEN.red + 7.7;

    RGB_TO_GREEN.green =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.green + 3.56
        : RGB_TO_GREEN.green - 3.56;

    RGB_TO_GREEN.blue =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.blue - 1.03
        : RGB_TO_GREEN.blue + 1.03;

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
        "linear-gradient(90deg, rgba(231, 148, 31, 1) 0%,rgba(223,220,214, 1) 50%,rgba(231, 148, 31, 1) 100%)";
      RGB_TO_RED.red = 231;
      RGB_TO_RED.green = 148;
      RGB_TO_RED.blue = 31;

      RGB_TO_GREEN.red = 231;
      RGB_TO_GREEN.green = 148;
      RGB_TO_GREEN.blue = 31;

      currenValue = 0;

      return;
    }

    const targetValueByModule = Math.abs(targetValue);

    RGB_TO_RED.red =
      targetValueByModule > currenValue
        ? RGB_TO_RED.red + 0.8
        : RGB_TO_RED.red - 0.8;

    RGB_TO_RED.green =
      targetValueByModule > currenValue
        ? RGB_TO_RED.green - 4.93
        : RGB_TO_RED.green + 4.93;

    RGB_TO_RED.blue =
      targetValueByModule > currenValue
        ? RGB_TO_RED.blue - 1.03
        : RGB_TO_RED.blue + 1.03;

    RGB_TO_GREEN.red =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.red - 7.7
        : RGB_TO_GREEN.red + 7.7;

    RGB_TO_GREEN.green =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.green + 3.56
        : RGB_TO_GREEN.green - 3.56;

    RGB_TO_GREEN.blue =
      targetValueByModule > currenValue
        ? RGB_TO_GREEN.blue - 1.03
        : RGB_TO_GREEN.blue + 1.03;

    this.style.background = `linear-gradient(90deg,  rgba(${RGB_TO_RED.red}, ${RGB_TO_RED.green}, ${RGB_TO_RED.blue}, 1)  0%, rgba(223,220,214,1) ${colorTransitionPercent}%, rgba(${RGB_TO_GREEN.red}, ${RGB_TO_GREEN.green}, ${RGB_TO_GREEN.blue},1) 100%)`;

    currenValue = targetValueByModule;
  }
});
