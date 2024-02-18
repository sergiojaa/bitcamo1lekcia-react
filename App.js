import './App.css'
import Text from './text'
import poto from './assets/image-equilibrium.jpg'
import foto from './assets/favicon-32x32.png'
import potoo from './assets/image-avatar.png'
import kristal from './assets/kristali.svg'
import saati from './assets/clock.svg'

function App(){
  return(
    <div className='container'>
      <div className='img'>
        <img className='imag' src={poto} alt=''/>
      </div>
      <div>
        <h3>Our Equilibrium connection promotes balance  and calm</h3>
      </div>
      <div>
        <div className='imgg'>
          <div className='gverd'>
          <img classname = 'imgcoming' src = {kristal}/>
          <p>0.041 ETH</p>
          </div>
          <div className='gverdi'>
            <img className='saati' src = {saati}/>
            <p>3 days left</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='leftimage'>
        <img src={potoo}/>
        <p className='bolo'>creation of <span>Jules Wyvern</span></p>
      </div>
    </div>
  )
}
export default App;
