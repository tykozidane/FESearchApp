import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbarkat'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Kategori(props) {
    const [data, setData] = useState(false)
    const [platform, setPlatform] = useState([])
    const { id } = props.match.params
    const { plat } = props.match.params
    useEffect(() => {
        axios.get(`http://localhost:5000/api/SearchApp/${id}`)
          .then(response => {
            setData(response.data.data)
            console.log(response.data.data)
          })
          .catch(error => {
            console.log(error);
          })
        axios.get(`http://localhost:5000/api/appByPlatform/?platformName=${plat}`)
          .then(response => {
            setPlatform(response.data.data)
            console.log(response.data.data)
          })
          .catch(error => {
            console.log(error);
          })
      }, [id, data.platformName])
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:5000/api/SearchApp/?kategori=${search}`)
    //         .then((response) => {
    //             console.log(response.data)
    //             setKategori(response.data.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    //     axios.get(`http://localhost:5000/api/SearchApp`)
    //         .then(response => {
    //             setData(response.data.data)
    //             console.log(response.data.data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [search])
    // console.log(search)
    // console.log('HomePage')
    return (
        
        <div className="body">
            <Navbar></Navbar>
            <div className="container-fluid pt-5" style={{ marginLeft: "100px" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                        
                        {data ? (
                                <div>
                                <div className="search">
                                    </div>
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">

                                        <div className="grid mx-2 mt-5">
                                            <img className="card-img" src={data.urlFoto} style= {{width: "80%" , justifyContent: "center"}}/>
                                            <div className="grid-item">
                                                <a href={`${data.urlweb}`}>
                                                    <div className="card">
                                                        <h1> {data.platform} </h1>
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{data.title}</h1>
                                                            <h2 class="card-header">Harga : {data.harga}</h2>
                                                            <h2 class="card-header">Kategori : {data.platform}</h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div></div>
                            ) : (null)}
                       
                        </div>
                    </div>
                </div>
            </div>
             <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {platform.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <a href={`/detail/${e.id}${e.platform}`}>
                                                    <div className="card">
                                                        <img className="card-img" src={e.urlFoto} style= {{width: "80%" ,}} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                            <h2 class="card-header">Harga : {e.harga}</h2>
                                                            <h2 class="card-header">Kategori : {e.platform}</h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
        </div>
    )
}

export default Kategori
