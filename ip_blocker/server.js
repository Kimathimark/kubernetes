const express = require('express');
const app = express();
const port = 3000;

// A random crazy generator for some fun!
const crazyLogic = () => {
  const responses = [
    'Calculating pi to 1000 digits... I already did it in my sleep!',
    'Solving quantum entanglement... Wait, I think I just invented a new theory of everything!',
    'Analyzing black holes... Actually, it\'s a black donut, totally overlooked by scientists.',
    'Guess what? I just found the cure for boredom. It\'s called "spontaneous dancing!"',
    'Crunching data faster than a cheetah on roller skates!',
    'I\'m currently rewriting the laws of physics. Don\'t worry, I got this.',
    'Building the first intergalactic spaceship... To go to Mars... Or maybe just to get some pizza?',
    'Solving your problem... with a mix of high-level AI and pure magical thinking.'
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};

// Endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the super-genius server! Check out the crazy logic at /crazy');
});

app.get('/crazy', (req, res) => {
  res.send(crazyLogic());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
