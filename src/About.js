import React from 'react';
import styled from 'styled-components';
import './App.css'


const GridWrapper = styled.div`
  grid-gap: 10px;
  margin-top: 5em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 


export const About = () => (
  <GridWrapper>
    <h2>About Page</h2>
    <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
    <p>I am a kitty cat, sup, feed me, no cares in the world</p>
    <p>Meow meow, I tell my human purr for no reason but to chase after</p>
  </GridWrapper>
)