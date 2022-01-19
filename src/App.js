import Logo from './Components/Logo';
import SearchBar from './Components/SearchBar';
import ChangeMode from './Components/ChangeMode';
import Main from './Components/Main';
import { WeatherAppProvider } from './context/WeatherAppContext';

import './styles/style.scss';

function App() {
  return (
    <WeatherAppProvider>
      <div className="container">
        <nav className="nav">
          <div className="nav-container">
            {/* logo in the nav bar */}
            <Logo />

            {/* search bar in the nav bar */}
            <SearchBar />

            {/* Change Mode F/C */}
            <ChangeMode />
          </div>
        </nav>
        <Main />
      </div>
    </WeatherAppProvider>
  );
}

export default App;
