/**
 * Interface Calculator
 */
interface Calculator{
    calculate(): number;
}

/**
 * Class InterestCalculator
 * @description Calculates interest rate
 */
class InterestCalculator implements Calculator{
    constructor(private principal:number, private rate: number, private time:number){

    }

    calculate(){
        return (this.principal*this.rate*this.time)/100;
    }
}

type Shape = 'square' | 'rectangle' | 'triangle' | 'circle';


/**
 * ShapeCalculator
 * @description Calculates area of shape provided by user
 */
class ShapeCalculator implements Calculator{
    constructor(public shapeType: Shape, private side1: number, private side2?: number){}

    calculate(){
        switch(this.shapeType){
            case 'square': return this.side1*this.side1;
            case 'rectangle': return this.side1 * this.side2;
            case 'triangle': return (this.side1 * this.side2)/2
            case 'circle':
            default: return 22/7 * this.side1 * this.side1;
        }
    }
}

let interest = new InterestCalculator(100, 3, 2);
console.log(`Interest is - ${interest.calculate()}`); 
let shapeArea = new ShapeCalculator('square', 2);
console.log(`Area of shape ${shapeArea.shapeType} is ${shapeArea.calculate()}`)
