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
                        <li className="nav-item " style = {{marginLeft : "300px"}}>
                                     <Link to={`/kategori/Windows`}>
                                    <button type="submit" className="btn-search">
                                    <b>Windows</b>
                                    </button>
                                    </Link>
                        </li>     
                        <li className="nav-item " style = {{marginLeft : "300px"}}>
                                     <Link to={`/kategori/Games`}>
                                    <button type="submit" className="btn-search">
                                    <b>Games</b>
                                    </button>
                                    </Link>
                        </li>      
                        <li className="nav-item " style = {{marginLeft : "300px"}}>
                                     <Link to={`/kategori/Android`}>
                                    <button type="submit" className="btn-search">
                                    <b>Android</b>
                                    </button>
                                    </Link>
                        </li>   
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbarkat