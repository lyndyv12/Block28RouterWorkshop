import React from 'react'

function Home({ setColors, colors }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let selectedColor = event.target.elements.added_color.value;

        if (selectedColor === '') {
            alert('Please select a color');
          } else if (!colors.includes(selectedColor)) {
            setColors((prevColors) => [...prevColors, selectedColor]);
          } else {
            alert(`${selectedColor} has already been added.`);
          }
      
        console.log(colors);

        event.target.reset();
      };
      
    
    return (
      <div className='home' onSubmit={handleSubmit}>
            <form>
                <input type="radio" id="yellow" name="added_color" value="Yellow" />
                <label htmlFor="yellow">Add Yellow</label>
  
                <input type="radio" id="purple" name="added_color" value="Purple" />
                <label htmlFor="purple">Add Purple</label>
  
                <input type="radio" id="orange" name="added_color" value="Orange" />
                <label htmlFor="orange">Add Orange</label>
                <input type="submit" value="Submit"></input>
            </form>
        </div>

    );
  }
  

export default Home