import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogBreeds } from "../actions";


class AllBreeds extends Component {
  componentWillMount() {
    this.props.fetchDogBreeds();
  }

  returnAllBreeds = () => {
    const { dogBreeds } = this.props;

    return dogBreeds && Object.keys(dogBreeds).map(key => {
      return (
        <Link to={`/${key}`} key={key} className="btn btn-default btn-lg btn-success btn-fix">{key}</Link>
      );
    });
  }

  render() {
    if(this.props.dogsLoading) {
      return (
        <h3 className="centered">Loading...</h3>
      );
    };

    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">DOGGOS</a>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-12 spacing-fix">
            {this.returnAllBreeds()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { dogsLoading, dogBreeds, error } = state.dogs;

  return { dogsLoading, dogBreeds, error };
}

export default connect(mapStateToProps, { fetchDogBreeds })(AllBreeds);
