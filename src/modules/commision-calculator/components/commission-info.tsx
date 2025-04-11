import '../styles/commission-info.css';

import InfoIcon from '../assets/info-icon.svg?react';

export const CommissionInfo = () => {
  return (
    <div className="commission-info">
      <InfoIcon width={20} height={20} />
      <div className="commission-info__content">
        <p className="commission-info__title">Текущая комиссия</p>
        <div className="commission-info__text">
          <p>На данный момент у нас с вами следующие договорённости по комиссиям за продажу билетов:</p>
          <ul>
            <li>4,9% + 49 ₽ при цене билета от 0 до 5000 ₽</li>
            <li>4,9% + 149 ₽ при цене билета от 5001 до 10000 ₽</li>
          </ul>
          <p>Комиссия взимается от полной стоимости билета, которую видит зритель.</p>
        </div>
      </div>
    </div>
  );
};
