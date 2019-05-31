import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleBreed } from "../actions";

class SingleBreed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randImgLink: ""
    };
  };

  componentWillMount() {
    const { dogbreed } = this.props.match.params;
    this.props.fetchSingleBreed(dogbreed);
  }

  randomizedBreedImage = () => {
    const { singleBreedImages } = this.props;

    let randImgLink = singleBreedImages && singleBreedImages[Math.floor(Math.random()*singleBreedImages.length)];
    this.setState({
      randImgLink
    });

  };


  render() {
    const { singleBreedImages } = this.props;
    const { dogbreed } = this.props.match.params;

    if(this.props.dogsLoading) {
      return (
        <h3 className="centered">Loading...</h3>
      );
    };

    let initialPhoto = singleBreedImages && singleBreedImages[Math.floor(Math.random()*singleBreedImages.length)];

    return (
      <div className="container centered">
        <div className="row">
          <div className="col-md-12">
            <h1>{dogbreed}</h1>
            <Link to={'/'} className="btn btn-default btn-fix">Back</Link>
            <button
              onClick={() => this.randomizedBreedImage()}
              className="btn btn-default btn-fix"
            >
              Refresh</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <img src={this.state.randImgLink || initialPhoto} alt="dog" className="img-fix"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { dogsLoading, singleBreedImages, error } = state.dogs;

  return { dogsLoading, singleBreedImages, error };
}

export default connect(mapStateToProps, { fetchSingleBreed })(SingleBreed);
