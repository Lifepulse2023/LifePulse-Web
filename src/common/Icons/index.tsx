import { SVGAttributes } from "react";

const SVGArrowRight = (props: SVGAttributes<SVGAElement>) => {
  return (
    <>
      <svg
        width={props.width || "18"}
        height={props.height || "18"}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.68262 14.9401L11.5726 10.0501C12.1501 9.47256 12.1501 8.52756 11.5726 7.95006L6.68262 3.06006"
          stroke={props.stroke || "white"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default SVGArrowRight;
