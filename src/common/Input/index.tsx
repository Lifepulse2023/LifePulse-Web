import Image from "next/image";
import { ChangeEventHandler, MouseEventHandler } from "react";
import AppStyle from "./style.module.scss";

interface Attribute {
  type: string & {};
  onClick?: MouseEventHandler | undefined;
  onChange?: ChangeEventHandler | undefined;
  placeholder?: string & {};
  prefixIconUrl?: string;
  suffixIconUrl?: string;
  label?: string;
}

export default function AppInput(props: Attribute) {
  return (
    <div>
      {props.label ? <label className={AppStyle.labelWrapper}>{props.label}</label> : null }
      <div className={AppStyle.appWrapperInput}>
        {props.prefixIconUrl ? (
          <Image
            src={props.prefixIconUrl}
            alt="Email"
            width={20}
            height={20}
            className={AppStyle.appImage}
          />
        ) : null}
        <input
          className={AppStyle.appInput}
          type={props.type}
          onClick={props.onClick}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        {props.suffixIconUrl ? (
          <Image
            src={props.prefixIconUrl}
            alt="Email"
            width={20}
            height={20}
            className={AppStyle.appImage}
          />
        ) : null}
      </div>
    </div>
  );
}
