'use client';

import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';
import React from 'react';
import { useExamples } from 'src/queries/exampleQueries';
import styled from 'styled-components';

const ExamplesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 8px;
`;

const ExampleWrapper = styled.div`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid white;
`;

export default function ExamplesList({ examples }: { examples: ExampleDTO[] }) {
  const { data: exampleData } = useExamples(examples);
  return (
    <ExamplesListWrapper>
      {
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {exampleData?.map((example) => (
            <ExampleWrapper key={example.name}>{example.name}</ExampleWrapper>
          ))}
        </div>
      }
    </ExamplesListWrapper>
  );
}
