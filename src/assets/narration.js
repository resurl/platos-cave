const story = {
    scenes: [
      {
        dialogue:["Plato's Cave", "by Leanna Resurreccion, for UBC CLST 211 2020WT1", "Heavy disclaimer, I'm not a writer by any means lol"],
        options:[
          {
            text: 'Begin!',
            goto: 2
          }
        ]
      },
      {
        dialogue: [
          'You remain in the cave for the rest of your life, oblivious to the truth of your world.'
        ],
        options: [
          {
            text: 'Restart',
            goto: 2
          },
          {
            text: 'Exit',
            goto: 0
          }
        ]
      },
      {
        dialogue: [
          'Your eyes open to a singular vision today.',
          'You think you remember a voice calling it a "squirrel" before, a creature you would have been sure was a rat, if not for the bushy backside it had.',
          'The tiny blob of black moves erratically from one edge of your field of vision to another. As it inches near the furthest right your vision would allow, a feeling of panic sets in. Without the squirrel, there\'ll be nothing to keep you busy until your eyes are too heavy to keep open.',
          'Thankfully, it stays. Instead, a voice—soft, almost incomprehensible—starts enlightening you on the nature of the squirrel. All you can do is listen.'
        ],
        options: [
          {
            text: 'Try to talk to the voice',
            'goto': 3
          },
          {
            text: 'Try to sleep',
            'goto': 4
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
            text: 'Listen',
            'goto': 5
          }
        ]
      },
      {
        dialogue: [
          'You sleep.'
        ],
        options: [
          {
            text: 'Next',
            'goto': 1
          }
        ]
      },
      {
        dialogue: [
          'Before, deep in the recesses of your memory, all you understood was that you could not understand. All you saw were unintelligible forms.',
          'In fact, the more you listened to the voices and reasoned about the nature of the forms, the more likely you were to receive food. It was the voices that gave your visions meaning, so you have no reason to not believe in them fully.',
          'In an instant, a force moves you and you\'re now aware of movement, even if not by that name. You can move your head, and you do, looking around to see strange and outlandish forms who stare ahead much like you did just a second ago. You can move your body and you do, exploring the space that made up your entire world.'
        ],
        options: [
          {
            text: 'You are overwhelmed. You return to where you once sat and take up your old routine, unwilling to see what other incomprehensible realities await.',
            'goto': 1
          },
          {
            text: 'You don\'t understand what\'s happening and what you\'re seeing, but you choose to explore anyway. You wonder what else lies in store for you to experience.',
            'goto': 6
          }
        ]
      },
      {
        dialogue: ['You notice that the wall directly behind you is short enough to climb—you\'re not just stuck in the room, thank Zeus!'],
        options: [
          {
            text: 'Climb it',
            goto: 7
          },
          {
            text: 'Sit back down and stare at the wall for the rest of eternity.',
            goto: 1
          }
        ]
      },
      {
        dialogue: [
          'It takes more effort than you thought it would. Turns out years of immobility takes a toll on the body.',
          'You feel as if your body is on fire.'
        ],
        options: [
          {
            text: 'Grit your teeth and push through.',
            goto: 8
          },
          {
            text: 'Give up.',
            goto: 1,
          }
        ]
      },
      {
        dialogue: [
          'You would\'ve liked to quit at one point, but it felt like your curiosity burns more than your arms ever could.',
          'You stand at the top of the wall and it\'s not easy to understand what you\'re seeing. Beyond the wall, at your feet, the ground dips into another hole as tall as the space you came from and in that hole is a single figure holding something that eerily looks like a "squirrel".',
          'It seems like the voice from today came from that figure. You try to talk to it again, hoping that the voice could give everything you\'re seeing meaning, like how it gave meaning to the squirrel.'
        ],
        options: [
          {
            text: 'The figure finally responds.',
            goto: 9
          },
          {
            text: 'The figure does not respond.',
            goto: 11
          }
        ]
      },
      {
        dialogue: [
          'The figure finally responds.', 
          'It tells you unbelievable things: that everything you know never really was the truth, that you have been living a lie, never seeing reality. That your squirrel and the monkey before that, and the flower before that were only cheap imitations of what is.',
          'They bring what you thought was the squirrel to you, but on closer inspection, it looks nothing like what you saw before. The fake squirrel takes on a form completely incomphrensible. It isn\'t even black and almost incorporeal like the real one you had seen before',
          'It tells you to leave this "cave" and to embrace the beauty outside.'
        ],
        options: [
          {
            text: 'There\'s absolutely no way you\'re buying that.',
            goto: 10
          }
        ]
      },
      {
        dialogue: [
          'Sorry, but as if. You just came the closest to death you\'ve ever had before. For the first time, climbing that wall, you felt a pain that the "cave" had never given you before. You could only imagine the dangers this "outside" could bring you. And for what? You doubt that there actually is something greater than all of this. Actually, you can\'t even begin to comprehend the absurdity of what they claim.',
          'The figure has been your source of truth until now, but this you\'re sure you can\'t just accept.'
        ],
        options: [
          {
            text: 'Go back to the last section.',
            goto: 8
          },
          {
            text: 'Return to your cave wall.',
            goto: 1
          }
        ]
      },
      {
        dialogue: [
          'Just like last time, the figure doesn\'t respond. You fail to hide your annoyance, but move on from the trench and head further past your familiar sitting place. Behind you, the figure holds the "squirrel", continuing its stiff dance.',
          'Unbeknownst to you, the squirrel is a simple statue.',
          'You look around you and you see everything awash in the light of a fire, and understand that the squirrel you saw was only a fake, a mere imitation of the real thing the figure held. You begin to have the feeling that everything you\'ve seen until now was that too—mere imitation.',
          'As you trudge on, you notice that sight becomes almost painful, for some reason. You think you\'re able to see the floor in more detail than before, but already your eyes are watering up.'
        ],
        options: [
          {
            text: 'You keep your eyes focused on the darker parts for now.',
            goto: 12
          }
        ]
      },
      {
        dialogue: [
          'As time goes on and as you continue your trek, you\'re able to spend more time looking at the details you\'ve never been able to before. It\'s slow going and sometimes you need a break to get yourself acclimated, but little by little you\'re realizing that the shapes you saw back where you came from did not form all of reality.'
        ],
        options: [
          {
            text: 'You think you\'re reaching the end of your journey soon.',
            goto: 13
          }
        ]
      },
      {
        dialogue: [
          'And you\'re right. Up ahead, you hear soft roars, twinkling noises, and sight itself has become almost impossible. You\'ll take a short break to adjust your eyes and journey into the new world.'
        ],
        options: [
          {
            text: 'While you do so, you think about your life up until now.',
            goto: 14
          },
          {
            text: 'You wait a little and continue on, eager to see what awaits',
            goto: 15
          }
        ]
      },
      {
        dialogue: [
          'Your mind wanders back to the others that lived in that place with you. You tell yourself you\'ll come back one day, give them freedom from their shackles, and let them see that there\'s more out there, like you are now.',
          'You feel you can\'t just leave them as they are in this place.'
        ],
        options: [
          {
            text: 'Next',
            goto: 15
          }
        ]
      },
      {
        dialogue: [
          'The light still hurts, but you\'re stunned by what you\'re able to see',
          'Compared to the monotonous dark of the place you came from, the world outside is almost a sensory overload.',
          'You have no words to put to the sights you see, but you witness the world and believe it to be as the truth, again.',
          'Across the ground, something scampers past you, and you recognize it as the squirrel, but alive and in motion, now. You recognize that this must be even more real than the squirrel the figure from before was holding.'
        ],
        options: [
          {
            text: 'Appreciate your new surroundings',
            goto: 16
          }
        ]
      },
      {
        dialogue: [
          'For a long time, you merely travel, seeing the world in awe as it truly is. You learn and observe how the world functions.',
          'At one point, you had become so accustomed to this world that you were able to lift your eyes to the heavens and see the Sun as it truly was: the source of all things good.',
          'Now, you\'re compelled to remember the other prisoners in the cave, trapped in their ignorance of the true form of the world. You believe it wrong to leave them be and begin your journey back to your beginnings, meaning to bring your ex-fellow prisoners to the light.'
        ],
        options: [
          {
            text: 'You stand at the mouth of the cave',
            goto: 17
          }
        ]
      },
      {
        dialogue: [
          'The trek back to the cave wall that had been your reality for so long was shorter than you remember.',
          'You greet the other prisoners and begin your attempt at convincing them to leave, but they interrupt, asking you to join them in perceiving the shadows again like you did before.',
          'You play the old same game of describing and reasoning about the shadows, but you realize that your eyes, used to witnessing the Sun, can\'t view them as easily.' 
        ],
        options: [
          {
            text: 'The prisoners laugh at your inability.',
            goto: 18
          }
        ]
      },
      {
        dialogue: [
          'They tell you that escaping has ruined your eyes, has ruined your ability to see the world as it is.',
          'It seems impossible to convince them that, no, you have never seen the world more clearly.',
          'You try a different approach: you break the shackles of one of the prisoners with a nearby stone.'
        ],
        options: [
          {
            text: 'It unfortunately has the opposite desired effect.',
            goto: 19
          }
        ]
      },
      {
        dialogue: [
          'The prisoner, believing you wish to force them into blindness, flies into a fury, grabbing a stone for himself and runs toward you.'
        ],
        options: [
          {
            text: 'Try to think up another way to convince them to come with you',
            goto: 20
          },
          {
            text: 'Run and never come back',
            goto: 22
          }
        ]
      },
      {
        dialogue: [
          'You do your best to dodge the prisoners\' blows, which isn\'t hard to do in their current state, and attempt to think up other ways to convince them. You try appeals, threats, anything,',
          'but nothing can convince them.'
        ],
        options: [
          {
            text: 'Keep trying',
            goto: 21
          },
          {
            text: 'Run and never come back',
            goto: 22
          }
        ]
      },
      {
        dialogue: [
          'Distracted, you fail to notice that the number of freed prisoners have grown in size, now seeing you as a threat.',
          'You try to reason with them, hoping to at least get away with your life, but it\'s a futile effort.',
          'The prisoners manage to surround you and pin you down, and another brandishes a hefty rock over your head.'
        ],
        options: [
          {
            text: 'You blink and find yourself in the underworld.',
            goto: 23
          }
        ]
      },
      {
        dialogue: [
          'You run, run, run out of the cave. You tried, at least you can say that. Going back, however, is out of the question.',
          'After facing danger like that, you have no wish to continue trying and failing to escort the ignorant from their caves. Instead, you spend your time appreciating the divine, surrounded by those who share the same understanding as you do.'
        ],
        options: [
          {
            text: 'And you live your life fulfilled.',
            goto: 24
          }
        ]
      },
      {
        dialogue: [
          'You find yourself in the process of reincarnation, guided by the daughters of Necessity, and choose to be reincarnated as an animal, free from the toil of mankind.'
        ],
        options: [
          {
            text: 'And so the cycle continues.',
            goto: 24
          }
        ]
      },
      {
        dialogue: [
          'End! Thanks for clicking through all that!',
          'The story is from the Plato\'s Allegory of the Cave in Republic Book VII, and I used a translation from C.D.C Reeves\' "A Plato Reader" from Hackett Publishing Co. to write this.',
          'One of the screens at the end also very briefly mention the myth of Er, which is from the end of Republic Book X, using same book as previously mentioned.'
        ],
        options: [
          {
            text: 'Restart',
            goto: 0
          }
        ]
      }
    ]
  }

export default story;