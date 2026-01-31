
import User from './assets/User'
import './App.css'
import IMG from './assets/img/A YouTube-style thum.png'
import Boot from './assets/img/boot.png'
import Tail from './assets/img/tailwind.png'
function App() {
  const userdata={img:IMG,price:"123",title:"html"}
  return (
    <>
    
    <User img={Boot} title={122} price="Bootstrap"/>
    <User img={IMG} title={333} price="React js"/>
    <User img={Tail} title={222} price="tilwind"/>
    </>
    
  )
}


export {App}
