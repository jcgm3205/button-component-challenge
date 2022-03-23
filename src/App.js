import React from 'react';
import { ExtLink, NewPar, Title } from './Components/PageComponents';
import { Gallery } from './Components/GalleryComponent';

export default function App() {

  return (
    <>
      <Title> "Button Components" Challenge </Title>

      <NewPar > This is a solution for a challenge from
            <ExtLink 
              href="http://devchallenges.io" 
              target="_blank" > Devchallenges.io. </ExtLink>
            It was created using 
            <ExtLink
              href="https://reactjs.org/" 
              target="_blank"> ReactJS </ExtLink> and
            <ExtLink
              href="https://www.styled-components.com/" 
              target="_blank"> Styled Components. </ExtLink>    
      </NewPar>

      <NewPar> You can read the             
          <ExtLink 
              href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY" 
              target="_blank" > Challenge </ExtLink>  
          page for more details of the requirements.     
      </NewPar>

      <NewPar> The design of the solution page is similar to a gallery, 
          where each button appears inside a "Card" component and has a small
          functionality when you click them (except, of course, for 
          the disabled ones). Hope you like it. ;)
          
      </NewPar>


      <Gallery />

        
    </>
  );
}