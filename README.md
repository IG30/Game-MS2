# Find The Heavier Ball

Mile Stone Two: Interactive Front-End Development - Code Institute.
This project is used for educational purposes only for a school coding project.
There will be no commercial use of this code or project. It is inspired by a math riddle that I resolved when I was a kid.

# Demo 
A live demo for this project can be found [here](https://ig30.github.io/Game-MS2/). This project is hosted on GitHub pages.

# Technologies

1. HTML5
2. CSS3
3. JavaScript
4. JQuery
5. Bootstrap

# UX 

The purpose of this project is to create an iteractive and aesthetically pleasing math riddle.

Client Stories:

1. As a user I would like to be presented with all the elemets needed to resolve the riddle so I don't need to use anything external to the page.
2. As a user I would like all the element to be presented with a cohesive desing style.
3. As a user I would like time to trickle down from say 180 seconds instead of it starting at 00:00 and be infinite to make the game more challenging.
4. As a user I would like to have a count of the balls that I have discarded to quickly assess my progress.
5. As a user I would like a way to quickly restart the game.

# Features

**In order to achieve the above fun and aesthetically pleasing riddle I did the follow**

* When the game is launched a screen pops up with a message. The player is told the rules of the game, the time and click to start.

![Start overlay](assets/images/start.PNG)

* Once the user click to start they will see the main page. In this page there diffetent features. The title, the control panel, the sides of the scale and the group of basketballs.

![Main Page](assets/images/mainpage.PNG)

**The tilte**

![Title](assets/images/title.PNG)

If the users click on the titlte the game will restart. This is indicated in the rules and on a tooltip that user will see when Hover on the title.

**Control Panel**

![Control Panel](assets/images/controlPanel.PNG)

It contains the following elemets:

1. Scale: Indicates the amount of move left with the scale.
2. Time: Indicates the time left to complete the riddle.
3. Bin: Indicates the amount of balls in the bin.
4. S button: Calls the function to check for the hevier ball inside the sides of the scale. If it is in it the scale will move.
5. Scale icon button: It is use to rebalance the scale.
6. A button: Calls the fuction to check the users answer.
7. Basket: The user will drag the answer here to activate the A button and check it.
8. Bin icon: The user can user it to discard the balls that are not the heaviest.

Apart fron the first, second and third element, the rest have a tooltip with a small description. The tooltip is activated when hovering on the element.

* When the time runs out or the user give an incorrect answer a game over message will be display. And if the user gives a correct answer a victory message will be display.

![Game Over](assets/images/gameOver.PNG)

![Victory](assets/images/victory.PNG)

**Sides of the Scale**

The user can drag the balls here to use the scale to check for the heavier ball. If the Heavier ball is in the selection of balls that user chose the scale will move.

![Scale](assets/images/scale.PNG)

**Group of balls**

The group of basketballs are draggable and they can be place on the scale, the bin and the basket net.

![Basketballs](assets/images/groupOfBalls.PNG)

## Features left to implement

* I would like to add some sounds to different element in the riddle. Victory, game over, pick up a ball and drop it.
* Improve the quality of the desing and images.
* Automatize the scale so the user don't need to click a button to unbalce or rebalance the scale.

# Manual Testing

1. Scenario
* **Given** The project page
* **When** the user open the page
* **Then** The first overlay appears from the center of the page growing foward
* **And** the user is able to read the rules of the riddle.

2. Scenario
* **Given** the first overlay
* **When** the user click to start the game
* **Then** the main page is visible
* **And** the time countdown is started

3. Scenario
* **Given** the main page
* **When** the user hover over the title
* **And** after click on it
* **Then** the game is restarted. 

4. Scenario
* **Given** the main page
* **When** the user hover on the "S Button" or "The scale icon" or "A button" or "Basket net" or "the bin icon"
* **Then** A tooltip is display with a small description

5. Scenario
* **Given** the main page
* **When** the user click and hold on a ball
* **Then** the user is able to drop the ball on to the "side of the scale" or the "basket net" or "the bin"

6. Scenario
* **Given** the main page
* **When** the user drag the heavy basketball on to the "left side" or the "right side" of the scale
* **And** click the S button
* **Then** the side with the heavy ball drop down
* **And** the sacle count drop down one

7. Scenario
* **Given** the main page
* **When** the "left side" or "right side" of the scale is down
* **And** the user clicks the "scale icon"
* **Then** the sides of the scale rebalance.

8. Scenario
* **Given** the main page
* **When** the user drag a ball into the basket net
* **Then** the "A button" gets enable

9. Scenario
* **Given** the main page
* **When** the user drag multiple balls into the basket net
* **Then** the "A button" remains disabled

10. Scenario
* **Given** the main page
* **When** there is a light ball in the basket net
* **And** the user click on the "A button"
* **Then** the "game over" overlay is display from the center growing foward.

11. Scenario
* **Given** the main page
* **When** there is the heavier ball in the basket net
* **And** the user click on the "A button"
* **Then** the "victory" overlay is display from the center growing foward.

12. Scenario
* **Given** the "game over" or "Victory overlay
* **When** the user clicks on the page
* **Then** the riddle restart

13. Scenario
* **Given** the main page
* **When**the user drag a ball into the bin
* **Then** the bin count up by one

Testing the game help me find out that when the user restarted the game after clicking on the title or the game over and victory overlay the time was going twice as fast.
This was happening because of the way that the script.js was written. The event listeners and the time count down were call multiple times. This meant that after restarting the game
the time was going twice as fast. One time for the first round and another time for the second round. So everytime that the user click to restart the riddle the time was going faster and faster.
Same with the eventListeners, everytime that user restarted the game the S button was already disable because for the riddle the button was already used twice.
To resolve this issue I put all the eventListener into one fuction to make sure that they were called correctly. For the buttons clicks counts I set their values 
into variable that will get reset everytime the game restart.

Another bug founded during the testing was the Tooltip. When the S button was desabled and the user wasn't hovering on it anymore the tooltip stayed visible. In the
Boostrap documentation about the tooltip, in the section "Desable elements" they advice to wrap the element in a div or span and trigger the tooltip from it. This resolved 
the bug. 


The riddle has been tested in:

* Chrome (desktop and mobile)
* Firefox (desktop and mobile)
* Safari (desktop and mobile)

# Deployment

This site is deployed directly from the master branch.I deployed it by going to my repository -> settings -> Github pages -> and in the dropdown
I clicked Master Branch which hosts the website on GitHub Pages.

# Credits

## Content
The inspiration came from a riddle that a resolved as a kid. (No copyright infringement intended, as this is for educational use only.)


## images
All the images in the game where found doing a search on google >> Settings >> Advance search >> Usage rights >> Creative commons licenses.
This searchs for images that are free to use. (No copyright infringement intended, as this is for educational use only.)

## Acknowledgements

* [Code insitute](https://courses.codeinstitute.net/).
* [Web Dev Simplified](https://www.youtube.com/watch?v=28VfzEiJgy4&t=1553s) - From this tutorial I got the idea of the overlays and the structure of the riddle.
* [PortEXE](https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=3008s) - This video helped me understand how to structure my script.js. How to create the countdown and clear the intervals.
* [Scotch](https://scotch.io/ ) - From this page I learned how to shuffle the basketball everytime the riddle started. Once I understand it I was able to modify the fuction to a simpler one.
* [www.w3schools](https://www.w3schools.com/) - I refer to this page to refresh concepts of html, css and JavaScript as well as learn new ones.
* [Stackoverflow](https://stackoverflow.com/) - I use this page to ask specific question about my code and to get help from the comunnity.
* [SortableJS](https://github.com/SortableJS/sortablejs) I used this library to create the drag and drop animation.
* **Slack Code Institute Comunity**
* **My Mentor at Code Institute - Guido Cecilio**


