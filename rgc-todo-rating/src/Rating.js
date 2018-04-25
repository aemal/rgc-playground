import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { bindActionCreators } from 'redux';
import * as ratingActions from './actions/ratingActions';

class Rating extends Component {

    ratingClicked(rate) {
        this.props.ratingClicked(this.props.id, rate);
        this.props.valueCallback && this.props.valueCallback(rate);
        console.log(rate, this.props.id)
    }

    render() {
        const state  = this.props.selectedRate;

        //Below code is to render the value considering
        //the scenario where Rating is used in a list
        const ClickedRate = state.filter(star => {
            return this.props.id === star.id
        }).map(currentStar => {
            return currentStar.rate
        });
        console.log(ClickedRate)
        return (
            <div style={this.props.ratingStyle}>
                <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={ClickedRate}
                      onStarClick={this.ratingClicked.bind(this)}
                    />
                {ClickedRate}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return ({ selectedRate: state.ratingReducer });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ratingActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);