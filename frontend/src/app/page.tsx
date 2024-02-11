import { getExamples } from 'src/services/exampleService';
import ExamplesList from './initial-data/ExamplesList';
import styles from './page.module.css';

export default async function Home() {
  const examples = await getExamples();
  return (
    <main className={styles.main}>
      <h1>Example NextJS Application</h1>
      <ExamplesList examples={examples}></ExamplesList>
    </main>
  );
}
