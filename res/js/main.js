const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const autoclickerupgrade = document.getElementById("autoclickerupgrade");

let cookies = 0;
let clickincrease = 1;
let clickincreaseprice = 100;
let autoclickerincrease = 0;
let autoclickerprice = 200;


cookie.onclick = () => {
 cookies += clickincrease;
 counter.innerHTML = cookies
}

clickupgrade.onclick = () => {
    if(cookies >= clickincreaseprice)
    cookies -= clickincreaseprice;
    clickincreaseprice += 100;
    clickupgrade.innerHTML =`Buy upgrade: ${clickincreaseprice}`
    counter.innerHTML = cookies;
    clickincrease++;
}
autoclickerupgrade.onclick = () => {
    if(cookies >= autoclickerprice)
    cookies -= autoclickerprice;
    autoclickerprice += 100;
    autoclickerupgrade.innerHTML =`Buy autoclicker upgrade: ${autoclickerprice}`;
    if (autoclickerincrease == 0) {
        setInterval(() => {
            cookies += autoclickerincrease;
            counter.innerHTML = cookies;
        }, 250);
    }autoclickerincrease++;
    }

