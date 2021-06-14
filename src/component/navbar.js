import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'



function Navbar() {
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
                    <ul className=" navbar-nav  d-flex align-items-start">
                        <li className="nav-item ">
                            <Link className="navbar-brand ml-5" to="/">
                                <h1>SearchApp</h1>
                            </Link>
                        </li>
                        <li className="nav-item "style = {{marginLeft : "300px"}}>

                            <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group has-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari Gadget"
                                        value={search}
                                        onChange={inputHandler}
                                        style={{ borderRadius: "40px", fontSize: "15px", padding: "20px", paddingLeft: "50px", width: "550px" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        //onSubmit={<Link to="/result"></Link>}
                                    />
                                     <Link to={`/${search}`}>
                                    <button type="submit" className="btn-search">
                                    <i class='bx bx-search-alt-2'></i>
                                    </button>
                                    </Link>
                                </div>
                            </form>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar