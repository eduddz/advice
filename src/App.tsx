import logo from './images/icon-dice.svg';
import dividerDesktop from './images/pattern-divider-desktop.svg';
import dividerMobile from './images/pattern-divider-mobile.svg';

import './App.scss';

export function App() {
  const device = window.screen.width < 750

  return (
    <div className='wrapper'>
      <h1>ADVICE #117</h1>
      <p>"It is easy to sit up and take notice, what's difficult is getting up and taking action.</p>
      <img src={device ? dividerMobile : dividerDesktop} />
      <div>
        <img className='logo' src={logo} alt="logo" />
      </div>
    </div>
  )
}
