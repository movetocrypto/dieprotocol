import token from './DIE.png';
import telegram from './Telegram_logo.svg.png';
import uniswap from './uniswap.png';
import dextool from './dextool.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={token} className="token-logo" alt="token" />
      </header>
      <main className="App-main">
        <div className="et_pb_text">
        <h3>
          <strong>
          0x6ef6610d24593805144d73b13d4405e00a4e4ac7
          </strong>
        </h3>
        <h3>
          <strong>
          Taxes are 0/0
          </strong>
        </h3>
        <h3>
          <strong>
          LP sent to Vitalik
          </strong>
        </h3>
        </div>
        <a href="https://t.me/UnTokenEntry" target="_blank" rel="noreferrer">
          <img src={telegram} className="telegram-logo" alt="telegram"/> 
        </a>
      </main>
      <footer className='App-footer'>
        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x0cba60ca5ef4d42f92a5070a8fedd13be93e2861" target="_blank" rel="noreferrer">
          <img src={uniswap} className="uniswap-logo" alt="uniswap" />
        </a>
        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xf29450019834d7874b4e306275c4334326ac27f1" target="_blank" rel='noreferrer'>
          <img src={dextool} className="dextool-logo" alt="dextool" />
        </a>
      </footer>
    </div>
  );
}

export default App;
