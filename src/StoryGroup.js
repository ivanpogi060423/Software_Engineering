import React from 'react';
import Story from './Story';

const StoryGroup = ({ stories, handleChoice, selectedChoices }) => {
  return (
    <div className="story-group">
      {stories.map((story) => (
        <Story
          key={story.id}
          story={story}
          handleChoice={handleChoice}
          selectedChoices={selectedChoices}
        />
      ))}
    </div>
  );
};

export default StoryGroup;