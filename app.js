let sushi = 0;
let knife = 0;

let sushiStatus = document.getElementById("sushi-count")
let knifeStatus = document.getElementById("knife-count")
let bambooStatus = document.getElementById("bamboo-count")
let chefStatus = document.getElementById("chef-count")
let helperStatus = document.getElementById("helper-count")


function makeSushi() {
    sushi++;
    updateInventory();
}

function updateInventory() {
    // if (health <= 0) {
    //   health = 0
    //   winStatus.hidden = false

    // }

    sushiStatus.innerHTML = `
    ${sushi}
    `

    knifeStatus.innerHTML = `
    ${knife}
    `
  }

function buyKnife() {
    if (sushi >= 50) {
        sushi -= 50;
        knife++;
        updateInventory();
    }
}



// let clickUpgrades = {
//     knives: {
//         price: 50,
//         quantity: 0,
//         multiplier: 2
//     },
//     // bambooMat: {
//     //     price: 200,
//     //     quantity: 0,
//     //     multiplier: 3
//     // }

// }

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

