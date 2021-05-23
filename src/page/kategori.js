import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbarkat'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Kategori(props) {
    const [data, setData] = useState([])
    const [kategori, setKategori] = useState([])
    const { search } = props.match.params
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/SearchApp/?kategori=${search}`)
            .then((response) => {
                console.log(response.data)
                setKategori(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get(`http://localhost:5000/api/SearchApp`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [search])
    console.log(search)
    console.log('HomePage')
    return (
        
        <div className="body">
            <Navbar></Navbar>
            <div className="container-fluid pt-5" style={{ marginLeft: "100px" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                        <h1> Kategori " {search} " </h1>
                        {search ? (
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    
                                    {kategori.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <a href={`${e.urlweb}`}>
                                                    <div className="card">
                                                        <img className="card-img" src={e.urlFoto} style= {{width: "80%" , justifyContent: "center"}}/>
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                            <h2 class="card-header">Harga : {e.harga}</h2>
                                                            <h2 class="card-header">Kategori : {e.kategori}</h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    ))}</div>
                            ) : (
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {data.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <a href={`${e.urlweb}`}>
                                                    <div className="card">
                                                        <img className="card-img" src={e.urlFoto} style= {{width: "80%" ,}} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                            <h2 class="card-header">Harga : {e.harga}</h2>
                                                            <h2 class="card-header">Kategori : {e.kategori}</h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))}</div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kategori
