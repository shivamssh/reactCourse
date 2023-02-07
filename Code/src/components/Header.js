// React components
// - functional Component - NEW
// A React element
import logo from './../../public/img/logo.png';

const Title = () => (
          <a id="title" key="title" href="/">
                    <img src={logo} className="logo" alt="Logo"  />
          </a>
);


const HeaaderComponent = () => {
          return (
                    <div className="header">
                              <Title />
                              <div className="nav-items">
                                        <ul>
                                                  <li>Home</li>
                                                  <li>About</li>
                                                  <li>Contact</li>
                                                  <li>Cart</li>
                                        </ul>
                              </div>
                    </div>
          );
};

export default HeaaderComponent;