'use client';

import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';
import React from 'react';
import { useExamples } from 'src/queries/exampleQueries';

export default function ExamplesList({ examples }: { examples: ExampleDTO[] }) {
  const { data: exampleData } = useExamples(examples);

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      {
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {exampleData?.map((example) => (
            <div>{example.name}</div>
          ))}
        </div>
      }
    </main>
  );
}
