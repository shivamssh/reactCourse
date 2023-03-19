// React components
// - functional Component - NEW
// A React element
import { Link } from 'react-router-dom';
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
                                                  <Link to="/" className='p-1'>
                                                            <li>Home</li>
                                                  </Link>
                                                  <Link to="/aboutus" className='p-1'>
                                                            <li>About</li>
                                                  </Link>
                                                  <Link to="/" className='p-1'>                                                  
                                                            <li>Contact</li>
                                                  </Link>

                                                  <Link to="/" className='p-1'>
                                                            <li>Cart</li>
                                                  </Link>
                                        </ul>
                              </div>
                    </div>
          );
};

export default HeaaderComponent;