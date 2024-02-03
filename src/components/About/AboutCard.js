import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Garg </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br />
            I am currently employed as a software developer at Socialkyte.
            <br />
            I have completed Bachelor of Computer Applications, from CCS university, Merut.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Bikes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make your own impact on society"{" "}
          </p>
          <footer className="blockquote-footer">Ashish Garg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
