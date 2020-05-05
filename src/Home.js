import React from 'react';
import styled from 'styled-components';


const GridWrapper = styled.div`
  grid-gap: 10px;
  margin-top: 5em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


export const Home = (props) => (
  <GridWrapper>
        <h2>Home Page</h2>
        <p>This is a paragraph and I am writing on the home page
        This is another paragraph, hi hey hello whatsup yo
        </p>

  </GridWrapper>
)