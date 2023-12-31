import Chart from 'chart.js/auto'
import { alert, defaultModules, error, success } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from "../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";

defaultModules.set(PNotifyMobile, {});

const chartData = {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
  }
  
};
const salesChart = new Chart(document.getElementById("sales-chart"), chartData);

////////////////////////////////////////////////////////////////////////////////////////////

const keys = ["ShiftRight", "KeyV", "Digit8", "Slash", "Numpad4", "KeyO", "Digit1", "AltLeft", "Space", "Tab"];
let currentKeyIndex = 0; 
const text = document.querySelector("#key");
text.textContent = keys[currentKeyIndex];
window.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.code === keys[currentKeyIndex]) {
    currentKeyIndex++;
    text.textContent = keys[currentKeyIndex];
    success({
      text: "Correct!",
      delay: 300,
      addClass: "success",
    });
  }
  else {
    error({
      text: "Error",
      delay: 300,
      addClass: "error",
    });
  }
});

const newGame = document.querySelector(".new-game");
newGame.addEventListener("click", (e) => {
  currentKeyIndex = 0;
  text.textContent = keys[currentKeyIndex];
});

 
