interface Car{
  name: String;
  year: number;
}

const printcar = (car: Car)=>{
  console.log(car.name,car.year)
}

printcar({name:'lambo',year:2023})



interface Reportable{
  summary():string;
}

const drink = {
  name:'coke',
  carbonated:true,
  summary(): string {
    return `My drink is ${this.name}`
  }
}

const car = {
  name:'BMW',
  model:'M5',
  summary(): string{
    return `My car is ${this.name}`
  }
}


const printSummary = (item: Reportable)=> {
  console.log(item.summary())
}

printSummary(drink)
printSummary(car)