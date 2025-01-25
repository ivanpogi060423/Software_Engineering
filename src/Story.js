import React from 'react';

const Story = ({ story, handleChoice, selectedChoices }) => {
  return (
    <div className="chapter-container">
      <p>{story.text}</p>
      <ul>
        {story.choices.map((choice) => (
          <li key={choice.id}>
            <button
              className={`choice-button ${selectedChoices[story.id] === choice.id ? 'selected' : ''}`}
              onClick={() => handleChoice(choice.nextStoryId, choice.id)}
            >
              {choice.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Story;