import React from "react";
import logo from "../assets/image/logo.svg";
import { Button } from "antd";
import { useRecoilState } from "recoil";
import countState from "../store/atoms/exampleAtom";
import { useTranslation } from "react-i18next";
interface Props {}
export const Home = (props: Props) => {
  const [count, setCount] = useRecoilState(countState);
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("hello_world")}</p>
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
