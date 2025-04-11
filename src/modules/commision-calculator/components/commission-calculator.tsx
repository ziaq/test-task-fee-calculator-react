import '../styles/commission-calculator.css'

import { CommissionForm } from './commission-form'
import { CommissionInfo } from './commission-info'

export const CommissionCalculator = () => {
  return (
    <div className='commission-calculator'>
      <CommissionInfo />
      <CommissionForm />
    </div>
  )
};
