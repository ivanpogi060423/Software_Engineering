import React, { useState } from 'react';
import StoryGroup from './StoryGroup';

const stories = [
  {
    id: 1,
    title: 'The Mysterious Map',
    text: 'One sunny afternoon, you and your brother Ben were playing in the attic. There were old boxes and toys everywhere! You were having fun looking through all the stuff when you found something special. Tucked under a big pile of old blankets, there was a rolled-up piece of paper. You carefully unrolled it and gasped. It was a map! It was old and a little bit torn, and there was a big red ‘X’ on it, right in the middle. “Wow! A treasure map!” Ben said, his eyes sparkling with excitement. You looked closely at the map. There were funny shapes and symbols on it, like trees, mountains, and strange animals you’d never seen before. “I wonder where this leads,” you said, feeling curious. “I think it’s a secret treasure!” Ben shouted. “Let’s find it!” But before you could start your adventure, you realized something. You didn’t know what the symbols on the map meant. You needed help. “Let’s go to the library,” you said. “Maybe we can find a book about maps and symbols!” Ben smiled and grabbed his jacket. “Good idea! Let’s go find the treasure!” So, off to the library you went, ready to discover the secret of the mysterious map!',
    choices: [
      {
        id: 1,
        text: 'Go to the library with Ben to learn about the symbols.',
        nextStoryId: 2,
      },
      {
        id: 2,
        text: 'Head straight to the forest marked on the map.',
        nextStoryId: 3,
      },
    ],
  },
  {
    id: 2,
    title: 'The Library Adventure',
    text: 'You and Ben visit the library and ask the librarian, Mr. Reed, for help. You show him the map, and he smiles. “Ah, a treasure map!” he says. “I think I can help.” He takes you to a shelf and pulls out an old book titled The Secret World of Ancient Maps. You both sit down and flip through it, finding pictures of maps with symbols just like the ones on your map. “This symbol means a forest, and this one is a river,” Ben says excitedly, pointing at the book. With Mr. Reed’s help, you learn more about the symbols, feeling ready for the next part of your adventure.',
    choices: [
      {
        id: 1,
        text: 'Go back home to pack your supplies, including a compass.',
        nextStoryId: 4,
      },
      {
        id: 2,
        text: 'Rush to the forest without packing.',
        nextStoryId: 3,
      },
    ],
  },
  {
    id: 3,
    title: 'The Forest Shortcut',
    text: 'You and Ben enter the forest, but you\'re not prepared. You walk for hours, but the map doesn\'t make sense without a compass.',
    choices: [
      {
        id: 1,
        text: 'Return home to get supplies and start again.',
        nextStoryId: 4,
      },
      {
        id: 2,
        text: 'Keep walking and try to find your way.',
        nextStoryId: 5,
      },
    ],
  },
  {
    id: 4,
    title: 'Prepared and Ready',
    text: 'You and Ben pack your bags with snacks, water, a compass, and the map, making sure you have everything for the journey. You are both excited as you head into the forest, the air cool and fresh. The trees tower above you, and the path feels mysterious, but you feel ready for whatever comes next. You keep an eye on the map as you follow the symbols, making sure you are on the right track. Ben glances at the compass from time to time, while you both talk about what you might find hidden deep in the forest.',
    choices: [
      {
        id: 1,
        text: 'Follow the stream to see where it leads.',
        nextStoryId: 6,
      },
      {
        id: 2,
        text: 'Climb the hill to get a better view.',
        nextStoryId: 7,
      },
    ],
  },
  {
    id: 5,
    title: 'Lost in the Forest',
    text: 'You and Ben get lost in the forest. You start to feel scared and worried.',
    choices: [
      {
        id: 1,
        text: 'Keep walking and try to find your way.',
        nextStoryId: 4,
      },
      {
        id: 2,
        text: 'Go back home and forget about the map.',
        nextStoryId: 10,
      },
    ],
  },
  {
    id: 6,
    title: 'The Stream',
    text: 'You follow the stream and find a beautiful waterfall. You and Ben decide to take a break and enjoy the scenery.',
    choices: [
      {
        id: 1,
        text: 'Continue following the stream to see where it leads.',
        nextStoryId: 8,
      },
      {
        id: 2,
        text: 'Go back to the forest and explore other paths.',
        nextStoryId: 9,
      },
    ],
  },
  {
    id: 7,
    title: 'The Hill',
    text: 'You climb the hill and get a great view of the surrounding area. You see a path that you hadn\'t noticed before.',
    choices: [
      {
        id: 1,
        text: 'Follow the new path to see where it leads.',
        nextStoryId: 8,
      },
      {
        id: 2,
        text: 'Go back to the forest and explore other paths.',
        nextStoryId: 9,
      },
    ],
  },
  {
    id: 8,
    title: 'The New Path',
    text: 'You follow the new path and find a hidden clearing. You see a chest in the center of the clearing.',
    choices: [
      {
        id: 1,
        text: 'Open the chest to see what\'s inside.',
        nextStoryId: 11,
      },
      {
        id: 2,
        text: 'Leave the chest and explore the clearing.',
        nextStoryId: 12,
      },
    ],
  },
  {
    id: 9,
    title: 'The Forest',
    text: 'You go back to the forest and explore other paths. You find a new stream and decide to follow it.',
    choices: [
      {
        id: 1,
        text: 'Follow the stream to see where it leads.',
        nextStoryId: 8,
      },
      {
        id: 2,
        text: 'Go back to the hill and get a better view.',
        nextStoryId: 7,
      },
    ],
  },
  {
    id: 10,
    title: 'Giving Up',
    text: 'You and Ben go back home, feeling disappointed and frustrated.',
    choices: [],
  },
  {
    id: 11,
    title: 'The Treasure',
    text: 'You open the chest and find a treasure trove of gold and jewels. You and Ben are overjoyed.',
    choices: [
      {
        id: 1,
        text: 'Take the treasure and go back home.',
        nextStoryId: 13,
      },
      {
        id: 2,
        text: 'Leave the treasure and explore the clearing.',
        nextStoryId: 14,
      },
    ],
  },
  {
    id: 12,
    title: 'The Clearing',
    text: 'You leave the chest and explore the clearing. You find a beautiful garden filled with flowers and trees.',
    choices: [
      {
        id: 1,
        text: 'Take a break and enjoy the garden.',
        nextStoryId: 11,
      },
      {
        id: 2,
        text: 'Go back to the forest and explore other paths.',
        nextStoryId: 9,
      },
    ],
  },
  {
    id: 13,
    title: 'The Happy Ending',
    text: 'You and Ben take the treasure and go back home. You are hailed as heroes and live happily ever after.',
    choices: [],
  },
  {
    id: 14,
    title: 'The Sad Ending',
    text: 'You leave the treasure and explore the clearing. You get lost and never find your way back home.',
    choices: [],
  },
];

const StoryContainer = () => {
  const [currentStoryId, setCurrentStoryId] = useState(1);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [finished, setFinished] = useState(false);

  const currentStory = stories.find((story) => story.id === currentStoryId);

  const handleChoice = (nextStoryId, choiceId) => {
    const nextStory = stories.find((story) => story.id === nextStoryId);
    setCurrentStoryId(nextStoryId);
    setSelectedChoices((prevChoices) => ({ ...prevChoices, [currentStoryId]: choiceId }));
    if (!nextStory.choices || nextStory.choices.length === 0) {
      setFinished(true);
    }
  };

  return (
    <div className="container">
      <h1>{currentStory.title}</h1>
      <StoryGroup
        stories={[currentStory]} // Pass the current story as an array
        handleChoice={handleChoice}
        selectedChoices={selectedChoices}
      />
      {finished && (
        <div className="finished-message">
          <h2>Congratulations, you've finished the story!</h2>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default StoryContainer;