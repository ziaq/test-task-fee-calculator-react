import './home-page.css';

import { CommissionCalculator } from '@/modules/commision-calculator';

import { UserContextInfo } from '../../modules/user-context';

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