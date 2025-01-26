import React, { useState } from 'react';
import StoryGroup from './StoryGroup';

const stories = [
  {
    id: 1,
    title: 'The Mysterious Map',
    text: `
      <p>One sunny afternoon, you and your brother Ben were playing in the attic. There were old boxes and toys everywhere!</p>
      <p>You were having fun looking through all the stuff when you found something special. Tucked under a big pile of old blankets, there was a rolled-up piece of paper.</p>
      <p>You carefully unrolled it and gasped. It was a map! It was old and a little bit torn, and there was a big red ‘X’ on it, right in the middle.</p>
      <p>“Wow! A treasure map!” Ben said, his eyes sparkling with excitement.</p>
      <p>You looked closely at the map. There were funny shapes and symbols on it, like trees, mountains, and strange animals you’d never seen before.</p>
      <p>“I wonder where this leads,” you said, feeling curious. “I think it’s a secret treasure!” Ben shouted.</p>
      <p>“Let’s find it!” But before you could start your adventure, you realized something. You didn’t know what the symbols on the map meant. You needed help.</p>
      <p>“Let’s go to the library,” you said. “Maybe we can find a book about maps and symbols!”</p>
      <p>Ben smiled and grabbed his jacket. “Good idea! Let’s go find the treasure!” So, off to the library you went, ready to discover the secret of the mysterious map!</p>
    `,
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
    title: "The Library Adventure",
    text: `
    <p> You and Ben race into the library, your footsteps echoing on the shiny floor. The librarian, Mr. Reed, a kind old man with a long, white beard, looks up from his desk and adjusts his glasses. </p>
    <p> "Well, what do we have here?" he says with a smile. </p>
    <p> Ben excitedly shows him the map.</p>
    <p> "We found a treasure map! Can you help us?" he asks. </p>
    <p> Mr. Reed’s eyes twinkle. </p>
    <p> "A treasure map, you say?" Let me see. </p>
    <p> He studies the map, muttering, "Hmm... this is no ordinary map." </p>
    <p> Then he winks at both of you. </p>
    <p> "Follow me!" </p>
    <p> He leads you through the maze of bookshelves to a special section filled with dusty, ancient books. Mr. Reed carefully pulls out a giant book with a golden cover titled *Secrets of Magical Maps*. The cover sparkles like it’s sprinkled with fairy dust. </p>
    <p> You and Ben sit on the floor as Mr. Reed flips the pages. </p> 
    <p> "Ah, here we are!" he says, pointing to a page full of symbols. </p>
    <p> "This one," he says, tapping a symbol shaped like a tree, "means a magical forest where whispers guide adventurers. And this one," he says, pointing to a wavy symbol, "leads to a river where shiny fish leap out to greet you."</p>
    <p> "Whoa! A magical forest? Talking rivers?" Ben whispers, his eyes wide. </p>
    <p> You both study the map with Mr. Reed, giggling at his funny stories about treasure hunters who turned into frogs for being too greedy. </p>
    <p> "Remember" , he says, "every great adventurer is prepared. Now, what’s your plan?" </p>
    <p> You and Ben exchange a look. It’s time to decide!</p>
    `,
    choices: [
      {
        id: 1,
        text: "Go back home to pack your supplies, including a compass and snacks.",
        nextStoryId: 4
      },
      {
        id: 2,
        text: "Rush to the magical forest without packing—there’s no time to waste!",
        nextStoryId: 3
      }
    ]
  },
  
  {
    id: 3,
    title: "The Forest Shortcut",
    text: `
    <p> You and Ben step into the forest, its towering trees forming a canopy above that blocks out most of the sunlight. The air feels cooler, and the leaves crunch under your feet as you walk deeper into the woods. At first, the excitement of adventure fuels you both. Every rustling sound feels like it might be a clue—or maybe a creature watching from the shadows! </p>
    <p> But as you venture farther, the map starts to feel more like a puzzle with missing pieces. </p>
    <p> "This doesn’t make sense," Ben mutters, turning the map upside down and sideways. </p>
    <p> "Which way is north? Or south?" </p>
    <p> Without a compass, the symbols on the map seem to point in random directions. You try to remember what Mr. Reed said about the symbols, but everything feels jumbled in your mind. The trees all look the same, and the forest feels like it’s closing in around you. </p>
    <p> After what feels like hours, your legs are tired, and your stomach growls loudly. </p>
    <p> "Do you hear that?" Ben suddenly whispers, grabbing your arm. You both freeze. Somewhere in the distance, there’s a soft rustling sound, followed by a low hoot.  </p>
    <p> "Maybe it’s an owl," you say, trying to sound confident. But Ben’s wide eyes tell you he’s imagining something much scarier. </p>
    <p> "We should’ve brought snacks... and maybe a flashlight," Ben admits, looking down at his empty hands. </p>
    <p> "What if we get stuck out here?" </p>
    <p> You start to realize he might be right. The forest is beautiful but also mysterious and a little bit spooky. Just as you’re about to turn around, a bright red bird swoops down and lands on a branch nearby. It chirps loudly and flutters its wings, almost like it’s trying to tell you something.</p>
    <p> "Do you think it knows the way?" </p>
    <p> Ben whispers, staring at the bird. For a moment, you both stand completely still, watching it. But the bird flies off into the trees, and you’re left with a choice: go back home and prepare properly, or keep pushing forward and see what lies ahead. </p>
    <p> What will you do?</p>
    `,
    choices: [
      {
        id: 1,
        text: "Return home to get supplies and start again.",
        nextStoryId: 4
      },
      {
        id: 2,
        text: "Keep walking and try to find your way.",
        nextStoryId: 5
      }
    ]
  },


  {
    id: 4,
    title: 'Prepared and Ready',
    text: `
      <p>Back home, you and Ben rush to pack your adventure bags. "Snacks? Check! Water? Check! Compass? Check!" Ben says, ticking off the list. "And the map!" you add, carefully folding it and tucking it into your backpack.</p>
      <p>With everything ready, you set off towards the forest. The air smells fresh, like after a rainy day, and the sound of chirping birds fills your ears. Tall trees stretch into the sky, their leaves rustling as if whispering secrets to each other.</p>
      <p>"Look at that funny-shaped tree!" Ben points to one with branches that curl like swirls of ice cream. You both giggle and keep walking.</p>
      <p>You hold the map tightly, tracing the path with your finger. "We need to follow the symbols carefully," you say. The map leads you to a narrow path lined with bright flowers. Some are blue, some pink, and others glow faintly in the shade.</p>
      <p>Ben holds up the compass. "This way!" he says confidently, but then you hear something—a soft gurgling sound.</p>
      <p>"What’s that?" you whisper. The two of you stop and listen. It's the sound of a stream, bubbling and singing as it flows nearby.</p>
      <p>"Should we follow the stream?" Ben asks, his eyes sparkling with curiosity. But just ahead, a hill rises with a big old tree at the top. "Or should we climb that hill to get a better view?" you wonder aloud.</p>
      <p>Your heart races with excitement. The adventure has only just begun!</p>
    `,
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
    title: "Lost in the Forest",
    text: `
      <p>You and Ben keep walking, hoping to find the treasure. The forest grows thicker, and the trees seem taller than ever! Shadows dance on the ground, making everything look a little spooky. But you’re brave, and Ben is right beside you.</p>
      <p>"Do you think we’re going the right way?" Ben asks, holding the map tightly. His hands are a little shaky, but he gives you a determined smile.</p>
      <p>"I think so," you say, even though you’re not sure. Suddenly, you hear a strange sound—a mix between a whistle and a chirp. "What was that?" you ask, your eyes wide.</p>
      <p>Just then, the red bird from before appears again! It lands on a nearby branch and chirps loudly, flapping its wings as if it wants you to follow. "Look! It’s the bird again," Ben whispers. "Maybe it knows the way!"</p>
      <p>The bird hops to another branch, farther ahead. You and Ben follow it, feeling a spark of hope. As you walk, you notice the forest doesn’t feel as scary anymore. There are pretty flowers on the ground, and sunlight peeks through the trees, making everything look magical.</p>
      <p>But then, the bird suddenly flies away, disappearing into the trees. "Oh no! Now what?" Ben says, looking around. You take a deep breath and think about what to do. The map is still confusing, but you’re starting to remember something important Mr. Reed said about finding your way—"Look for the sun or clues in nature."</p>
      <p>You glance around and spot something shiny on the ground. It’s a trail of golden acorns! Could this be a clue? You point them out to Ben, and he grins. "Let’s follow them!" he says, already starting to walk ahead.</p>
      <p>What do you do next?</p>
    `,
    choices: [
      {
        id: 1,
        text: "Follow the golden acorns and see where they lead.",
        nextStoryId: 6,
      },
      {
        id: 2,
        text: "Stop and try to figure out the map again.",
        nextStoryId: 7,
      },
    ],
  },
  


  {
    id: 6,
    title: 'The Magical Stream',
    text: `
      <p>You and Ben follow the stream, the gentle gurgling sound guiding your way like a friendly tune. The sunlight dances on the water, making it sparkle like a trail of diamonds.</p>
      <p>"Do you think the fish here talk?" Ben asks, crouching down to peer into the stream. You laugh, but then you see something—a shiny fish leaps out of the water, its scales glittering like a rainbow. For a moment, it looks at you before splashing back in. "Whoa! Did you see that?" Ben exclaims, his eyes wide.</p>
      <p>Soon, you hear a loud roar—not scary, but exciting. Up ahead, the stream flows into a tall, beautiful waterfall! Mist fills the air, and tiny rainbows dance near the water. "This is amazing!" you say, spinning in the cool spray.</p>
      <p>Ben finds a flat rock near the waterfall. "Let's take a break here," he says, pulling out some snacks. As you munch on your sandwiches, you felt tired and frustrated of the hardship on how you will be finding that treasure. Shall we continue ?</p>
      <p>You and Ben exchange curious glances. What should you do next?</p>
    `,
    choices: [
      {
        id: 1,
        text: 'Continue following the stream to see where it leads.',
        nextStoryId: 8,
      },
      {
        id: 2,
        text: 'Stop the journey and just go home.',
        nextStoryId: 10,
      },
    ],
  },
  

  {
    id: 7,
    title: 'The Hill',
    text: `
      <p>You and Ben begin climbing the hill, your feet crunching on the soft grass as you go higher and higher. The wind feels cool against your face, and it smells like adventure. You both giggle as you reach the top, where the view is amazing!</p>
      <p>From up here, you can see the entire forest stretching out below you. The trees look like tiny green dots, and the flowers are little bursts of color. But wait! There’s something else—over to the side, a new path appears! It’s hidden by tall, wavy grass, almost like the path is trying to keep a secret.</p>
      <p>"Look! A secret path!" Ben points excitedly, his eyes as wide as saucers. "Do you think we should follow it?" he asks, bouncing on his feet.</p>
      <p>You take a deep breath and look down the path. It looks mysterious and fun, like it’s leading to something exciting. Maybe there’s a magical creature waiting, or a hidden treasure just around the corner!</p>
      <p>"Let’s go see where it leads!" you say, but then you notice something else—the forest behind you is full of paths you haven’t explored yet. You could always go back and try another way.</p>
      <p>It’s time for a big decision!</p>
    `,
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