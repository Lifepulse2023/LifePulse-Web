import { ChangeEventHandler, MouseEventHandler } from "react";
import Image from "next/image";
import AppLoader from "../Loader";
import AppStyle from "./style.module.scss";

interface Attribute {
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  onClick?: MouseEventHandler | undefined;
  isLoading?: boolean;
  prefixIconUrl?: string;
  suffixIconUrl?: string;
}

export default function AppButton(props: Attribute) {
  let element = <span>{props.label}</span>;
  if (props.isLoading) {
    element = <AppLoader />;
  } else {
    if (props.prefixIconUrl) {
      element = (
        <>
          <Image
            src={props.prefixIconUrl}
            alt="icon"
            width={18}
            height={18}
            className={AppStyle.appImage}
          />
          <span>{props.label}</span>
        </>
      );
    }

    if (props.suffixIconUrl) {
      element = (
        <>
          <span>{props.label}</span>
          <Image
            src={props.suffixIconUrl}
            alt="icon"
            width={18}
            height={18}
            className={AppStyle.appImage}
          />
        </>
      );
    }
  }

  return (
    <>
      <button
        className={AppStyle.appBtn}
        type={props.type}
        onClick={props.onClick}
      >
        {element}
      </button>
    </>
  );
}
