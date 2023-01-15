let punti = 0;
let streak = 0;
const btn = document.getElementById("BOX");
let risposta = 0;
let limit = 19;
let errori = 0;
let tempotot = 60;
let assegno = 0;
let maxStreak = 0;
let maxAssegno = 0;


function casuale() {

  console.log("Streak = " + streak + "\nPunti = " + punti + "\nLimite = " + limit);

  let first = Math.floor(Math.random() * (limit / 2));
  let second = Math.floor(Math.random() * (limit / 2));
  let randomSign = Math.floor(Math.random() * 2);
  let tmp = "";

  document.getElementById("punteggio").innerHTML = "Points = " + punti;


  //risposta esatta con segno più
  let casellaGiusta = (Math.floor(Math.random() * 4) + 1);
  if (randomSign == 0) {
    sign = "+";
    risposta = first + second;
  }
  else {
    sign = "-";
    if (first < second) {
      tmp = first;
      first = second;
      second = tmp;
    }

    //risposta esatta con segno meno
    risposta = first - second;
  }

  document.getElementById("BOX" + casellaGiusta).innerHTML = risposta;


  //formulazione domanda
  document.getElementById("Question").innerHTML = first + " " + sign + " " + second + " = ?";

  if (casellaGiusta == 1) {
    let a = 0;
    let b = 0;
    let c = 0;
    do {
      a = document.getElementById("BOX2").innerHTML = Math.floor(Math.random() * limit);
      b = document.getElementById("BOX3").innerHTML = Math.floor(Math.random() * limit);
      c = document.getElementById("BOX4").innerHTML = Math.floor(Math.random() * limit);
    } while (a == b || b == c || c == a || risposta == a || risposta == b || risposta == c);

  }

  if (casellaGiusta == 2) {
    let a = 0;
    let b = 0;
    let c = 0;
    do {
      a = document.getElementById("BOX1").innerHTML = Math.floor(Math.random() * limit);
      b = document.getElementById("BOX3").innerHTML = Math.floor(Math.random() * limit);
      c = document.getElementById("BOX4").innerHTML = Math.floor(Math.random() * limit);
    } while (a == b || b == c || c == a || risposta == a || risposta == b || risposta == c);
  }

  if (casellaGiusta == 3) {
    let a = 0;
    let b = 0;
    let c = 0;
    do {
      a = document.getElementById("BOX1").innerHTML = Math.floor(Math.random() * limit);
      b = document.getElementById("BOX2").innerHTML = Math.floor(Math.random() * limit);
      c = document.getElementById("BOX4").innerHTML = Math.floor(Math.random() * limit);
    } while (a == b || b == c || c == a || risposta == a || risposta == b || risposta == c);
  }

  if (casellaGiusta == 4) {
    let a = 0;
    let b = 0;
    let c = 0;
    do {
      a = document.getElementById("BOX1").innerHTML = Math.floor(Math.random() * limit);
      b = document.getElementById("BOX2").innerHTML = Math.floor(Math.random() * limit);
      c = document.getElementById("BOX3").innerHTML = Math.floor(Math.random() * limit);
    } while (a == b || b == c || c == a || risposta == a || risposta == b || risposta == c);

  }



  if (streak > maxStreak) {
    maxStreak = streak;
  }

  if (assegno > maxAssegno) {
    maxAssegno = assegno;
  }



  if (streak >= 15 && streak < 25) {
    limit = 100;
  }

  if (streak >= 25 && streak < 35) {
    limit = 200;
  }

  if (streak >= 35) {
    limit = 500;
  }





}

function firstbtn() {
  if (document.getElementById("BOX1").innerHTML == risposta) {
    punti = punti + 100;
    streak++;
    time = time + 2;
    if (streak >= 5) {
      assegno = assegno + 50;
      punti = punti + assegno;
    }
    tempotot = tempotot + 2;
  }
  else {
    assegno = 0;
    errori++;
    streak = 0;
    time--;
    tempotot--;
  }
  casuale();
}

function secondbtn() {
  if (document.getElementById("BOX2").innerHTML == risposta) {
    punti = punti + 100;
    streak++;
    time = time + 2;
    if (streak >= 5) {
      assegno = assegno + 50;
      punti = punti + assegno;
    }
    tempotot = tempotot + 2;
  }
  else {
    assegno = 0;
    errori++;
    streak = 0;
    time--;
    tempotot--;
  }
  casuale();
}

function thirdbtn() {
  if (document.getElementById("BOX3").innerHTML == risposta) {
    punti = punti + 100;
    streak++;
    time = time + 2;
    if (streak >= 5) {
      assegno = assegno + 50;
      punti = punti + assegno;
    }
    tempotot = tempotot + 2;
  }
  else {
    assegno = 0;
    errori++;
    streak = 0;
    time--;
    tempotot--;
  }
  casuale();
}

function fourthbtn() {
  if (document.getElementById("BOX4").innerHTML == risposta) {
    punti = punti + 100;
    streak++;
    time = time + 2;
    if (streak >= 5) {
      assegno = assegno + 50;
      punti = punti + assegno;
    }
    tempotot = tempotot + 2;
  }
  else {
    assegno = 0;
    errori++;
    streak = 0;
    time--;
    tempotot--;
  }
  casuale();
}


let time = 60;
const timer = setInterval(() => {
  time--;
  if (time >= 1) {
    document.getElementById("timer").innerHTML = time;
  }
  else {
    clearInterval(timer);

    document.getElementById("all").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    window.setTimeout("visible()", 2000);
  }


}, 1000);



function visible() {
  maxAssegno = maxAssegno + 100;
  document.getElementById("score").innerHTML = "Points = " + punti + "<br>Errors = " + errori + "<br>Time = " + tempotot + "s<br>Max Streak = " + maxStreak + "<br>Top Earning (with 1 choice) = " + maxAssegno;
  document.getElementById("score").style.visibility = "visible";
  document.getElementById("traguardo").style.visibility = "visible";
}




