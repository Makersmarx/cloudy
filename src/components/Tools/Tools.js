import React, { useState } from 'react';
import './Tools.css';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header/Header';

let randomColor = require('randomcolor');

function Tools() {
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
          luminosity: 'dark',
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
          className="input-field"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Clear The Clouds..."
          onKeyPress={(e) => keyPress(e)}
        />
      </div>
      <button className="prof-button" onClick={newitem}>
        Push
      </button>

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

      <div class="row">
        <div class="column">
          <div class="card">Class Notes</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="column">
          <div class="card">Class Notes</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
