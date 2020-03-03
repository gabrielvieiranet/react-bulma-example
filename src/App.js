import React from 'react';
import 'rbx/index.css';
import {
  List,
  Container,
  Navbar,
  Section,
  Title,
  Field,
  Button,
  Icon,
  Control,
} from 'rbx';
import { FaTwitter, FaGithub } from 'react-icons/fa';

import './App.sass';

function App() {
  return (
    <Section>
      <Container>
        <Navbar fixed="top" color="primary">
          <Navbar.Brand>
            <Navbar.Item href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Segment align="start">
              <Navbar.Item href="https://bulma.io/">Home</Navbar.Item>
              <Navbar.Item dropdown hoverable>
                <Navbar.Link href="https://bulma.io/documentation/overview/start/">
                  Docs
                </Navbar.Link>
                <Navbar.Dropdown boxed>
                  <Navbar.Item href="https://bulma.io/documentation/overview/start/">
                    Overview
                  </Navbar.Item>
                  <Navbar.Item href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                  </Navbar.Item>
                  <Navbar.Item href="https://bulma.io/documentation/columns/basics/">
                    Columns
                  </Navbar.Item>
                  <Navbar.Item href="https://bulma.io/documentation/layout/container/">
                    Layout
                  </Navbar.Item>
                  <Navbar.Item href="https://bulma.io/documentation/form/general/">
                    Form
                  </Navbar.Item>
                  <Navbar.Divider />
                  <Navbar.Item href="https://bulma.io/documentation/elements/box/">
                    Elements
                  </Navbar.Item>
                  <Navbar.Item
                    active
                    href="https://bulma.io/documentation/components/breadcrumb/"
                  >
                    Components
                  </Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Segment>
            <Navbar.Segment align="end">
              <Navbar.Item as="div">
                <Field kind="group">
                  <Control>
                    <Button as="a" color="info" href="https://twitter.com">
                      <Icon>
                        <FaTwitter />
                      </Icon>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <Button
                      as="a"
                      color="primary"
                      href="https://github.com/dfee/rbx"
                    >
                      <Icon>
                        <FaGithub />
                      </Icon>
                      <span>GitHub</span>
                    </Button>
                  </Control>
                </Field>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>

        <Title>Raquete</Title>
        <List>
          <List.Item>Ferramenta 1</List.Item>
          <List.Item active>Ferramenta 2</List.Item>
          <List.Item>Ferramenta 3</List.Item>
          <List.Item>Ferramenta 4</List.Item>
          <List.Item as="span">Ferramenta 5</List.Item>
          <List.Item>Ferramenta 6</List.Item>
        </List>
      </Container>
    </Section>
  );
}

export default App;
