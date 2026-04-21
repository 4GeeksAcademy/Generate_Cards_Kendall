import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  //write your code here
  const suits = document.querySelectorAll('.suits');
  const number = document.querySelector('#number')
  
  const listSuits = ["♦" ,"♥", "♠", "♣","♜","♞","♝","♛","♚","♝","♞","♜","♟"];
  let randomSuits = listSuits[Math.floor(Math.random() * listSuits.length)];

  const listNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNumber = listNumber[Math.floor(Math.random() * listNumber.length)];

  number.innerText = randomNumber;
  
  suits.forEach(elem => {
  if (randomSuits === "♦" || randomSuits === "♥") {
    elem.style.color = 'red'
  } else {
    elem.style.color = "black"
  }
  
  elem.innerText = randomSuits;
  })

};

window.onload = generateCard;

const button = document.querySelector('.btn');
button.addEventListener('click', generateCard)
