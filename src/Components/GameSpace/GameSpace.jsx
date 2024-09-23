import React, { useState, useEffect } from "react";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import "./GameSpace.css";
import GameBtn from "../GameBtn/GameBtn";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/scoreSlice";

const gameBtn = [
  {
    id: 1,
    img: rock,
    color: "red",
  },
  {
    id: 2,
    img: paper,
    color: "blue",
  },
  {
    id: 3,
    img: scissors,
    color: "yellow",
  },
];

function GameSpace() {
  const [selectChoose, setSelectChosse] = useState(false);
  const [numSelect, setNumSelect] = useState(0);
  const [choose, setChoose] = useState({});
  const [pcChoose, setPcChoose] = useState({});
  const [result, setResult] = useState("");
  const dispatch = useDispatch();

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a Tie!";
    } else if (
      (player === 1 && computer === 3) || // حجرة تهزم مقص
      (player === 2 && computer === 1) || // ورقة تهزم حجرة
      (player === 3 && computer === 2) // مقص يهزم ورقة
    ) {
      dispatch(increment());
      return "You win!";
    } else {
      dispatch(decrement());
      return "PC wins!";
    }
  };

  const toggleSelect = (id) => {
    setSelectChosse(!selectChoose);
    setNumSelect(id);
    setChoose(gameBtn.filter((item) => item.id === id));

    const randomId = Math.floor(Math.random() * 3) + 1; // اختيار بين 1 و 3
    setPcChoose(gameBtn.filter((item) => item.id === randomId)[0]);

    // تحديد الفائز
    const winner = determineWinner(id, randomId);
    setResult(winner);
  };

  return (
    <div>
      {!selectChoose ? (
        <div className="gameSpace">
          {gameBtn &&
            gameBtn.map((item) => (
              <GameBtn
                key={item.id}
                onClick={() => toggleSelect(item.id)}
                img={item.img}
                color={item.color}
              />
            ))}
        </div>
      ) : (
        <div className="scoreScreen">
          <div className="choose">
            <p>your choose</p>
            <GameBtn
              onClick={() => {}}
              img={choose[0].img}
              color={choose[0].color}
            />
          </div>
          <div className="">
            <p>{result}</p>
            <button
              style={{ backgroundColor: "#35a" }}
              onClick={() => setSelectChosse(false)}
            >
              {" "}
              play again
            </button>
          </div>
          <div className="choose">
            <p>pc choose</p>
            <GameBtn img={pcChoose.img} color={pcChoose.color} />
          </div>
        </div>
      )}
    </div>
  );
}

export default GameSpace;
