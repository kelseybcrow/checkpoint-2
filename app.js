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
        multiplier: 20
    },
    chefHelper: {
        price: 1000,
        quantity: 0,
        multiplier: 40
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

function makeSushi() {
    if ((clickUpgrades.knife.quantity > 0) || (clickUpgrades.bambooMat.quantity > 0)) {
        sushi += clickUpgrades.knife.quantity * clickUpgrades.knife.multiplier;
        sushi += clickUpgrades.bambooMat.quantity * clickUpgrades.bambooMat.multiplier;
    } else {
        sushi++;
    }
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
    updateInventory();
}

function buyBamboo() {
    clickUpgrades.bambooMat.quantity++;
    sushi -= clickUpgrades.bambooMat.price;
    updateInventory();
}

updateInventory();
buttonAvailability();


// function startInterval() {

// }

