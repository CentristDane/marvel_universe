import React, {Component} from 'react';
import Card from './Card';


function initialCards() {
  return [
    {value: 2, matched: false, flipped: false, image:"https://static.comicvine.com/uploads/original/13/135879/3629883-8243964530-13685.png"},
    {value: 4, matched: false, flipped: false, image:"http://static.webshopapp.com/shops/178694/files/101560151/marvel-captain-america-silver-age-displate.jpg"},
    {value: 1, matched: false, flipped: false, image:"https://www.virginmegastore.ae/medias/sys_master/root/hc8/h2c/9119209553950/700947-main.jpg"},
    {value: 1, matched: false, flipped: false, image:"https://static.comicvine.com/uploads/original/11120/111200659/4415998-3.jpg"},
    {value: 3, matched: false, flipped: false, image:"https://cheaphaircut.files.wordpress.com/2012/05/kirbys-thor.jpg"},
    {value: 4, matched: false, flipped: false, image:"https://i.pinimg.com/originals/23/8b/0a/238b0a5483e35ea71bf6007e7c5bc93f.png"},
    {value: 2, matched: false, flipped: false, image:"https://static.comicvine.com/uploads/original/4/49448/2627087-drstrange_white.jpg"},
    {value: 3, matched: false, flipped: false, image:"http://www.retrocrush.com/archive2005/antman/AntMan.jpg"}
  ];
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      cards: initialCards(),
      lastCard: 0,
      locked: false,
      matches: 0
    };
  }


//needs to be tested and bring .map in here then call ftn in render
  randomChar = (array) => {
    let i = array.length - 1;
     for (; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const temp = array[i];
       array[i] = array[j];
       array[j] = temp;
     }
     return array;
  }

 
  randomRender() {
    console.log(this.randomChar(this.state.cards));
    return this.renderCards(this.randomChar(this.state.cards));
    this.render();
     
}

  checkMatch(id, flipped) {
    var cards = this.state.cards;
    var matches = this.state.matches;
      if (cards[id].flipped === false){
        cards[id].flipped = true;
        {this.randomRender()}
     } else if (cards[id].flipped === true) {
      alert("you lose");
      {this.randomRender()}
     }  
}

  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          value={card.value}
          id={index}
          matched={card.matched}
          flipped={card.flipped}
          image={card.image}
          test={this.randomRender}
          checkMatch={this.checkMatch} />
      );
    });
  }

  reset() {
    this.setState({
      cards: initialCards(),
      lastCard: null,
      locked: false,
      matches: 0
    });
  }

  render() {
    var btnText = 'Reset';
    if (this.state.matches === this.state.cards.length / 2) {
      btnText = 'You Win! Play Again?';
    }
    return (
      <div className="Game">
        <div>
          <button onClick={this.reset}>{btnText}</button>
        </div>
        {this.randomRender()}
      </div>
    );
  }
}






  //   if (this.state.locked) {
  //     return;
  //   }
  //   var cards = this.state.cards;
  //   cards[id].flipped = true;
  //   this.setState({cards, locked: true});
  //   if (this.state.lastCard) {
  //     if (value === this.state.lastCard.value) {
  //       var matches = this.state.matches;
  //       cards[id].matched = true;
  //       cards[this.state.lastCard.id].matched = true;
  //       this.setState({cards, lastCard: null, locked: false, matches: matches + 1});
  //     } else {
  //       setTimeout(() => {
  //         cards[id].flipped = false;
  //         cards[this.state.lastCard.id].flipped = false;
  //         this.setState({cards, lastCard: null, locked: false});
  //       }, 1000);
  //     }
  //   } else {
  //     this.setState({
  //       lastCard: {id, value},
  //       locked: false
  //     });
  //   }
  // }