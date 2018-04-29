import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/actions/Actions';

class Rating extends Component {

    ratingClicked(rate) {
        this.props.ratingClicked(this.props.id, rate);
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

        return (
            <div>
                <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={ ClickedRate.length !== 0 ? ClickedRate[0] : 0 }
                      onStarClick={this.ratingClicked.bind(this)}
                    />
                {ClickedRate}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return ({ selectedRate: state.rating });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
