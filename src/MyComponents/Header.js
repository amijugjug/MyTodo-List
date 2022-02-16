import React from 'react'
// import {useRef} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
    let searchBarStyle = {
        width : "300px",
        height : "40px"
    }
    // Another method of performing search using useRef hook
    // const inputEl = useRef('');
    // const getSearchTerm = ()=>{
    //     props.onSearch(inputEl.current.value)
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Todo List</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        
                    </ul>{
                        <form className="d-flex">
                            {/* <input ref={inputEl} className="form-control me-2" type="text" value={props.searchItem} placeholder="Search..." aria-label="Search" onChange={getSearchTerm} style = {searchBarStyle}/> */}
                            <input className="form-control me-2" type="text" value={props.searchItem} placeholder="Search..." aria-label="Search" onChange={(e)=>props.onSearch(e.target.value)} style = {searchBarStyle}/>
                        </form>
                    }
                </div>
            </div>
        </nav>
    )
}
Header.defaultProps = {
    title : "My Todo List",
    searchBar : true
}
Header.propTypes={
    title : PropTypes.string,
    searchBar : PropTypes.bool
}