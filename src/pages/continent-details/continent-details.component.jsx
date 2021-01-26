

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CONTINENT_DETAILS } from '../../Types';
import { withRouter } from 'react-router-dom';
import CountriesComp from '../../components/Countries/Countries.Component';
import './continent-details.style.css'
const ContinentDetails = (props) => {
  const { loading, data, error } = useQuery(
    GET_CONTINENT_DETAILS,
    { variables: { code: props.match.params.id } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops!! Something wrong!!</p>;
  let { continent } = data;

  return (<div>
    <nav className="navbar navbar-dark nav-color">
      <div className="container-fluid">
        
        <span className="navbar-brand" >Continent Detail </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-brand">
              <span className="nav-link" onClick={() => props.history.push('/')}>Continent List <span className="sr-only">(current)</span></span>
            </li>
          </ul>

        </div>
      </div>
    </nav>

    <main role="main" className="container-fluid ">
      <div className="row bg mb15">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-2">{continent.name}</h1>
            <p className="lead">This Continent Name is {continent.name}.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="row">

        <div className="col-md-12 mb-4">
          <p>
            {continent.name} based Country and langauges here.
      </p>
          <h3 className="display-3">Country List</h3>


          <div className="row">
            {
              continent['countries'].map(row => {
                return <CountriesComp key={row.code} {...row} />
              })
            }

          </div>

        </div>

      </div>
      </div>
    </main>
    <footer className="container-fluid foter">
      <div className="row bg">
        <div className="col-lg-12">
          <p className="text-center">Original design by <span>IndoreAI</span></p>
        </div>
      </div>
    </footer>
  </div>);
};

export default withRouter(ContinentDetails);