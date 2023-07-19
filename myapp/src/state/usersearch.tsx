import { useState } from "react";

interface user{
  name: string;
  year: number;
}

const UserSearch: React.FC = ()=>{
  const userdata: user[] = [{name:'subash',year:2023},{name:'smashy',year:2020},{name:'joe',year:2003}]
  const [namefld, setNamefld] = useState('')
  const [searchresult, setSearchresult] = useState<user[]>([])
  const onclick:()=>void = ()=>{
    const data = userdata.filter(user=>user.name.includes(namefld))
    setSearchresult(data)
  }
  const onchangee = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setNamefld(e.target.value)
  }

  return(
    <div>
      <div>
        <input value={namefld} onChange={onchangee} onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>)=>e.key==='Enter'?onclick():null}/>
        <button onClick={onclick}>Find user</button>
      </div>
      <div>
        {searchresult.map(({name,year},index)=>
          <div key={index}>name: {name}<br></br>year: {year}</div>)}
      </div>
    </div>
  );
}

export default UserSearch;