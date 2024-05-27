import React, { useContext ,useState,useEffect
} from 'react'
import styled from "styled-components";
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
const Container = styled.div`
display: flex;
flex-direction: column;
border: 0.5px solid lightgray; 
margin: 0; 
padding: 0; 

`;

const EventDiv = styled.div`
  padding: 0.25rem;
  margin-right: 0.75rem;
  color: #4b5563;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  
  ${({ label }) => `
    background-color: ${label === 'indigo' ? '#c7d2fe' :
                      label === 'gray' ? '#e5e7eb' :
                      label === 'green' ? '#d1fae5' :
                      label === 'blue' ? '#bfdbfe' :
                      label === 'red' ? '#fecaca' :
                      label === 'purple' ? '#e9d5ff' : '#e5e7eb'};
  `}
`;

const Text = styled.p`
padding:1;
margin:1;
text-align:center;
font-family: "Open Sans", sans-serif;
background-color: ${props => props.isCurrentDay ? 'blue' : 'white'};
color: ${props => props.isCurrentDay ? 'white' : 'black'};
border-radius: ${props => props.isCurrentDay ? '50%' : '0'};
width: ${props => props.isCurrentDay ? '1.8rem' : 'auto'};
height: ${props => props.isCurrentDay ? '1.8rem' : 'auto'};
`;
const Header = styled.header`
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
`;
const Text2 = styled.p`
text-align:center;
margin:0;
`;

const Cont2 = styled.div`
flex:1.4;
cursor:pointer;
`;

const Day = ({ day, rowIdx }) => {

  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    savedEvents,setSelectedEvent
  } = useContext(GlobalContext);

  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY');
  }
  useEffect(() => {
    const events = savedEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);
  return (
    <Container>
      <Header>
        {rowIdx === 0 && (<Text2> {day.format('ddd').toUpperCase()}</Text2>
        )}
        <Text isCurrentDay={getCurrentDayClass()}>
          {day.format('DD')}
        </Text>
      </Header>

      <Cont2 onClick={() => {
        setDaySelected(day)
        setShowEventModal(true)
      }}>

{dayEvents.map((evt, idx) => (
        <EventDiv
          key={idx}
          label={evt.label}
          onClick={() => setSelectedEvent(evt)}
        >
          {evt.title}
        </EventDiv>
      ))}
      </Cont2>

    </Container>
  )
}

export default Day