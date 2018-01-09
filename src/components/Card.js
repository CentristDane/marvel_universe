import React, {Component} from 'react';
import classnames from 'classnames';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.flipped) {
      this.props.checkMatch(this.props.id, this.props.flipped);
      this.setState({flipped:true});

    }
  }

  render() {
    var classes = classnames(
      'Card',
      {'Card--flipped': this.props.flipped},
      {'Card--matched': this.props.matched}
    );
    var cardValue = this.props.flipped ? this.props.value : '';
    var cardImage = this.props.image;
   
    return (
      <div className={classes} onClick={this.handleClick}>
        {cardValue}
         <img  src={cardImage} />

      </div>
    );
  }
}