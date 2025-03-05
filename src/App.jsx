import { useState, lazy, Suspense } from "react";
import Buttons from "./components/Button/Buttons";
import { DNA } from "react-loader-spinner";
import "./App.css";

const LazyResult = lazy(() => import("./components/Button/Result"));

function App() {
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowResult = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(true);
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      {loading ? (
        <div className="dna">
          <h2>⏳ Завантаження результатів...</h2>
          <DNA
            visible={true}
            height="350"
            width="350"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : !result ? (
        <>
          <Buttons />
          <div className="result_container">
            <button className="result" onClick={handleShowResult}>
              Результат
            </button>
          </div>
        </>
      ) : (
        <Suspense>
          <LazyResult />
        </Suspense>
      )}
    </>
  );
}

export default App;
