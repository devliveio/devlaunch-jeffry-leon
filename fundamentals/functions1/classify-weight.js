const parseKgToLbs = (weight) => Math.floor(weight * 2.2)

function weightOfPerson(kgWeight) {
  const lbsWeight = parseKgToLbs(kgWeight)
  
  const classify = lbsWeight < 100 
		? "Underweight"
		: (lbsWeight > 150)
			? "Obese"
			: "Normal"

  return `${classify}, your weight is ${lbsWeight} lbs`
}

console.log(weightOfPerson(50))
console.log(weightOfPerson(70))
console.log(weightOfPerson(20))
