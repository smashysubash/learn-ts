interface ChildProps{
  color: String;
  onClick: ()=> void;
  children: React.ReactNode;
}

export const  Child = ( {color, onClick, children}: ChildProps) =>{
  return (<div>Hi there I'm child with {color}
  <button onClick={onClick}>Click me</button>
  <div>{children}</div>
  </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children})=>{
  return <div>Hi My color is {color}
  <button onClick={onClick}>Click me</button>
  <div>{children}</div>
  </div> ;
}
Child.display = 'hello'
