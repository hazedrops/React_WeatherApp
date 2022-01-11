import './styles/style.scss';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ChangeMode from './ChangeMode';
import Main from './Main';

function App() {
  return (
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
  );
}

export default App;
