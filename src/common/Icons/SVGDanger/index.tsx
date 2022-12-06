import { SVGAttributes } from "react";

export default (props: SVGAttributes<SVGAElement>) => {
  return (
    <>
      <svg
        width={props.width || "16"}
        height={props.height || "16"}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6V9.33333"
          stroke={props.stroke || "#E02020"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.00028 14.2733H3.96028C1.64695 14.2733 0.680281 12.6199 1.80028 10.5999L3.88028 6.85327L5.84028 3.33327C7.02695 1.19327 8.97361 1.19327 10.1603 3.33327L12.1203 6.85994L14.2003 10.6066C15.3203 12.6266 14.3469 14.2799 12.0403 14.2799H8.00028V14.2733Z"
          stroke={props.stroke || "#E02020"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99609 11.3333H8.00208"
          stroke={props.stroke || "#E02020"}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
