import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactListComponent() {
  return (
    <>
      <ul className="contactList-container">
        <li className="icons">
          <a href="tel: 201-732-6844" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPhone} /> Phone
          </a>
        </li>
        <li className="icons">
          <a
            href="https://api.whatsapp.com/send?phone=12017326844&amp;text=Hi, there! I have a question"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </a>
        </li>
        <li className="icons">
          <a href="mailto:j.mendez@kw.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.facebook.com/JCBrealEstateServices"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.messenger.com/t/114704715925203/?messaging_source=source%3Apages%3Amessage_shortlink"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} /> Messenger
          </a>
        </li>
      </ul>
    </>
  );
}
