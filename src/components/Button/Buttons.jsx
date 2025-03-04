import { useState } from "react";
import { addBoy, addGirl } from "../../store/genderSlice";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const boyOrGirl = (selected) => {
    if (selected == "boy") {
      dispatch(addBoy());
    }
    if (selected == "girl") {
      dispatch(addGirl());
    }
  };

  return (
    <div className="container">
      <img className="baby_icon" src="./baby.svg" alt="baby_icon" />
      <button className="boy" onClick={() => setSelected("boy")}>
        👦🏼 Хлопчик
      </button>
      <button className="girl" onClick={() => setSelected("girl")}>
        👧🏼 Дівчинка
      </button>
      <hr className="hr" />
      <button className="confirm" onClick={() => boyOrGirl(selected)}>
        ✅ Підтвердити
      </button>
    </div>
  );
};

export default Buttons;
