import logo from './img/logo.png';

function Logo() {
  // Refresh a page on logo click
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div onClick={ refreshPage }>
      <a href="#">
        <img className="logo" src={logo} alt="The weather app logo" />
      </a>
    </div>
  )
}

export default Logo
