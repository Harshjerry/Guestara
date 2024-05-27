import React, { useContext } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GlobalContext from '../context/GlobalContext';

import dayjs from 'dayjs';

const Container = styled.div`
 display:flex;
 padding: 0.5rem 1rem;
align-items:center; 
 `;
const Image = styled.img`
 margin-0.5 rem;
width: 3rem; /* or 48px */
height: 3rem; /* or 48px */
`;

const Head = styled.h1`
margin: 2.5rem;
font-size: 2.25rem;
color:gray; 
font-weight: 600;
`;
const Button = styled.button`
padding:1rem 2rem;
border:none;
border-radius:30px;
background-color:transparent;
cursor:pointer;
`;

const IconBox = styled.span`
color:gray;
cursor:pointer;
margin:0.5 rem;
font-size:0.1rem;
`;
const Head2 = styled.h2` 
margin: 2.5rem;
color:gray; 
font-weight: 800;
`;

const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <Container>
      <Image src="/G.png" />

      <Head> Calender</Head>

      <Button onClick={handleReset}>Today</Button>

      <Button onClick={handlePrevMonth}><IconBox>
        <ArrowBackIosIcon />
      </IconBox>
      </Button>

      <Button onClick={handleNextMonth}>
        <IconBox>
          <ArrowForwardIosIcon />
        </IconBox>
      </Button>
      <Head2> {dayjs(new Date(dayjs().year(), monthIndex)).format(
        "MMMM YYYY"
      )}</Head2>

    </Container>
  )
}

export default CalenderHeader