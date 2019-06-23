import React from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

const Title = styled.h1`
  color: white;
  font-size: 4rem;
`
const TextField = styled.textarea`
  border-radius : 8px;
  outline : none;
  padding : 0.8rem 1rem;
  font-size : 1rem;
  margin : 15px;
`

const Select = styled.select`

`

const Section = styled.section`
  margin: 1rem 0;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Stand up</Title>
        <p>
          Select your team to start today's Standup.
        </p>
        <Section>
          <Select name="team">
            <option value="1">Bits</option>
            <option value="2">Bytes</option>
            <option value="3">Words</option>
          </Select>
        </Section>
        <Section>
          <TextField name="today" rows='10' cols='50' />
          <TextField name="today" rows='10' cols='50' />
        </Section>
          <Button variant="primary" size="lg">Submit</Button>
      </header>
    </div>
  );
}

export default App;
