import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import WaxChapters from './waxChapters';
import Editoria from './Editoria/Editoria';
import HHMI from './HHMI/HHMI';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-y: hidden;
    padding: 0;
  }

  #root {
    height:100vh;
    width:100vw;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const ChooseProject = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  span {
    margin-right: 20px;
  }
`;

const Projects = styled.div`
  margin-left: 10px;
`;

const ProjectButton = styled.button`
  cursor: pointer;
  margin-right: 20px;
`;

const Editors = () => {
  const [project, setProject] = useState('editoria');

  const displayProject = () => {
    switch (project) {
      case 'hhmi':
        return <HHMI />;
      case 'ncbi':
        break;
      default:
        return <WaxChapters />;
    }
  };

  return <>{displayProject()}</>;
};

export default Editors;
