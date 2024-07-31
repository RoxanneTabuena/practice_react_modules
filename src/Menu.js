import React, { useState } from 'react';

function Menu({onSelectVideo}) {
    const [ interaction, setInteraction ] = useState(false)
    const unclicked = (
        <div >
            <input type="radio" name="src" value="fast" checked="checked"/> fast
            <input type="radio" name="src" value="slow" /> slow
            <input type="radio" name="src" value="cute" /> cute
            <input type="radio" name="src" value="eek" /> eek
        </div>
        );
    const clicked =(
        <div >
            <input type="radio" name="src" value="fast" /> fast
            <input type="radio" name="src" value="slow" /> slow
            <input type="radio" name="src" value="cute" /> cute
            <input type="radio" name="src" value="eek" /> eek
        </div>
        );
    const clickHandler = (event) => {
        setInteraction(true);
        const name = event.target.value
        onSelectVideo(name);
    }
  
      return (
        <form onClick = {clickHandler} >
            {interaction? clicked : unclicked };
        </form>
      );
  };
  
  export default Menu;