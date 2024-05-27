import React, { useContext } from "react";
import styled from "styled-components";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";

const Button = styled.button`
  border: 1px solid #ccc;
  padding: 0.2rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

const Span = styled.span`
  padding-left: 0.75rem;
  padding-right: 1.75rem;
`;

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <Button onClick={() => setShowEventModal(true)}>
      <Img src={plusImg} alt="create_event" />
      <Span>Create</Span>
    </Button>
  );
}
