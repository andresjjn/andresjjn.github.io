import './App.scss';
import logo from './images/logo.png'
// import coming from './images/coming.gif'
// import qr from './images/QRCode.jpeg'
import SocialFollow from "./components/SocialFollow"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} alt="logo" className="blink-image" />
            <div className='buttons'>
              <SocialFollow />  
            </div>
            {/* <a href="https://www.flowcode.com/page/ridingforadream?utm_term=dzB1ErnBO#q=dzB1ErnBO&c=f22f7189-569c-49ff-a0f9-c90e37056dc5-SSE:1628634018" title="Scan or click">
              <img src={qr} alt="Scan or click" className="qr-image"/>
            </a> */}
        {/* <img src={coming} alt="Coming soon..." className="coming"/> */}
        <a className='contact' href='https://forms.gle/baZy2b2RmtWaXo4ZA'> Contact us </a>
      </header>
    </div>
  );
}

export default App;
