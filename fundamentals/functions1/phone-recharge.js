const prompt = require("prompt-sync")()

function phoneRecharge(name, recharge, yearsAffiliated) {
  if (yearsAffiliated < 1 || recharge > 50 || recharge < 20) {
    return `${name} can't participate in the promotion`
  }

  const isSuperSaverPromo = recharge < 38 && yearsAffiliated <= 3
  const isMegaRechargePromo = yearsAffiliated > 3

  let promoMultiplier = 1
  let promotionName = ""

  if (isSuperSaverPromo) {
    promoMultiplier = 2
    promotionName = "SuperSaver";
  } else if (isMegaRechargePromo) {
    promoMultiplier = 3
    promotionName = "MegaRecharge"
  }

  const totalRecharge = recharge * promoMultiplier

  if (promoMultiplier > 1) {
    return `${name}, you can participate in the ${promotionName} promotion. Your recharge is $${totalRecharge}.`
  }
}

const name = prompt("What is your name? ")
const recharge = Number(prompt("How much do you want to recharge? "))
const yearsAffiliated = Number(
  prompt("How many years have you been affiliated? ")
)

console.log(phoneRecharge(name, recharge, yearsAffiliated))