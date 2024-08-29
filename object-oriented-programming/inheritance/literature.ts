class Theme {
    public themeName: string
    public shortDescription: string

constructor (themeName: string, shortDescription: string){
    this.themeName = themeName
    this.shortDescription = shortDescription
}

print(): void {
    console.log(`Theme: ${this.themeName}`)
    console.log(`Description: ${this.shortDescription}`)
}

}

class TypeLiterature extends Theme {
    public typeOfTheme: string
    public example: string
    public ranking: number


    constructor (themeName: string, shortDescription: string, typeOfTheme: string, example: string, ranking: number){
        super (themeName, shortDescription)
        this.typeOfTheme = typeOfTheme
        this.example = example
        this.ranking = ranking
    }
    print(): void {
        super.print()
        console.log(`Type: ${this.typeOfTheme}`)
        console.log(`Example: ${this.example}`)
        console.log(`Ranking: ${this.ranking}`)
      }

}


class Compare {
    public typeLiterature1: TypeLiterature
    public typeLiterature2: TypeLiterature

    constructor(typeLiterature1: TypeLiterature, typeLiterature2: TypeLiterature) {
        this.typeLiterature1 = typeLiterature1
        this.typeLiterature2 = typeLiterature2
      }

      compare(): void {
        const { typeOfTheme: type1, ranking: ranking1 } = this.typeLiterature1
        const { typeOfTheme: type2, ranking: ranking2 } = this.typeLiterature2
        
        const typeWithHighestRanking = ranking1 > ranking2 ? type1 : type2
        console.log(`The type of literature with the highest ranking is: ${typeWithHighestRanking}`)
      }
    
      compareType(): void {
        const { typeOfTheme: type1 } = this.typeLiterature1
        const { typeOfTheme: type2 } = this.typeLiterature2
    
        const typeComparisonResult = type1 === type2 ? 'is the same' : 'is not the same'
        console.log(`The type of literature ${typeComparisonResult}`)
      }
    }

    const typeLiterature1 = new TypeLiterature('Love', 'Love is a variety of different feelings, states, and attitudes that ranges from interpersonal affection ("I love my mother") to pleasure ("I loved that meal").', 'Romance', 'Romeo and Juliet', 10)
const typeLiterature2 = new TypeLiterature('War', 'War is a state of armed conflict between states, governments, societies and informal paramilitary groups, such as mercenaries, insurgents and militias. It is generally characterized by extreme violence, aggression, destruction, and mortality, using regular or irregular military forces.', 'Tragedy', 'Antigone', 8)

typeLiterature1.print()
typeLiterature2.print()

const compare = new Compare(typeLiterature1, typeLiterature2)

compare.compare()
compare.compareType()


