'use client';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useCreateExample } from 'src/queries/exampleQueries';
import styled from 'styled-components';

const CreateExampleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  button {
    padding: 8px;
  }
`;

const CreateExample: React.FC = () => {
  const [exampleDataName, setExampleDataName] = useState('');

  const queryClient = useQueryClient();
  const { mutateAsync: createExample } = useCreateExample(queryClient);

  const onCreateExample = async (name: string) => {
    if (name) {
      createExample({ name });
    }
  };

  return (
    <CreateExampleWrapper>
      <input
        placeholder="Input name for new example data"
        type="text"
        value={exampleDataName}
        onChange={(e) => setExampleDataName(e.target.value)}
      />
      <button
        disabled={exampleDataName === ''}
        onClick={() => onCreateExample(exampleDataName)}
      >
        Create New Example
      </button>
    </CreateExampleWrapper>
  );
};
export default CreateExample;
