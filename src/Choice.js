import React from 'react';

const Choice = ({ choice, handleChoice }) => {
  return (
    <li>
      <button onClick={() => handleChoice(choice.nextStoryId)}>
        {choice.text}
      </button>
    </li>
  );
};

export default Choice;