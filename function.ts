const add = (a: number,b: number): number=>{
  return a+b;
}

console.log(add(2,20))

const throwError = (message: string): void =>{
  if(!message)throw new Error(message);
}


const todayweather = {
  date: new Date(),
  weather: 'sunny'
}
const logweather = ({date,weather}:{date: Date,weather: string}):void =>{
  console.log(date,weather)
}

logweather(todayweather)

