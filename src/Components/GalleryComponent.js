import { LargeButton, NewButton,
    OutlineButton,
    ShopButton,
    SmallButton,
    TextButton } from './ButtonComponents';
import { MdAddShoppingCart as ShCart } from 'react-icons/md';    
import { ButtonContainer, 
         Card, 
         Container,
         Description, 
         DescriptionContainer } from './PageComponents';


export function Gallery(){

    return(

    <Container >

        <Card> 

            <ButtonContainer>
              <NewButton 
                onClick={() => {
                  alert(
                    "You clicked a basic 'Button' component called 'NewButton'.");
                }} >
                    
                    Default 

              </NewButton>
            </ButtonContainer>

            <DescriptionContainer>
              <Description > This is our main (or basic) "Button" component. 
                  From it, we can build other components with different
                  properties and styles.
              </Description>                  
            </DescriptionContainer>  

        </Card>


        <Card>

            <ButtonContainer>
              <OutlineButton 
                onClick={() => {
                  alert(
                    "You clicked a variant 'Button' component called 'OutlineButton'.");
                }} >
                    
                    Default
                    
              </OutlineButton>
            </ButtonContainer>

            <DescriptionContainer>
              <Description > From the main "Button" component, it is possible to create new "Buttons" 
              like this one. It has a border and colored text, unlike the basic "Button".
              </Description> 
            </DescriptionContainer>             

        </Card>


        <Card>

              <ButtonContainer>
                <TextButton 
                  onClick={() => {
                    alert(
                    "You clicked a variant 'Button' component called 'TextButton'.");
                  }} >  
                  
                    Default
                    
                </TextButton>
              </ButtonContainer>

              <DescriptionContainer>
                <Description > This "Button", however, was created from the previous one, 
                  just by eliminate the border.
                  So, it's a "grandchild" of the basic "Button". 
                </Description>                
              </DescriptionContainer>               

        </Card>


        <Card> 

            <ButtonContainer> 
              <NewButton  
                primary
                style={{boxShadow:"none"}}
                onClick={() => {
                   alert(
                "You clicked a 'NewButton' with a 'primary' key active and without a 'Box Shadow'.");
                }} >
                    
                     Default
                     
              </NewButton>
            </ButtonContainer>

            <DescriptionContainer>
              <Description > Here we have a basic "Button" with an option active, 
                called "primary" and without a <code>box-shadow</code> property. 
              </Description>                 
            </DescriptionContainer>             

        </Card>


        <Card> 

            <ButtonContainer>
                <NewButton 
                  disabled
                  onClick={() => {
                    alert(
                    "Ooopsss...");
                }} > 
                
                    Disabled
                    
                </NewButton>
            </ButtonContainer>

            <DescriptionContainer>
              <Description > We have here a base "Button" with the boolean attribute "disabled". 
                It comes directy from those of the HTML tag <code> button. </code> 
              </Description>                 
            </DescriptionContainer>             

        </Card>


        <Card>

            <ButtonContainer>
                <TextButton 
                  disabled
                  onClick={() => {
                    alert(
                    "Ooopsss...");
                }} >
                    
                    Disabled
                </TextButton> 
            </ButtonContainer>

            <DescriptionContainer>
              <Description > The "disabled" version of the basic "Button" 's "grandchild". 
                
              </Description>
            </DescriptionContainer>             

        </Card>


        <Card>

          <ButtonContainer>  
          <ShopButton 
            primary
            onClick={() => {
              alert(
                "You clicked a variant 'Button' component called 'ShopButton'.");
            }} >

            <ShCart />
            Default

          </ShopButton> 
          </ButtonContainer>

          <DescriptionContainer>
            <Description > The "shopping" version of the basic "Button". It has the "primary"
              option and a sweet, little car icon. 
                
            </Description>                
          </DescriptionContainer>           

        </Card>    


        <Card> 

          <ButtonContainer>  
          <ShopButton 
            primary
            onClick={() => {
              alert(
                "You clicked a variant 'Button' component called 'ShopButton'.");
            }} >

            Default
            <ShCart />
              
          </ShopButton>  
          </ButtonContainer>

          <DescriptionContainer>
            <Description > Here we have a different presentation for the shopping "Button".
              Except from the car icon's position, it's the same as the previous one.    
            </Description> 
          </DescriptionContainer>           

        </Card>  
        

        <Card>

          <ButtonContainer>  
          <SmallButton 
            primary
            onClick={() => {
              alert(
                "You clicked a variant 'Button' component called 'SmallButton'.");
            }}> 
            
              Default 

          </SmallButton>
          </ButtonContainer>

          <DescriptionContainer>
            <Description > This is the small version of the main "Button", 
              with a shorter width and height.     
            </Description>                
          </DescriptionContainer>           

        </Card>


        <Card>

          <ButtonContainer>  
          <NewButton 
            primary
            onClick={() => {
              alert(
              "You clicked a 'NewButton' with a 'primary' key active.");
            }} >

              Default

          </NewButton>
          </ButtonContainer>

          <DescriptionContainer>
            <Description > Here, a basic "Button" component with the "primary" option
              and no further modifications.
            </Description>                
          </DescriptionContainer>           

        </Card>


        <Card>

          <ButtonContainer>  
          <LargeButton 
            primary
            onClick={() => {
              alert(
                "You clicked a variant 'Button' component called 'LargeButton'.");
            }}> 

              Default 

          </LargeButton>
          </ButtonContainer>

          <DescriptionContainer>
            <Description > This is the large version of the main "Button", 
              The width and the height are bigger, but nothing more was added.     
            </Description>          
          </DescriptionContainer>           

        </Card>


        <Card>

          <ButtonContainer>  
          <LargeButton 
            secondary
            onClick={() => {
              alert(
                "You clicked a 'NewButton' with a 'secondary' key active.");
            }}> 

              Secondary 

          </LargeButton> 
          </ButtonContainer>

          <DescriptionContainer>
            <Description > The basic "Button" has three options available. If we
              use an option called "secondary", instead of "primary", we get this
              "Button".
            </Description>                
          </DescriptionContainer>           

        </Card>


        <Card>

          <ButtonContainer>  
          <LargeButton 
            danger
            onClick={() => {
              alert(
                "You clicked a 'NewButton' with a 'danger' key active.");
            }}> 

              Danger 

          </LargeButton>  
          </ButtonContainer>

          <DescriptionContainer>
            <Description > And, if we
              use an option called "danger", instead of "primary", at the main "Button",
              we get this new one.
            </Description>                
          </DescriptionContainer> 

        </Card>

     
    </Container>

    );

}