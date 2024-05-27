import React from "react";
import styled from "styled-components";
import CreateEventButton from "./CreateEventButton";

const Aside = styled.aside`
  border: 1px solid #ccc;
  padding: 1.25rem;
  width: 16rem;
`;

export default function Sidebar() {
  return (
    <Aside>
      <CreateEventButton />
    </Aside>
  );
}
