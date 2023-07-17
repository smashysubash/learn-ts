interface Car{
  name: String;
  year: number;
}

const printcar = (car: Car)=>{
  console.log(car.name,car.year)
}

printcar({name:'lambo',year:2023})