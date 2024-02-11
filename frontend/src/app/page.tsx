import { getExamples } from 'src/services/exampleService';
import ExamplesList from './example-domain/ExamplesList';
import CreateExample from './example-domain/CreateExample';
import styles from './page.module.css';

export default async function Home() {
  const examples = await getExamples();
  return (
    <main className={styles.pagewrapper}>
      <h1>Example NextJS Application</h1>
      <CreateExample />
      <ExamplesList examples={examples}></ExamplesList>
    </main>
  );
}
