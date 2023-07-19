import {Child} from './Child'

const Parent = () =>{
  return <Child color='red' onClick={()=>{console.log('clicked')}} >
    children prop
  </Child>
}
export default Parent