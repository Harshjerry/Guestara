import React from 'react';
import styled from "styled-components";
import Day from './Day';

const Container=styled.div`
flex:1;
display: grid;
grid-template-columns: repeat(7, 1fr); /* 7 columns of equal width */
grid-template-rows: repeat(5, 1fr);    /* 5 rows of equal height */

`;



const Month = ({month}) => {
  return (
    <Container>
        {month.map((row,i)=>(
            <React.Fragment key={i}>

            {row.map((day,idx)=>(<Day day={day} key={idx}   rowIdx={i}/>))}    
            </React.Fragment>
        ))}
    </Container>
  )
}

export default Month