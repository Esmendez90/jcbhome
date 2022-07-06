import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";

export function AccordionComponent(props) {
  let { header,firstLinkToPage, firstTabName, secondLinkToPage, secondTabName } = props;
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0" id="accordion-item">
          <Accordion.Header>{header}</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-linkTo-container"><a href={firstLinkToPage}>{firstTabName}</a></div>
            <div className="accordion-linkTo-container"><a href={secondLinkToPage}>{secondTabName}</a></div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
