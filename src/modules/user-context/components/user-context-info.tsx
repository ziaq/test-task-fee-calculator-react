import '../styles/user-context-info.css';

import { useUserContext } from '@/modules/user-context';

export const UserContextInfo = () => {
  const { userId, setUserId } = useUserContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserId(value === '' ? null : Number(value));
  };

  return (
    <div className="user-context-info">
      <h1 className="user-context-info__title">Калькулятор комиссии</h1>
      <p className="user-context-info__subtitle">
        Узнайте, сколько вы заработаете после вычета комиссии сервиса
      </p>

      <div className="user-context-info__input-wrapper">
        <label htmlFor="userId" className="user-context-info__label">
          Введи ID пользователя (для рассчета специальной комиссии):
        </label>
        <input
          id="userId"
          type="number"
          min="0"
          placeholder="null"
          value={userId ?? ''}
          onChange={handleChange}
          className="user-context-info__input"
        />
      </div>
    </div>
  );
};
