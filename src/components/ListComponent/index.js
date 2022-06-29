import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleTranslate from "../GoogleTranslate/index";

export function ContactListComponent() {
  return (
    <>
      <ul className="contactList-container">
        <p>CONTACT ME:</p>
        <li className="icons">
          <a href="tel: 201-732-6844" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPhone} /> <span>Phone</span>
          </a>
        </li>
        <li className="icons">
          <a
            href="https://api.whatsapp.com/send?phone=12017326844&amp;text=Hi, there! I have a question"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> <span>Whatsapp</span>
          </a>
        </li>
        <li className="icons">
          <a href="mailto:j.mendez@kw.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.facebook.com/JCBrealEstateServices"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> <span>Facebook</span>
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.messenger.com/t/114704715925203/?messaging_source=source%3Apages%3Amessage_shortlink"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} /> <span>Messenger</span>
          </a>
        </li>
        {/* <li className="icons">
          <GoogleTranslate/>
        </li> */}
      </ul>
    </>
  );
}
