import { Button } from "web3uikit";
import "./Coin.css";
import React, { useEffect, useState } from "react";

function Coin({ perc, setPerc, token }) {
  const [color, setColor] = useState();

  useEffect(() => {
    if (perc < 50) {
      setColor("#c43d08");
    } else {
      setColor("green");
    }
  });

  return (
    <>
      <div>
        <div className="token">{token}</div>
        <div className="circle" style={{ boxShadow: `0 0 20px ${color}` }}>
          <div
            className="wave"
            style={{
              marginTop: `${100 - perc}%`,
              boxShadow: `0 0 20px ${color}`,
              backgroundColor: color,
            }}
          ></div>
          <div className="percentage">{perc}%</div>
        </div>
        <div className="votes">
          <Button
            onClick={() => {
              setPerc(perc + 1);
            }}
            text="Vote"
            theme="primary"
            type="button"
          />
        </div>
      </div>
    </>
  );
}

export { Coin };