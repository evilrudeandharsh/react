import { useState,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharacterAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const passref=useRef(null)
  const copyPassswordtoclipboard=useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)



  },[password])
  const handleGeneratePassword=useCallback(()=>{
    let charSet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let numSet='0123456789'
    let specialCharSet='!@#$%^&*()_+'

    let pass=""
    let str=""
    if(numberAllowed){
      str+=numSet

    }
    if(characterAllowed){
      str+=specialCharSet

    }
    str+=charSet

    for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str[index]
    }
    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])

  useEffect(()=>{handleGeneratePassword()},[length,numberAllowed,characterAllowed,handleGeneratePassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-10 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
          value={(password)}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passref}
           />
          <button
          onClick={(copyPassswordtoclipboard)}
          
          className='bg-orange-500 text-white px-4'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={
              (e)=>setLength(e.target.value)
            } />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultchecked={numberAllowed}
              id="numberinput"
              onChange={
                (e)=>setNumberAllowed((prev)=>!prev)
              } />
              <label htmlFor="">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={characterAllowed}
              id="characterinput"
              onChange={
                ()=>setCharacterAllowed((prev)=>!prev)
              } />
              <label htmlFor="">Special Characters</label>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
