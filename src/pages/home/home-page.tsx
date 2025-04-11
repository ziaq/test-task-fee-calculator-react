import { UserContextInfo } from '../../modules/user-context';
import './home-page.css';

import { CommissionCalculator } from '@/modules/commision-calculator';

const HomePage = () => {
  return (
    <main className="home">
      <section className="home__section">
        <UserContextInfo />
        <CommissionCalculator />
      </section>
    </main>
  );
};

export default HomePage