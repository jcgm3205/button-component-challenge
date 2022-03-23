import styled from "styled-components";

//  This is the main "Button" component. 
//  From this one, we create the others when needed.

//----------------------------------------------------

export const NewButton = styled.button`
    
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;

    background-color: ${props =>  props.primary ? "#3d5afe"
                                : props.secondary ? "#455A64"
                                : props.danger ? "#D32F2F"                                 
                                : "#e0e0e0"};
    box-shadow: 0px 2px 3px rgba(51,51,51,0.2);

    font-family: 'Noto Sans JP', sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    color: ${props => props.primary ? "#fff"
                    : props.secondary ? "#fff"
                    : props.danger ? "#fff"                    
                    : "#3f3f3f"};

    transition: 0.3s ease-in-out;

    &:hover, &:focus{ 
        background-color: ${props =>  props.primary ? "#0039CB" 
                                    : props.secondary ? "#1C313A"
                                    : props.danger ? "#9A0007"                                    
                                    : "#AEAEAE"}
    }
                
    &:disabled{ color: #9E9E9E;
                pointer-events: none;
    }                
`

export const OutlineButton = styled(NewButton)`
    
    border: 1px solid #3d5afe;
        
    background-color: #fff;
    box-shadow: none;
    color: #3d5afe;

    &:hover, &:focus{ 
        background-color: rgba(41, 98, 255, 0.1);                      
    }
`

export const TextButton = styled(OutlineButton)`
    
    border: none;        
`

export const ShopButton = styled(NewButton)`

    width: 105px;
    height: 36px;
    padding: 0;
    box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-evenly;    
`

export const SmallButton = styled(NewButton)`

    padding: 0.375rem 0.75rem;
`

export const LargeButton = styled(NewButton)`

    padding: 0.6875rem 1.375rem;
`

