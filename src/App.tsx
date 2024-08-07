import viteLogo from '/vite.svg'
import './App.css'

import './spinning.css'

function App() {

  //Enable easier changing of entire loading symbol size as a square unit
  const loading_symbol_size: number = 300;

  //Turn on another inner ring between the inner and middle rings
  let more_loading: boolean = false;
  //Turn on another inner ring between the middle and outer rings
  let extra_loading: boolean = false;
  //Turn on another inner ring within the inner ring
  let rainbow_loading: boolean = false;

  //Just made into a constant for easier use and exporting
  const loadingSymbol = 
  <>
      <div id='loading' style={{width: loading_symbol_size, height: loading_symbol_size, margin: 0, padding: 0, border: '1px solid black', position:'absolute'}}>
          <div id='vite-logo' style={{width: loading_symbol_size, height: loading_symbol_size, margin: 0, padding: 0, display:'block', position:'absolute', textAlign:'center', alignContent:'center'}}>
            <img src={viteLogo} className="logo" alt="Vite logo" style={{height:30}}/>
          </div>
          <div id='spinning-inner' style={{width:loading_symbol_size, height:loading_symbol_size, margin: 0, padding: 0, position: 'absolute'}}>
              <svg width="loading_symbol_size" height="loading_symbol_size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id='clipThird'>
                          <rect x="0%" y="0%" width="60%" height="50%"/>
                      </clipPath>
                      <linearGradient id="inner-color" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'#F0A63E', stopOpacity:1}} />
                          <stop offset="33.3%" style={{stopColor:'#FEE42C', stopOpacity:1}} />
                          <stop offset="66.6%" style={{stopColor:'#F8E52C', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#F8E52C', stopOpacity:1}} />
                      </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="20" stroke="url(#inner-color)" strokeWidth="2" fill="none" clipPath='url(#clipThird)' />
              </svg>
          </div>
          <div id='spinning-middle' style={{width:loading_symbol_size, height:loading_symbol_size, margin: 0, padding: 0, position: 'absolute'}}>
              <svg width="loading_symbol_size" height="loading_symbol_size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id='clipThird'>
                          <rect x="0%" y="0%" width="60%" height="50%"/>
                      </clipPath>
                      <linearGradient id="middle-color" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'#ED243A', stopOpacity:1}} />
                          <stop offset="33.3%" style={{stopColor:'#ED2A27', stopOpacity:1}} />
                          <stop offset="66.6%" style={{stopColor:'#EE522F', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#EE522F', stopOpacity:1}} />
                      </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="30" stroke="url(#middle-color)" strokeWidth="2" fill="none" clipPath='url(#clipThird)' />
              </svg>
          </div>
          <div id='spinning-outer' style={{width:loading_symbol_size, height:loading_symbol_size, margin: 0, padding: 0, position: 'absolute'}}>
              <svg width="loading_symbol_size" height="loading_symbol_size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id='clipThird'>
                          <rect x="0%" y="0%" width="60%" height="50%"/>
                      </clipPath>
                      <linearGradient id="outer-color" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'#24AEDF', stopOpacity:1}} />
                          <stop offset="33.3%" style={{stopColor:'#297BC9', stopOpacity:1}} />
                          <stop offset="66.6%" style={{stopColor:'#435AB1', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#435AB1', stopOpacity:1}} />
                      </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" stroke="url(#outer-color)" strokeWidth="2" fill="none" clipPath='url(#clipThird)' />
              </svg>
          </div>
          {more_loading ? <div id='spinning-more' style={{width:loading_symbol_size, height:loading_symbol_size, margin: 0, padding: 0, position: 'absolute'}}>
              <svg width="loading_symbol_size" height="loading_symbol_size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id='clipThird'>
                          <rect x="0%" y="0%" width="60%" height="50%"/>
                      </clipPath>
                      <linearGradient id="more-color" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'#3768BC', stopOpacity:1}} />
                          <stop offset="33.3%" style={{stopColor:'#5D2E8C', stopOpacity:1}} />
                          <stop offset="66.6%" style={{stopColor:'#44317D', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#44317D', stopOpacity:1}} />
                      </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="35" stroke="url(#more-color)" strokeWidth="2" fill="none" clipPath='url(#clipThird)' />
              </svg>
          </div> : <></>}
          {extra_loading ? <div id='spinning-extra' style={{width:loading_symbol_size, height:loading_symbol_size, margin: 0, padding: 0, position: 'absolute'}}>
              <svg width="loading_symbol_size" height="loading_symbol_size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id='clipThird'>
                          <rect x="0%" y="0%" width="60%" height="50%"/>
                      </clipPath>
                      <linearGradient id="extra-color" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'#24B55E', stopOpacity:1}} />
                          <stop offset="33.3%" style={{stopColor:'#24B0A3', stopOpacity:1}} />
                          <stop offset="66.6%" style={{stopColor:'#435AB1', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#435AB1', stopOpacity:1}} />
                      </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="25" stroke="url(#extra-color)" strokeWidth="2" fill="none" clipPath='url(#clipThird)' />
              </svg>
          </div> : <></>}
          {rainbow_loading ? <div id='spinning-rainbow' style={{width:loading_symbol_size, height:loading_symbol_size, margin: 0, padding: 0, position: 'absolute'}}>
              <svg width="loading_symbol_size" height="loading_symbol_size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id='clipThird'>
                          <rect x="0%" y="0%" width="60%" height="50%"/>
                      </clipPath>
                      <linearGradient id="rainbow-color" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'red', stopOpacity:1}} />
                          <stop offset="11.1%" style={{stopColor:'orange', stopOpacity:1}} />
                          <stop offset="22.2%" style={{stopColor:'yellow', stopOpacity:1}} />
                          <stop offset="33.3%" style={{stopColor:'green', stopOpacity:1}} />
                          <stop offset="44.4%" style={{stopColor:'blue', stopOpacity:1}} />
                          <stop offset="55.5%" style={{stopColor:'indigo', stopOpacity:1}} />
                          <stop offset="66.6%" style={{stopColor:'violet', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#435AB1', stopOpacity:1}} />
                      </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="15" stroke="url(#rainbow-color)" strokeWidth="2" fill="none" clipPath='url(#clipThird)' />
              </svg>
          </div> : <></>}
      </div>
  </>

  return (
      <>
          <div style={{height:'100%', width:'100%'}}>
              <div style={{width:loading_symbol_size, height:loading_symbol_size, backgroundColor:'white'}}>
                  {loadingSymbol}
              </div>
          </div>
      </>
  )
}

export default App
