import { useSelector, useDispatch } from "react-redux";

const Result = () => {
  const store = useSelector((state) => state.gender);
  const totalScore = store.boy + store.girl;

  const finalResult = () => {
    const score = `Хлопчик: ${store.boy}  |  Дівчинка: ${store.girl}`;
    if (store.boy > store.girl) {
      return (
        <>
          <h1 className="headIcon2">🎊</h1>
          <h1>Переміг</h1>
          <h1 className="headIcon">👦🏼</h1>
          <h1>Хлопчик!</h1>
          <hr className="hr" />
          <h2>{score}</h2>
          <h2>Голосів {totalScore}</h2>
        </>
      );
    }
    if (store.boy < store.girl) {
      return (
        <>
          <h1 className="headIcon2">🎊</h1>
          <h1>Перемогла</h1>
          <h1 className="headIcon">👧🏼</h1>
          <h1>Дівчинка!</h1>
          <hr className="hr" />
          <h2>{score}</h2>
          <h2>Голосів {totalScore}</h2>
        </>
      );
    } else {
      return (
        <>
          <h1 className="headIcon2">🎊</h1>
          <h1 className="headIcon">👦🏼👧🏼</h1>
          <h1>Нічия!</h1>
          <hr className="hr" />
          <h2>{score}</h2>
          <h2>Голосів {totalScore}</h2>
        </>
      );
    }
  };

  return <div className="final_result">{finalResult()}</div>;
};

export default Result;
