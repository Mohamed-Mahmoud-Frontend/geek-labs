
import './App.css'
import FIlterComponent from './Components/FIlterComponent'
import SideBar from './Components/SideBar'
import Home from './pages/Home'

function App() {

  return (
    <div className='h-screen w-full p-1  '>
<div className='flex justify-between gap-2'>
<div>
<SideBar/>
</div>

<Home/>


<FIlterComponent/>

</div>


    </div>

  )
}

export default App
