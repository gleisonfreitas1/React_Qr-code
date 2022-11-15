import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRcodelink from 'qrcode'
import './App.css';


function App() {
  const [link, setlink] = useState('')
  const [qrcodelink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRcodelink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    },function (err, url){
      setQrcodeLink(url); 
    })

  }
  
  function handleQrcode(Event){
    setlink(Event.target.value)
    handleGenerate(Event.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <QRCode
        value={link}
        />

        <input 
        placeholder='digite o seu link...' 
        className="input" 
        value={link}
        onChange={ (Event) => handleQrcode(Event)}
        ></input>
        <button className='btn'><a className='btn-link' href={qrcodelink} download={'QRcode.png'} > Baixar QRcode </a></button>

      </div>
    </div>
  );
}

export default App;
