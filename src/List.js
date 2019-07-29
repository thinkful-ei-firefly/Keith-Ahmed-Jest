import React from 'react';
import Card from './Card'
import './List.css';

function List(props) {
  console.log(props);
  const newCards = props.cards.map(card => 
    <Card title = {card.title} content = {card.content} key = {card.id} />);

  return (
    <section className = "List">
      <header>{props.header}</header>
      <div className = "List-cards">
        {newCards}
      </div>
    </section>
  );
}

export default List;