import React from 'react';
import './App.css';
import List from './List'
import STORE from './Store';

function App() {
  return(
    <main className = "App">
      <AppHeader />
      <AppList store = {STORE}/>
    </main>
  );
}

function AppHeader(){
  return (
    <header className = "App-header">
      <h1>Trelloyes!</h1>
    </header>
  );
}
function AppList(prop){
  const Lists = prop.store.lists.map(list => {
    const cards = list.cardIds.map(id => {
      const ents = Object.entries(prop.store.allCards);
        let temp = ents.find(key => key[0] === id);
      return temp[1];
    });


    return <List header = {list.header} cards = {cards} key = {list.id}/>
  });
  return (
    <div className = "App-list">
      {Lists}
    </div>
  );
}

export default App;

//return <List header = {list.header} cards = {cards}/>