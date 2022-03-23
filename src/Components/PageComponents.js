import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    margin: 2rem 0; 
`

export const ExtLink = styled.a`
    text-decoration: none;
    margin-left: 3px;
    margin-right: 3px;
`

export const NewPar = styled.p`
    line-height: 40px;
`

export const Container = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 1.25rem 0;

        
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    justify-items: center;
    row-gap: 2.5rem;

`

export const Card = styled.article`
    height: 14rem;
    width: 18.75rem;
    padding: 0.5rem;

    border-radius: 5px;
    box-shadow: 3px 3px 4px 2px rgba(99, 99, 99, 0.4);
    background-color: #BED3E8;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const ButtonContainer= styled.section`
    
    padding: 0.5rem 1rem;
       
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DescriptionContainer = styled.section`

    background-color: #fff;
    
    height: 65%;
    width: 17rem;
    border: 1px solid #393782;
    border-radius: 5px;
`

export const Description = styled.p`
    
    padding: 0.5rem;
`
