let sushi = 0;

let sushiStatus = document.getElementById("sushi-count")
let knifeStatus = document.getElementById("knife-count")
let bambooStatus = document.getElementById("bamboo-count")
let chefStatus = document.getElementById("chef-count")
let chefHelperStatus = document.getElementById("helper-count")

let knifeButton = document.getElementById("knife-button")
let bambooButton = document.getElementById("bamboo-button")
let chefButton = document.getElementById("chef-button")
let chefHelperButton = document.getElementById("helper-button")

let knifePrice = document.getElementById("knife-price")

let clickUpgrades = {
    knife: {
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    bambooMat: {
        price: 200,
        quantity: 0,
        multiplier: 10
    }
}

let autoUpgrades = {
    chef: {
        price: 500,
        quantity: 0,
        multiplier: 100
    },
    chefHelper: {
        price: 1000,
        quantity: 0,
        multiplier: 200
    }
}

function buttonAvailability() {
    if (sushi >= clickUpgrades.knife.price) {
        knifeButton.disabled = false;
    } else if (sushi < clickUpgrades.knife.price) {
        knifeButton.disabled = true;
    }
    if (sushi >= clickUpgrades.bambooMat.price) {
        bambooButton.disabled = false;
    } else if (sushi < clickUpgrades.bambooMat.price) {
        bambooButton.disabled = true;
    }
    if (sushi >= autoUpgrades.chef.price) {
        chefButton.disabled = false;
    } else if (sushi < autoUpgrades.chef.price) {
        chefButton.disabled = true;
    }
    if (sushi >= autoUpgrades.chefHelper.price) {
        chefHelperButton.disabled = false;
    } else if (sushi < autoUpgrades.chefHelper.price) {
        chefHelperButton.disabled = true;
    }

}

function clickSushi() {
    sushi++;
    sushi += clickUpgrades.knife.quantity * clickUpgrades.knife.multiplier;
    sushi += clickUpgrades.bambooMat.quantity * clickUpgrades.bambooMat.multiplier;
    updateInventory();
    buttonAvailability();
}

function updateInventory() {
    sushiStatus.innerHTML = `
    ${sushi}
    `
    knifeStatus.innerHTML = `
    ${clickUpgrades.knife.quantity}
    `
    bambooStatus.innerHTML = `
    ${clickUpgrades.bambooMat.quantity}
    `
    chefStatus.innerHTML = `
    ${autoUpgrades.chef.quantity}
    `
    chefHelperStatus.innerHTML = `
    ${autoUpgrades.chefHelper.quantity}
    `
  }

function buyKnife() {
    clickUpgrades.knife.quantity++;
    sushi -= clickUpgrades.knife.price;
    clickUpgrades.knife.price += 10;
    knifePrice.innerText = clickUpgrades.knife.price;
    updateInventory();
    buttonAvailability();
}

function buyBamboo() {
    clickUpgrades.bambooMat.quantity++;
    sushi -= clickUpgrades.bambooMat.price;
    updateInventory();
    buttonAvailability();
}

updateInventory();
buttonAvailability();


// function startInterval() {

// }

