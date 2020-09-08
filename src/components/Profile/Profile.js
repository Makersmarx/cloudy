import React, { useState, useEffect } from 'react';
// import './Profile.css';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Header/Header';

let randomColor = require('randomcolor');

function Profile() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const newitem = () => {
    if (item.trim() !== '') {
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: 'bright',
        }),
        defaultPos: { x: 620, y: 250 },
      };
      setItems((items) => [...items, newitem]);
      setItem('');
    } else {
      alert('Make it Rain');
      setItem('');
    }
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <div id="new-item">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Clear The Clouds..."
          onKeyPress={(e) => keyPress(e)}
        />
        <button onClick={newitem}>ENTER</button>
      </div>
      {items.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color }} className="box">
              {`${item.item}`}
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

export default Profile;
