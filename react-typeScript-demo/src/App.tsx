import React, { useState, useRef } from 'react'

interface Props {
  text: String;
  clickFunction: ()=> void;
  changeFunction: (event: React.ChangeEvent<HTMLInputElement>)=> void;
}

const App:React.FC<Props> = ({clickFunction,changeFunction}) => {
  const [t, setT] = useState<number>(5)
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div ref={divRef} onClick={clickFunction}>
      <input type="text" ref={inputRef} onChange={changeFunction} />
    </div>
  )
}

export default App