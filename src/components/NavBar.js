import React from 'react'
import {Link} from 'react-router-dom'
const NavBar =()=>{
    return (
      <div>
        <nav className="navbar  fixed-top  navbar-dark bg-dark  navbar-expand-lg  ">
            <div className="container">
                <Link  className="navbar-brand" to="/">NewsBird</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/general">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/business">Business</Link>
                    </li><li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                    </li><li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/general">General</Link>
                    </li><li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/health">Health</Link>
                    </li><li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/science">Science</Link>
                    </li><li className="nav-item">
                    <Link  className="nav-link" aria-current="page" to="/sports">sports</Link>
                    </li>
                    <li>
                    <Link  className="nav-link " aria-current="page" to="/technology">Technology</Link>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>
      </div>
    )
}
export default NavBar
