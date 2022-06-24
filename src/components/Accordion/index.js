import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";

export function AccordionComponent(props) {
  let { header, toSellers, tabToSeller, toServices, tabServices } = props;
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{header}</Accordion.Header>
          <Accordion.Body><a href={toSellers}>{tabToSeller}</a></Accordion.Body>
          <Accordion.Body><a href={toServices}>{tabServices}</a></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
