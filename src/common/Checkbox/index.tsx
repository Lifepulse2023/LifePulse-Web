import { ChangeEventHandler } from 'react';
import AppStyle from './style.module.scss';

interface CheckboxAttribute {
    checked?: boolean;
    onChange?: ChangeEventHandler | undefined;
}

export default function AppCheckbox (props: CheckboxAttribute) {
  return (
    <label className={AppStyle.container}>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      <span className={AppStyle.checkmark}></span>
    </label>
  );
};
