import React from 'react';
// import state from '../state.js'

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: false
    }
  }

  render() {
    let reviews= this.props.product.reviews;
    let numOfRev = reviews.length;
    let reviewLink = '';
    let reviewsArray = [];
    let reviewListArray = this.state.reviewList;
    let that = this;

    if(numOfRev === 1){
      reviewLink = '1 review'
    } else {
      reviewLink = numOfRev + ' reviews';
    }
    function handleClickEvent() {
      if(!reviewListArray){
        reviewsArray = reviews.map((item) => {
          return <li>item.description</li>
        })
      } else {
          reviewsArray = [];
      }
      console.log('click', !reviewListArray, reviewsArray)
      that.setState({
        reviewList: !reviewListArray
      })

    }


    return (
      <div>
        <p className="pull-right" onClick={handleClickEvent}>{reviewLink}</p>
        <ul>{reviewsArray}</ul>
      </div>
    )
  }
}
