import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'



function Navbarkat() {
     // let history = useHistory();

     const [search, setSearch] = useState(null)


     const inputHandler = (e) => {
         setSearch(e.target.value)
     }
 
     // const onSubmitHandler = (e) => {
     //     e.preventDefault();
 
     //     history.push("/")
     // }
    return (
        <div>
            <nav
                className="navbar navbar-desktop navbar-expand"
                style={{ zIndex: "2" }}
            >
                <div className="d-flex collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className=" navbar-nav  d-flex align-items-start mr-auto">
                        <li className="nav-item ">
                            <Link className="navbar-brand ml-5" to="/">
                                <h1>SearchApp</h1>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbarkat