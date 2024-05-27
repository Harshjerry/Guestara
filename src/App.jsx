import React from "react";
import { useState,useContext,useEffect } from "react"
import { getMonth } from "./util";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import CalenderHeader from "./components/CalenderHeader";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Front from "./components/Front";

const Container=styled.div`
height:100vh;
width:100vw;
display: flex;
 flex-direction: column;
`;

const Cont1=styled.div`
display:flex;
flex:1;
`


function App() {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex ,showEventModal} = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
    <Container>  
      {showEventModal&&(<EventModal/>)}
           <CalenderHeader/>
      <Cont1>
         <Month month={currentMonth}/>
        
      </Cont1>

    </Container>
  
      
    </>
  )
}

export default App
