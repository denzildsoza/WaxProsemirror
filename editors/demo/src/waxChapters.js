import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { dummy1 } from './Editoria/dummy1';
import { dummy2 } from './Editoria/dummy2';
import { dummy3 } from './Editoria/dummy3';
import { dummy4 } from './Editoria/dummy4';
import { dummy5 } from './Editoria/dummy5';
import Editoria from './Editoria/Editoria';

const mainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const WaxChapters = () => {
  const [project, setProject] = useState(null);
  const chapters = [
    {
      title: 'CHAPTER 1',
      value: dummy1,
    },
    {
      title: 'CHAPTER 2',
      value: dummy2,
    },
    {
      title: 'CHAPTER 3',
      value: dummy3,
    },
    {
      title: 'CHAPTER 4',
      value: dummy4,
    },
    {
      title: 'CHAPTER 5',
      value: dummy5,
    },
  ];

  const handleClick = value => {
    setProject(value);
    console.log(value);
  };

  const WaxChapters = () => {
    return (
      <mainContainer>
        <div>
          <h1
            style={{
              textAlign: 'center',
              padding: '10px',
              borderBottom: '1px solid black',
            }}
          >
            Chapters
          </h1>
        </div>

        <div>
          {chapters.map((value, index) => (
            <h3
              style={{ cursor: 'pointer', paddingLeft: '35%' }}
              onClick={() => handleClick(value.value)}
            >
              {value.title}
              .....................................................................
              <span style={{ color: 'blue', fontSize: '14px' }}>Edit</span>
            </h3>
          ))}
        </div>
      </mainContainer>
    );
  };

  const DisplayProject = () => {
    if (project) {
      return (
        <>
          <button onClick={() => setProject(null)}>back</button>
          <Editoria value={project} />
        </>
      );
    } else {
      return <WaxChapters />;
    }
  };

  return <>{DisplayProject()}</>;
};
export default WaxChapters;
