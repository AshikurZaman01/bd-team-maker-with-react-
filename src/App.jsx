import { useState } from 'react'
import './App.css'
import Players from './Component/Players/Players'
import Header from './Component/Header/Header'
import Cart from './Component/Cart/Cart'

function App() {

  return (
    <>
     
     <div className='w-11/12 mx-auto'>
        <div className='p-4 mb-8'>
          <Header></Header>
      </div>
      
        <div className='flex flex-col md:flex-row w-full mx-auto gap-6 rounded '>
          <div className='md:w-4/5'><Players></Players></div>
          <div className='md:w-1/3 md:sticky top-0 h-[400px] bg-red-400'><Cart></Cart></div>
        </div>
      
     </div>
     
      
    </>
  )
}

export default App
