let sushi = 0;

let sushiStatus = document.getElementById("sushi-count")
let knifeStatus = document.getElementById("knife-count")
let bambooStatus = document.getElementById("bamboo-count")
let chefStatus = document.getElementById("chef-count")
let helperStatus = document.getElementById("helper-count")

let knifeButton = document.getElementById("knife-button")
let bambooButton = document.getElementById("bamboo-button")
let chefButton = document.getElementById("chef-button")
let helperButton = document.getElementById("helper-button")

let clickUpgrades = {
    knife: {
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    bambooMat: {
        price: 200,
        quantity: 0,
        multiplier: 3
    }
}

function buttonAvailability() {
    if (sushi < clickUpgrades.knife.price) {
        knifeButton.disabled = true;
    }
    if (sushi >= clickUpgrades.knife.price) {
        knifeButton.disabled = false;
    }
}

function makeSushi() {
    if (clickUpgrades.knife.quantity > 0) {
        sushi += clickUpgrades.knife.quantity * clickUpgrades.knife.multiplier;
    } else {
        sushi++;
    }
    updateInventory();
}

function updateInventory() {
    sushiStatus.innerHTML = `
    ${sushi}
    `
    knifeStatus.innerHTML = `
    ${clickUpgrades.knife.quantity}
    `
  }

function buyKnife() {
    clickUpgrades.knife.quantity++;
    sushi -= clickUpgrades.knife.price;
    updateInventory();
}

buttonAvailability();

// let autoUpgrades = {
//     chef: {
//         price: 500,
//         quantity: 0,
//         multiplier: 20
//     },
//     chefHelper: {
//         price: 1000,
//         quantity: 0,
//         multiplier: 40
//     }
// }


// function startInterval() {

// }

