import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import GlobalContext from '../context/GlobalContext';
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SegmentIcon from '@mui/icons-material/Segment';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';


const Container = styled.div`
display: flex;
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
justify-content: center;
align-items: center;
`;
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const Header = styled.header`
  background-color: #f3f4f6;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span`
  font-family: 'Material Icons Outlined';
  color: #9ca3af; 
`;
const FORM = styled.form`
background-color: white;  
    border-radius: 0.5rem;    
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
    width: 25%; `;


//for cont3
const Container1 = styled.div`
  padding: 0.75rem; /* equivalent to p-3 */
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem; 
`;



const TitleInput = styled.input`
  padding-top: 0.75rem; 
  padding-bottom: 0.5rem; 
  border: 0;
  color: #4b5563; 
  font-size: 1.25rem;
  font-weight: 600; 
  width: 100%;
  border-bottom: 2px solid #e5e7eb; 
  &:focus {
    outline: none;
    box-shadow: none; 
    border-bottom-color: #3b82f6; 
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e5e7eb;
  padding: 0.75rem;
  margin-top: 1.25rem; 
`;

const SaveButton = styled.button`
  background-color: #3b82f6; 
  &:hover {
    background-color: #2563eb; 
  }
  padding-left: 1.5rem; 
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem; 
  border-radius: 0.375rem; 
  color: white;
  border: none;
  cursor: pointer;
`;

const DateText = styled.p`
  margin: 0;
`;

const DescriptionInput = styled.input`
  padding-top: 0.75rem; /* equivalent to pt-3 */
  padding-bottom: 0.5rem; /* equivalent to pb-2 */
  border: 0;
  color: #4b5563; /* equivalent to text-gray-600 */
  width: 100%;
  border-bottom: 2px solid #e5e7eb; 
  &:focus {
    outline: none;
    box-shadow: none; /* equivalent to focus:ring-0 */
    border-bottom-color: #3b82f6; 
  }
`;
const Labels = styled.div`
display:flex;
column-gap: 0.5rem; 
`;
const IconSpan = styled.span`
  font-family: 'Material Icons Outlined';
  color: #9ca3af; /* Tailwind's text-gray-400 */
  cursor: pointer;
  display:flex;
  flex-direction:row;
`;
const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

const LabelSpan = styled.span`
  width: 1.5rem; 
  height: 1.5rem; 
  border-radius: 9999px;
  display: flex;
  color:white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const EventModal = () => {

    const { setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent } = useContext(GlobalContext);

    const [title, setTitle] = useState(   selectedEvent ? selectedEvent.title : "");
    const [description, setDescription] = useState(   selectedEvent ? selectedEvent.description : "");
    const [selectedLabel, setSelectedLabel] = useState( selectedEvent
        ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
        : labelsClasses[0]);
    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }

        setShowEventModal(false);
    }

    return (
        <Container>
            <FORM>
                <Header>
                    <Icon>< DragHandleIcon /> </Icon>
                    {selectedEvent && (
              <IconSpan
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
             
              >
               <DeleteIcon/>
              </IconSpan>
            )}
                    <Button onClick={() => setShowEventModal(false)}>
                        <Icon><CloseIcon /></Icon>
                    </Button>

                </Header>

                <Container1>
                    <GridContainer>
                        <TitleInput
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Icon>  < ScheduleIcon /> </Icon>
                        <DateText>{daySelected.format("dddd, MMMM DD")}</DateText>
                        <Icon>  <SegmentIcon /></Icon>
                        <DescriptionInput
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Icon> <BookmarkIcon /></Icon>
                        <Labels>
                            {labelsClasses.map((lblClass, i) => (
                                <LabelSpan key={i} onClick={() => setSelectedLabel(lblClass)} style={{ backgroundColor: lblClass, fontSize: "5px" }}>
                                    {selectedLabel === lblClass && (<CheckIcon />)}
                                </LabelSpan>
                            ))}
                        </Labels>

                    </GridContainer>
                </Container1>
                <Footer>
                    <SaveButton type="submit" onClick={handleSubmit}>
                        Save
                    </SaveButton>
                </Footer>
            </FORM>
        </Container>
    )
}

export default EventModal