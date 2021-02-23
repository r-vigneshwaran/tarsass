import React from 'react'
import useStyles from './styles'
import SearchBar from '../searchBar/SearchBar'

const Header = ({HandleSearch,currentPage,setQuery}) => {
    const classes=useStyles();
    return (
      <div className={classes.root}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow ">
        <div className="container">
          <a className="navbar-brand" href="#">Beautiful gallery</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
        </div>
      </nav>
      <header className={classes.masthead}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">Search for Hd Images Here</h1>
              <p className="lead">A Great place to search Images</p>
              <SearchBar currentPage={currentPage} HandleSearch={HandleSearch} setQuery={setQuery}/>
            </div>
          </div>
        </div>
      </header>
      </div>
    )
}

export default Header
