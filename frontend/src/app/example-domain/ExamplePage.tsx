'use client';
import React from 'react';
import styled from 'styled-components';
import CreateExample from './CreateExample';
import ExamplesList from './ExamplesList';
import { getExamples } from 'src/services/exampleService';

const ExamplePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 16px;
  gap: 8px;
`;

const ExamplePage: React.FC = async () => {
  const examples = await getExamples();
  return (
    <ExamplePageWrapper>
      <CreateExample />
      <ExamplesList examples={examples}></ExamplesList>
    </ExamplePageWrapper>
  );
};
export default ExamplePage;
