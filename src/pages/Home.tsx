import React from "react";
import logo from "../logo.svg";
import { Button } from "antd";
import { useRecoilState } from "recoil";
import countState from "../store/atoms/exampleAtom";
interface Props {}
export const Home = (props: Props) => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{count}</p>
        <Button
          onClick={() => {
            setCount((prevState) => {
              return ++prevState;
            });
          }}
          type="primary"
        >
          Primary Button
        </Button>
      </header>
    </div>
  );
};
