
import React from 'react'
import {  useState,
  useEffect,
  useReducer,
  useMemo } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs';
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}


export const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <GlobalContext.Provider value={{
      monthIndex, setMonthIndex, showEventModal,
      setShowEventModal
      , daySelected,
      setDaySelected,
      dispatchCalEvent,savedEvents,
      selectedEvent,
      setSelectedEvent,
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
