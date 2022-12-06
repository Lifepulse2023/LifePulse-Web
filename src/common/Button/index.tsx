import { ChangeEventHandler, MouseEventHandler } from "react";
import Image from "next/image";
import AppLoader from "../Loader";
import AppStyle from "./style.module.scss";
import SVGArrowRight from "@common/Icons";

interface Attribute {
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  onClick?: MouseEventHandler | undefined;
  isLoading?: boolean;
  prefixIconUrl?: string;
  suffixIconUrl?: string;
  disabled?: boolean;
}

export default function AppButton(props: Attribute) {
  let element = <span>{props.label}</span>;
  if (props.isLoading) {
    element = <AppLoader />;
  } else {
    if (props.prefixIconUrl) {
      element = (
        <>
          <SVGArrowRight
            width={18}
            height={18}
            stroke={props.disabled ? "#D3DAE7" : "#FFFFFF"}
          />
          <span>{props.label}</span>
        </>
      );
    }

    if (props.suffixIconUrl) {
      element = (
        <>
          <span>{props.label}</span>
          <SVGArrowRight
            width={18}
            height={18}
            stroke={props.disabled ? "#D3DAE7" : "#FFFFFF"}
          />
        </>
      );
    }
  }

  return (
    <>
      <button
        className={`${AppStyle.appBtn} ${
          props.disabled ? AppStyle.disabled : ""
        }`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {element}
      </button>
    </>
  );
}
