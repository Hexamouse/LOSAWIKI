const heroes = [
  {
      id: 1,
      name: "Iron Knight",
      type: "Normal",
      image_thumb_male: "/Heroes/Thumb/male/thum_char_001_n.jpg",
      image_male: "/Heroes/01_Iron_Knight_1.png",
      image_female: "/Heroes/Female/01_Iron_Knight_2.png",
      genre: "Melee",
      description: "With a four-hit attack using a sharp sword and strong armor, Iron Knight excels as a mercenary in close combat...",
      skills: [
          {
              name: "Tripe Slash",
              image: "/Skill/1/TripleSlash.png",
              description: "Three consecutive teeth."
          },
          {
              name: "Mark of Protection",
              image: "/Skill/1/MarkOfProtection.png",
              description: "When attacked, it will push the enemy away."
          },
          {
              name: "Butt",
              image: "/Skill/1/Butt.png",
              description: "Use his head to strike enemies in a stunned state."
          },
          {
              name: "Haste Aura",
              image: "/Skill/1/HasteAura.png",
              description: "Increase the speed of movement for yourself and your friends around."
          }
      ]
  },
  {
      id: 2,
      name: "Captain Hook",
      type: "Normal",
      image_thumb_male: "/Heroes/Thumb/male/thum_char_002_n.jpg",
      image_male: "/Heroes/02_Captain_Hook_1.png",
      image_female: "/Heroes/Female/02_Captain_Hook_2.png",
      genre: "Melee",
      description: "The Captain Hook set, made for advanced users, includes a skull hat that drops items from spirits and bombs that damage fallen foes. Its power comes from launching all bombs at once, frightening nearby knights. When the parrot on his shoulder sings, Captain Hook becomes wildly unstoppable!",
      skills: [
          {
              name: "Bomb Shower",
              image: "/Skill/2/BigBomb.png",
              description: "Throw grenades around him."
          },
          {
              name: "Big Bomb",
              image: "/Skill/2/BigBomb.png",
              description: "Calls out a huge bomb."
          },
          {
              name: "Cursed Skull",
              image: "/Skill/2/CursedSkull.png",
              description: "Shouted at the enemy to let the device drop to the ground."
          },
          {
              name: "Quick Step",
              image: "/Skill/2/QuickStep.png",
              description: "Increase the speed of movement."
          }
      ]
  },
  {
    id: 3,
    name: "Cowboy",
    type: "Normal",
    image_thumb_male: "/Heroes/Thumb/male/thum_char_003_n.jpg",
    image_male: "/Heroes/03_Cowboy_1.png",
    image_female: "/Heroes/Female/03_Cowboy_2.png",
    genre: "Range",
    description: "Cowboy is a Ranged Hero, able to shoot enemies while falling or lying down !!!",
    skills: [
        {
            name: "Bomb Shower",
            image: "/Skill/3/TripleShot.png",
            description: "3 Consecutive fires."
        },
        {
            name: "Quick Draw",
            image: "/Skill/3/QuickDraw.png",
            description: "Quickly draw a gun."
        },
        {
            name: "Back Dash",
            image: "/Skill/3/BackDash.png",
            description: "Moved quickly to the back."
        },
        {
            name: "Hogtie",
            image: "/Skill/3/Hogtie.png",
            description: "Throw a rope tie the weir opposite."
        }
    ]
},
{
  id: 4,
  name: "Fire Mage",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_004_n.jpg",
  image_male: "/Heroes/04_Fire_Mage_1.png",
  image_female: "/Heroes/Female/04_Fire_Mage_2.png",
  genre: "Magic",
  description: "Fire Mage is a type of Magic Hero, able to cast fire magic, the enemy is strong !!!",
  skills: [
      {
          name: "Meteor",
          image: "/Skill/4/Meteor.png",
          description: "Calling fireballs from the sky."
      },
      {
          name: "Flame Wave",
          image: "/Skill/4/FlameWave.png",
          description: "Shoot fireballs in six directions."
      },
      {
          name: "Teleport",
          image: "/Skill/4/Teleport.png",
          description: "Immediately moves to the selected target."
      },
      {
          name: "Flame Proof",
          image: "/Skill/4/FlameProof.png",
          description: "Protection against ignition state."
      }
  ]
},
{
  id: 5,
  name: "Cyber Medic",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_005_n.jpg",
  image_male: "/Heroes/05_Cyber_Medic_1.png",
  image_female: "/Heroes/Female/05_Cyber_Medic_2.png",
  genre: "Special",
  description: "Cyber ​​Medic is a type of Magic Hero, can help and add blood to your friends !!!",
  skills: [
      {
          name: "Healing",
          image: "/Skill/5/Healing.png",
          description: "Slowly restore the health of yourselft or your teammates."
      },
      {
          name: "Zero G",
          image: "/Skill/5/ZeroG.png",
          description: "Make goals arround Soaring into the air."
      },
      {
          name: "Drain",
          image: "/Skill/5/Drain.png",
          description: "Destroy 50% of opposing weir skill usage."
      },
      {
          name: "Jet Pack",
          image: "/Skill/5/JetPack.png",
          description: "Fly into the air."
      }
  ]
},
{
  id: 6,
  name: "Savage Berserker",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_006_n.jpg",
  image_male: "/Heroes/06_Savage_Berserker_1.png",
  image_female: "/Heroes/Female/06_Savage_Berserker_2.png",
  genre: "Melee",
  description: "Savage Berserker is a Melee type hero that can easily penetrate enemy armor and combo !!!",
  skills: [
      {
          name: "Earthshatter",
          image: "/Skill/6/EarthShatter.png",
          description: "Slash his sword down to the ground, creating a force forward."
      },
      {
          name: "Berserk",
          image: "/Skill/6/Berserk.png",
          description: "Enlarged body Increases attack power and attack range."
      },
      {
          name: "Savage Slam",
          image: "/Skill/6/SavageSlam.png",
          description: "Hit the target."
      },
      {
          name: "War Horn",
          image: "/Skill/6/WarHorn.png",
          description: "Pao's battle trumpet made the enemies around him dizzy."
      }
  ]
},
{
  id: 7,
  name: "Robin Hood",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_007_n.jpg",
  image_male: "/Heroes/07_Robin_Hood_1.png",
  image_female: "/Heroes/Female/07_Robin_Hood_2.png",
  genre: "Range",
  description: "Robin Hood is a Ranged type hero that can cause quite a lot of damage !!!",
  skills: [
      {
          name: "Multi Shot",
          image: "/Skill/7/MultiShot.png",
          description: "Shoot 5 arrows at the same time."
      },
      {
          name: "Tumble",
          image: "/Skill/7/Tumble.png",
          description: "Jump and somersault in the air for another stroke."
      },
      {
          name: "Flip Kick",
          image: "/Skill/7/FlipKick.png",
          description: "Kick the weir opposite to the foot."
      },
      {
          name: "Arrow Toss",
          image: "/Skill/7/ArrowToss.png",
          description: "Throw out 9 arrows at once."
      }
  ]
},
{
  id: 8,
  name: "Crazy Miner",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_008_n.jpg",
  image_male: "/Heroes/08_Crazy_Miner_1.png",
  image_female: "/Heroes/Female/02_Captain_Hook_2.png",
  genre: "Special",
  description: "Crazy Miner is a type of Special Hero, able to place bombs and harass the enemy .. !!",
  skills: [
      {
          name: "Bomb Shower",
          image: "/Skill/2/BigBomb.png",
          description: "Throw grenades around him."
      },
      {
          name: "Big Bomb",
          image: "/Skill/2/BigBomb.png",
          description: "Calls out a huge bomb."
      },
      {
          name: "Cursed Skull",
          image: "/Skill/2/CursedSkull.png",
          description: "Shouted at the enemy to let the device drop to the ground."
      },
      {
          name: "Quick Step",
          image: "/Skill/2/QuickStep.png",
          description: "Increase the speed of movement."
      }
  ]
},
{
  id: 9,
  name: "Fire Mage",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_003_n.jpg",
  image_male: "/Heroes/02_Captain_Hook_1.png",
  image_female: "/Heroes/Female/02_Captain_Hook_2.png",
  genre: "Magic",
  description: "The Captain Hook set, made for advanced users, includes a skull hat that drops items from spirits and bombs that damage fallen foes. Its power comes from launching all bombs at once, frightening nearby knights. When the parrot on his shoulder sings, Captain Hook becomes wildly unstoppable!",
  skills: [
      {
          name: "Bomb Shower",
          image: "/Skill/2/BigBomb.png",
          description: "Throw grenades around him."
      },
      {
          name: "Big Bomb",
          image: "/Skill/2/BigBomb.png",
          description: "Calls out a huge bomb."
      },
      {
          name: "Cursed Skull",
          image: "/Skill/2/CursedSkull.png",
          description: "Shouted at the enemy to let the device drop to the ground."
      },
      {
          name: "Quick Step",
          image: "/Skill/2/QuickStep.png",
          description: "Increase the speed of movement."
      }
  ]
},
{
  id: 10,
  name: "Fire Mage",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_003_n.jpg",
  image_male: "/Heroes/02_Captain_Hook_1.png",
  image_female: "/Heroes/Female/02_Captain_Hook_2.png",
  genre: "Magic",
  description: "The Captain Hook set, made for advanced users, includes a skull hat that drops items from spirits and bombs that damage fallen foes. Its power comes from launching all bombs at once, frightening nearby knights. When the parrot on his shoulder sings, Captain Hook becomes wildly unstoppable!",
  skills: [
      {
          name: "Bomb Shower",
          image: "/Skill/2/BigBomb.png",
          description: "Throw grenades around him."
      },
      {
          name: "Big Bomb",
          image: "/Skill/2/BigBomb.png",
          description: "Calls out a huge bomb."
      },
      {
          name: "Cursed Skull",
          image: "/Skill/2/CursedSkull.png",
          description: "Shouted at the enemy to let the device drop to the ground."
      },
      {
          name: "Quick Step",
          image: "/Skill/2/QuickStep.png",
          description: "Increase the speed of movement."
      }
  ]
},
{
  id: 11,
  name: "Fire Mage",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_003_n.jpg",
  image_male: "/Heroes/02_Captain_Hook_1.png",
  image_female: "/Heroes/Female/02_Captain_Hook_2.png",
  genre: "Magic",
  description: "The Captain Hook set, made for advanced users, includes a skull hat that drops items from spirits and bombs that damage fallen foes. Its power comes from launching all bombs at once, frightening nearby knights. When the parrot on his shoulder sings, Captain Hook becomes wildly unstoppable!",
  skills: [
      {
          name: "Bomb Shower",
          image: "/Skill/2/BigBomb.png",
          description: "Throw grenades around him."
      },
      {
          name: "Big Bomb",
          image: "/Skill/2/BigBomb.png",
          description: "Calls out a huge bomb."
      },
      {
          name: "Cursed Skull",
          image: "/Skill/2/CursedSkull.png",
          description: "Shouted at the enemy to let the device drop to the ground."
      },
      {
          name: "Quick Step",
          image: "/Skill/2/QuickStep.png",
          description: "Increase the speed of movement."
      }
  ]
},
{
  id: 12,
  name: "Fire Mage",
  type: "Normal",
  image_thumb_male: "/Heroes/Thumb/male/thum_char_003_n.jpg",
  image_male: "/Heroes/02_Captain_Hook_1.png",
  image_female: "/Heroes/Female/02_Captain_Hook_2.png",
  genre: "Magic",
  description: "The Captain Hook set, made for advanced users, includes a skull hat that drops items from spirits and bombs that damage fallen foes. Its power comes from launching all bombs at once, frightening nearby knights. When the parrot on his shoulder sings, Captain Hook becomes wildly unstoppable!",
  skills: [
      {
          name: "Bomb Shower",
          image: "/Skill/2/BigBomb.png",
          description: "Throw grenades around him."
      },
      {
          name: "Big Bomb",
          image: "/Skill/2/BigBomb.png",
          description: "Calls out a huge bomb."
      },
      {
          name: "Cursed Skull",
          image: "/Skill/2/CursedSkull.png",
          description: "Shouted at the enemy to let the device drop to the ground."
      },
      {
          name: "Quick Step",
          image: "/Skill/2/QuickStep.png",
          description: "Increase the speed of movement."
      }
  ]
},
];

export default heroes;
