import React from "react";

function Sushi({sushi, onEatSushi}) {
  const {name, img_url, price, eaten} = sushi

  function handleClick () {
    onEatSushi(sushi)
  }
    
  

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */} - ${/* Give me a price! */}
      </h4>
    </div>
  );
}

export default Sushi;
