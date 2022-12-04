import { ChangeEventHandler } from 'react';
import AppStyle from './style.module.scss';

interface Attribute {
    checked?: boolean;
    onChange?: ChangeEventHandler | undefined; 
}

export default function AppToggleButton(props: Attribute) {
  return (
    <label className={AppStyle.switch}>
      <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
      <span className={`${AppStyle.slider} ${AppStyle.round}`}></span>
    </label>
  );
}
