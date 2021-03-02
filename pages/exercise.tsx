import PageTemplate from '../app/components/organisms/pageTemplate';
import { contents } from '../styles/Index.module.css';

export default function Exercise() {
  return (
    <PageTemplate>
      <div className={contents}>問題</div>
    </PageTemplate>
  );
}
