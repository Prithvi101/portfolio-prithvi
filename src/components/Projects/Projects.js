import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import slack from "../../Assets/Projects/slack.png";
import keeper from "../../Assets/Projects/keeper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="amazon-clone"
              description="An Amazon clone project using React and Firebase is a web application that emulates the functionality and features of Amazon's e-commerce platform. The project is built using the React library for the frontend and Firebase for the backend."
              ghLink="https://github.com/Prithvi101/amazon-clone"
              demoLink="https://clone-5e733.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slack}
              isBlog={false}
              title="slack-clone"
              description="A Slack clone is an application that simulates the functionality of the popular chat platform, Slack. Building a Slack clone with React, Firebase, and Styled Components is a great way to learn about modern web development technologies."
              ghLink="https://github.com/Prithvi101/slack-clone"
              demoLink="https://slack-clone-75d99.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="keeper"
              description="Keeper is a Google Keep clone built using React. It is a note-taking app that allows users to create and organize notes, lists, and reminders. The app provides a simple and intuitive user interface that allows users to quickly create and manage their notes."
              ghLink="https://github.com/Prithvi101/keeper/"
              demoLink="https://prithvi101.github.io/keeper/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
