import { useState } from "react";

const GuestList: React.FC = ()=>{
  const [name,setName] = useState('')
  const [Guests, setGuests] = useState<string[]>([])
  
  const onClick = () =>{
    setName('');
    setGuests([...Guests,name]);
  }
  
  return (
  <div>
    <div>Guest List</div>
    <ul>
      {Guests.map((guest,index)=><li key={index} >{guest}</li>)}
    </ul>
    <input value={name} onChange={(e)=>setName(e.target.value)} onKeyUp={(e)=>e.key==='Enter'?onClick():null}/>
    <button onClick={onClick}>Add Guest</button>
  </div>);
}
export default GuestList;
