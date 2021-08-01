alert ("Hello world")
let name = prompt("Hello 😀!! what is your name")

alert("hey!! , wlecome to my website " + name )

let favGenre = prompt("what is you fav game genre? sports , RPG , action ?")

while(favGenre != "sports" && favGenre != "RPG" && favGenre != "action"){

if(favGenre == null){
  break
}
else{
  favGenre = prompt("what is you fav game genre? sports , RPG , action ?")}

}

if(favGenre == "sports"){
document.write(
  "<div>" + "<h3>" + favGenre+"</h3>"
+ "<img  src='https://e7.pngegg.com/pngimages/549/880/png-clipart-lewiston-event-center-sport-flight-simulator-simulation-multi-sports-game-text-thumbnail.png' width='100' height='100'     />" + "</div>")
}
else if (favGenre =="RPG"){
document.write(
  "<div>" + "<h3>" + favGenre+"</h3>"
+ "<img  src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3145d7a9-72d5-4597-b9d4-e94d73649344/d9522tf-949b1436-635d-4a40-9eec-37f452f37c77.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxNDVkN2E5LTcyZDUtNDU5Ny1iOWQ0LWU5NGQ3MzY0OTM0NFwvZDk1MjJ0Zi05NDliMTQzNi02MzVkLTRhNDAtOWVlYy0zN2Y0NTJmMzdjNzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1fRA5wJtS0vkiHe2NhIOFxfw0RXw8ja_AJ_Kmw3o_gI' width='100' height='100'     />" + "</div>")
}
else if(favGenre =="action"){
document.write(
  "<div>" + "<h3>" + favGenre+"</h3>"
+ "<img  src='https://ucarecdn.com/846c48c4-27f7-4e55-98e5-68ded37ff6a5/' width='100' height='100'     />" + "</div>")
}
else{
  alert('I apologize but we dont have this genre yet! 😥')
}

let moreInfo = prompt("do you want to learn more about any genre? y / n")
if(moreInfo == "y"){
  showMoreInfo();
}

function showMoreInfo(){
  document.write("sports : Sports games involve physical and tactical challenges, and test the player's precision and accuracy. Most sports games attempt to model the athletic characteristics required by that sport, including speed, strength, acceleration, accuracy, and so on. As with their respective sports, these games take place in a stadium or arena with clear boundaries. Sports games often provide play-by-play and color commentary through the use of recorded audio. Sports games sometimes make use of different modes for different parts of the game. This is especially true in games about American football such as the Madden NFL series, where executing a pass play requires six different gameplay modes in the span of approximately 45 seconds. Sometimes, other sports games offer a menu where players may select a strategy while play is temporarily suspended. Association football video games sometimes shift gameplay modes when it is time for the player to attempt a penalty kick, a free shot at goal from the penalty spot, taken by a single player.Some sports games also require players to shift roles between the athletes and the coach or manager. These mode switches are more intuitive than other game genres because they reflect actual sports.Older 2D sports games sometimes used an unrealistic graphical scale, where athletes appeared to be quite large in order to be visible to the player. As sports games have evolved, players have come to expect a realistic graphical scale with a high degree of verisimilitude. Sports games often simplify the game physics for ease of play, and ignore factors such as a player's inertia. Games typically take place with a highly accurate time-scale, although they usually allow players to play quick sessions with shorter game quarters or periods.[2]Sports games sometimes treat button-pushes as continuous signals rather than discrete moves, in order to initiate and end a continuous action. For example, football games may distinguish between short and the long passes based on how long the player holds a button. Golf games often initiate the backswing with one button-push, and the swing itself is initiated by a subsequent push.")

document.write("action : An action game is a video game genre that emphasizes physical challenges, including hand–eye coordination and reaction-time. The genre includes a large variety of sub-genres, such as fighting games, beat 'em ups, shooter games and platform games. Multiplayer online battle arena and some real-time strategy games are also considered action games.In an action game, the player typically controls a character often in the form of a protagonist or avatar. This player character must navigate a level, collecting objects, avoiding obstacles, and battling enemies with their natural skills as well as weapons and other tools at their disposal. At the end of a level or group of levels, the player must often defeat a boss enemy that is more challenging and often a major antagonist in the game's story. Enemy attacks and obstacles deplete the player character's health and lives, and the player receives a game over when they run out of lives.Alternatively, the player gets to the end of the game by finishing a sequence of levels to complete a final goal, and see the credits. But some action games, such as early arcade games, are unbeatable and have an indefinite number of levels; with the player's only goal being to get as far as they can to maximize their score.")

document.write("RPG : A role-playing video game (commonly referred to as simply a role-playing game or an RPG as well as a computer role-playing game or a CRPG) is a video game genre where the player controls the actions of a character (or several party members) immersed in some well-defined world, usually involving some form of character development by way of recording statistics. Many role-playing video games have origins in tabletop role-playing games and use much of the same terminology, settings and game mechanics. Other major similarities with pen-and-paper games include developed story-telling and narrative elements, player character development, complexity, as well as replay value and immersion. The electronic medium removes the necessity for a gamemaster and increases combat resolution speed. RPGs have evolved from simple text-based console-window games into visually rich 3D experiences.Role-playing video games use much of the same terminology, settings and game mechanics as early tabletop role-playing games such as Dungeons & Dragons. Players control a central game character, or multiple game characters, usually called a party, and attain victory by completing a series of quests or reaching the conclusion of a central storyline. Players explore a game world, while solving puzzles and engaging in combat. A key feature of the genre is that characters grow in power and abilities, and characters are typically designed by the player.[1] RPGs rarely challenge a player's physical coordination or reaction time, with the exception of action role-playing games.Role-playing video games typically rely on a highly developed story and setting, which is divided into a number of quests. Players control one or several characters by issuing commands, which are performed by the character at an effectiveness determined by that character's numeric attributes. Often these attributes increase each time a character gains a level, and a character's level goes up each time the player accumulates a certain amount of experience.Role-playing video games also typically attempt to offer more complex and dynamic character interaction than what is found in other video game genres. This usually involves additional focus on the artificial intelligence and scripted behavior of computer-controlled non-player characters.")
}