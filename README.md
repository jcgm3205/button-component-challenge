<h1 align="center">Button Component Challenge</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://jcgm3205.github.io/button-component-challenge/">
      Solution (at GithHub Pages)
    </a>
    <span> | </span>
    <a href="https://button-component-challenge.onrender.com/">
      Solution (at Render)
    </a> 
    <span> | </span>
    <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">
      Challenge
    </a>
  </h3>
</div>



## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)




## Overview

![Screenshot](https://user-images.githubusercontent.com/91711789/159857739-5b8be525-052b-415a-b0aa-1641ed763e63.png)

As indicated at the Challenge page, the goal was to generate a collection of reusable buttons with different design properties. I've been studying to become a Front-End Developer and to specialize in React, so in order to solve the challenge, that library was used.

React itself allows to generate various types of reusable UI components (that's, indeed, it's main reason to exist). However, there are many complementary libraries that helps to create components much easier and integrating desing issues in a more natural way. One of these is Styled Components.

Styled Components (SC) is a special library that deals with the CSS part of generating UI pieces for an app or a website. It allows to declare an HTML tag (like a <code>button</code> tag) and, immediately after, setting all the related style properties, from the padding or the border, to pseudoclasses, pseudoelements, specific classes, indications to possible tag's children, etc. For more information, you can check it's official website (link below).

Furthermore, one of the additional advantages of the components created with SC, is the easy way to code new ones from those already generated, adjusting the styles of the "children" on demand.

Taking into account how SC works, our first "Button" component created (labeled as "NewButton" in the "ButtonComponents.js" file) already has many of the properties needed for the solution of the challenge (font famliy, background color, border, box shadow, etc. ) and it appears as the first button of the gallery. Also, includes the behavior established with ":hover" and ":focus" pseudoclasses and an interesting one, previously unknown to me: the pseudoclass "disabled", related with the attribute of the same name.  

Before going any further, it's necessary to speak about the Figma design. For this challenge, I decided to create the buttons from the perspective of generating as few components as possible, and to create them in the easiest way possible. So, these buttons are not "pixel-perfect" ones. Although the  dimensions of the final buttons are, in deed, very close to those at the Figma file.      

That being said, the "variant=outline" and the "variant=text" button were coded as "descendants" of "NewButton", where only changes the background color, the text color and the border properties. So, we get "OutlineButton" and "TextButton" (the second and third buttons of the gallery, respectively).  

Speaking about the properties "background-color" and "color", these were coded at "NewButton" using the JS [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) along with their "props". As a result, the "primary", "secondary" and "danger" variants (shown as the last buttons of the Figma file ) can be created just by calling a "NewButton" with a boolean property of "props", namely, "primary", "secondary" or "danger". In other words, four different buttons at the price of one. Yay!  



### Built With

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
 


## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY) was to build a set of UI components (specifically, a series of buttons ) to complete the given user stories. These buttons should had some particular layout properties and to be generated using a Front-End library like Vue. For this case, React was used.

Also, for a more complete excercise presentation, a simple design - similar to a image gallery - was created. The idea behind this, was to put a 'Button' component (the main UI piece and the foundation of the challenge) inside a 'Card' component, in order to show its layout properties. And, each 'Card' includes a brief featuring of each 'Button' to complete the layout.

Although in the Challenge page, there are no instructions regarding any possible utility for the 'Button' components, for the sake of completeness, every 'Button' has a small function added. When a 'Button' (except those containing the "Disabled" text) is clicked, an alert box appears, showing a legend.


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jcgm3205/button-component-challenge.git

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Contact

- GitHub [@jcgm3205](https://github.com/jcgm3205)
- Email [jcglezmarin@gmail.com](mailto:jcglezmarin@gmail.com)
