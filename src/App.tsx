/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2021-10-11 08:42:32
 * @LastEditors: tjwang
 * @LastEditTime: 2021-10-20 08:57:07
 */
import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} className='Hello'>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
