import React from 'react';
import { useState } from 'react';

function Tweets() {
const [value,SetValue] = useState('')
const maxLength = 280;

const handleChange = ()=> {
    if(e.target.value.length < maxLength){
        SetValue(e.target.value);
    }
}

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
        <input type='text' placeholder="What's up" maxLength={maxLength} onChange={handleChange} />
        <span>{value.length}/{maxLength}</span>
      </main>
    </div>
  );
}

export default Tweets;