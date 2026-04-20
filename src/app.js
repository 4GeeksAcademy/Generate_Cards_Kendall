import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = document.querySelectorAll('.suits');
  const number = document.querySelector('#number')
  
  const listSuits = ["♦" ,"♥", "♠", "♣"];
  let randomSuits = listSuits[Math.floor(Math.random() * 4)];

  const listNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNumber = listNumber[Math.floor(Math.random() * 13)];

  number.innerText = randomNumber;
  
  suits.forEach(elem => {
    if (randomSuits === "♦" || randomSuits === "♥") {
    suits.forEach(elem => {
      elem.style.color = "red";
    });
  }
    elem.innerText = randomSuits;
  })

};
