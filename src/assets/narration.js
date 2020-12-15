const story = {
    scenes: [
      {
        dialogue: [
          'Your eyes open to a singular vision today.',
          'You think you remember a voice calling it a "squirrel" before, a creature you would have been sure was a rat, if not for the bushy backside it had.',
          'The tiny blob of black moves erratically from one edge of your field of vision to another. As it inches near the furthest right your vision would allow, a feeling of panic sets in. Without the squirrel, there\'ll be nothing to keep you busy until you\'re too tired to stay awake.',
          'Thankfully, it doesn\'t leave. Instead, a voice--soft, almost incomprehsible--starts enlightening you on the nature of the squirrel. All you can do is listen.'
        ],
        options: [
          {
            text: 'Try to talk to the voice',
            'goto': 1
          },
          {
            text: 'Try to sleep',
            'goto': 2
          }
        ]
      },
      {
        dialogue: [
          'The voice carries on like you had never spoken at all.',
          'Maybe your voice doesn\'t even work like theirs?'
        ],
        options: [
          {
            text: 'Just listen',
            'goto': 3
          }
        ]
      },
      {
        dialogue: [
          'You sleep.'
        ],
        options: [
          {
            text: 'The next day',
            'goto': 0
          }
        ]
      },
      {
        dialogue: [
          'Before, deep in the recesses of your memory, all you understood was that you could not understand. All you saw were unintelligible forms. It was the voices that gave your visions meaning, so you have no reason to not believe in them fully.',
          'In an instant, a force moves you and you\'re now aware of movement, even if not by that name. You can move your head, and you do, looking around to see strange and outlandish forms who stare ahead much like you did just a second ago. You can move your body and you do, exploring the space that made up your entire world.'
        ],
        options: [
          {
            text: 'You are overwhelmed. You return to where you once sat and take up your old routine, unwilling to see what other incomprehensible realities await.',
            'goto': 0
          },
          {
            text: 'You don\'t understand what\'s happening and what you\'re seeing, but you choose to explore anyway. You wonder what else lies in store for you to experience.',
            'goto': 4
          }
        ]
      },
      {
        dialogue: [],
        options: []
      },
      {
        dialogue: [],
        options: []
      },
      {
        dialogue: [],
        options: []
      }
    ]
  }

export default story;