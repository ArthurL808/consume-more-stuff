
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "name": "Xbox original System",
        "description": "The Xbox was Microsoft's first foray into the world of console gaming, released in 2001. Comes complete with system, 1 controller (color & style may vary), AC adapter, and AV cables.",
        "price": 79.99,
        "manufacturer": "Microsoft",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/xbox.jpeg",
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 3
      }, {
        "name": "NES System",
        "description": "Released in 1985, The Nintendo Entertainment System is the best selling video game console of it's time. Enjoy historical gaming classics such as Zelda, Mario, Donkey Kong...the list goes on and on! Comes complete with 1 controller, ac adapter and av cables",
        "price": 79.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/NES.jpg",
        "user_id": 1,
        "category_id": 1,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "SEGA Genesis",
        "description": "The 16-bit Sega Genesis was Sega's second console and a top contender in the fourth generation of consoles. Comes complete with system, 1 controller, AC adapter, and av cable.",
        "price": 39.99,
        "manufacturer": "SEGA",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/SegaGenesis.jpg",
        "user_id": 1,
        "category_id": 1,
        "itemStatus_id": 3,
        "condition_id": 3
      }, {
        "name": "PlayStation",
        "description": "The Sony PlayStation (common abbreviations are PS, PS1, PSone, and PSX) is a video game console that was released by Sony Computer Entertainment, in Japan on December 3, 1994, and in North America on September 9, 1995.",
        "price": 79.99,
        "manufacturer": "Sony",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/PlayStation.jpeg",
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "SNES Super Nintendo System",
        "description": "The original, 1991 model of the Super Nintendo. Keep that 16-bit rivalry alive! Comes complete with system, 1 controller,AC adapter, and AV cable.",
        "price": 79.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/SNES.jpeg",
        "user_id": 4,
        "category_id": 1,
        "itemStatus_id": 3,
        "condition_id": 3
      }, {
        "name": "Duck Hunt",
        "description": "Duck Hunt is a shooter game in which the objective is to shoot moving targets on the television screen in mid-flight. The game is played from a first-person perspective and requires the NES Zapper light gun, which the player aims and fires at the screen.",
        "price": 5.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/DuckHunt.jpg",
        "user_id": 1,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 3
      }, {
        "name": "Star Wars - Knights of the Old Republic II",
        "description": "Knights of the Old Republic II is a role-playing video game played from a third-person view that features pausable real-time combat.",
        "price": 24.99,
        "manufacturer": "Obsidian Entertainment",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/Kotor2.jpg",
        "user_id": 2,
        "category_id": 2,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "Sonic the Hedgehog 2",
        "description": "Sonic the Hedgehog 2 is a platform game developed and published by Sega for the Sega Genesis console, released worldwide in November 1992.",
        "price": 12.99,
        "manufacturer": "Sega",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/Sonic2.jpg",
        "user_id": 2,
        "category_id": 2,
        "itemStatus_id": 3,
        "condition_id": 3
      }, {
        "name": "Final Fantasy VIII ",
        "description": "The story of Final Fantasy VIII follows Squall Leonhart, a cadet in a military academy called Balamb Garden. Squall strives to become a SeeD, a mercenary who can wield magic with the aid of magical beings known as Guardian Forces.",
        "price": 24.99,
        "manufacturer": "Squaresoft",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/FFVIII.jpg",
        "user_id": 3,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 3
      }, {
        "name": "Super Mario World",
        "description": "Super Mario World is a side-scrolling platform game in which the player controls Mario, the protagonist of the game. The game has similar gameplay to earlier games in the Super Mario series—Super Mario Bros., Super Mario Bros. 2, and Super Mario Bros. 3—but introduces new elements.",
        "price": 34.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/SuperMarioWorld.png",
        "user_id": 1,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Xbox Memory Card",
        "description": "Microsoft brand memory card for the original Xbox console.",
        "price": 9.99,
        "manufacturer": "Microsoft",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/XbMemory.jpg",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Power Plug Turbo adapter",
        "description": "Turn any Genesis controller into the ultimate weapon with Tyco's power plug by adding turbo features and the ability to remap your controller to any combination you want!",
        "price": 9.99,
        "manufacturer": "Tyco",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/PowerPlug.jpg",
        "user_id": 1,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 3
      }, {
        "name": "Advantage Joystick",
        "description": "The NES Advantage is an arcade style controller released by Nintendo for the Nintendo Entertainment System in 1987. The NES Advantage features adjustable turbo controls for the A and B buttons which could be toggled on or off with a button; users can adjust the rate of the turbo by the respective turbo dials located above each button.",
        "price": 29.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/nes_advantage.jpg",
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "SNES Mouse",
        "description": "Point yourself in the right direction with the Hyperkin Hyper Click Retro Style Mouse for SNES. Perfect for Mario Paint and other compatible titles, the Hyper Click is an essential peripheral for retro gamers. Its comfortable shape provides a slight modern amenity to a classic-style peripheral.",
        "price": 19.99,
        "manufacturer": "Hyperkin",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/SnesMouse.jpeg",
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "PS1 4 player multitap",
        "description": "The PlayStation Multitap is a peripheral for the PlayStation console. It is an adapter that can be used to plug in up to four controllers and memory cards at the same time in a single controller port. With a second multitap, up to eight controllers and memory cards can be plugged at once.",
        "price": 6.99,
        "manufacturer": "Sony",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/Ps1Multitap.jpg",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "Legend of Zelda Air Freshener",
        "description": "Show off your love for the Legend of Zelda with this awesome car air freshener. Pine scented!",
        "price": 2.99,
        "manufacturer": "Unknown",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/ZeldaAir.jpg",
        "user_id": 3,
        "category_id": 4,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Game Over - Poison Mushroom Patch",
        "description": "Heat sealed embroidery patch from Nintendo!",
        "price": 3.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/GameoverPatch.jpeg",
        "user_id": 2,
        "category_id": 4,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Nintendo Messenger Bag",
        "description": "Show your love of retro Nintendo design with this NES Classic Controller Reversible Flap Messenger Bag. This bag includes a reversible front flap which features a classic NES controller on one side and a mini controller print on the other. Once you've chosen your favorite design, just zip it to the front of the bag or change it as and when you want. The bag includes an adjustable shoulder strap to make carrying this bag comfortable.",
        "price": 39.99,
        "manufacturer": "Nintendo",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/NintedoBag.jpeg",
        "user_id": 5,
        "category_id": 4,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Pac Man - Bandages",
        "description": "Gooble up your cuts and scrapes with these Pac-Man Ghost Bandages. The tin contains 15 sterile strips in three different designs.",
        "price": 3.99,
        "manufacturer": "Unknown",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/PacManBandage.jpeg",
        "user_id": 5,
        "category_id": 4,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Gamer Magnets - Space Invaders - 4 pack",
        "description": "4 Pack Space Invader Magnets! Let these awesome aliens invade your fridge or any other magnetic surface! Magnets are a bit bigger than a quarter for size.",
        "price": 9.99,
        "manufacturer": "Unknown",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/SpaceInvaders.jpeg",
        "user_id": 1,
        "category_id": 4,
        "itemStatus_id": 1,
        "condition_id": 1
      }]);
    });
};
