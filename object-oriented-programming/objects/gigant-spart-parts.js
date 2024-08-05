const MARKUP = 1.25
const NON_ORIGINAL_DISCOUNT = 0.9

const spareParts = {
  createPart(code, name, date, basePrice, isOriginal) {
    return {
      code,
      name,
      date,
      basePrice,
      isOriginal,
    }
  },

  calculatePrice(part) {
    const { basePrice, isOriginal } = part

    if (isOriginal) {
      return basePrice * MARKUP 
    } else {
      const discountedPrice = basePrice * NON_ORIGINAL_DISCOUNT
      return discountedPrice * MARKUP
    }
  }
}

const originalSparePart = spareParts.createPart(1, "Starter", "2020-01-01", 1000, true)
const originalSparePartPrice = spareParts.calculatePrice(originalSparePart)
console.log(`The price of the ${originalSparePart.name} is $${originalSparePartPrice}`)

const fakeSparePart = spareParts.createPart(2, 'Radiator', '2020-01-01', 1000, false)
const fakeSparePartPrice = spareParts.calculatePrice(fakeSparePart)
console.log(`The price of the ${fakeSparePart.name} is $${fakeSparePartPrice}`)
