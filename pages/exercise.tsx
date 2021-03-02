import PageTemplate from '../app/components/organisms/pageTemplate';
import styles from '../styles/Index.module.css';

export default function Exercise() {
  return (
    <PageTemplate>
      <div className={styles.contents}>問題</div>
    </PageTemplate>
  );
}
