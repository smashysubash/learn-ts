class car{
  sound(){
      console.log('vroom')
  }
}

class lambo extends car{
  sound(){
      console.log('darrrr')
  }
}
let a = new lambo()
a.sound()