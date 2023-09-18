import React from "react";

interface ThunderIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ThunderIcon: React.FC<ThunderIconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23.5" fill="#FFF9EB" stroke={color} />
      <g clip-path="url(#clip0_4320_4950)">
        <path
          d="M31.9023 21.2969L21.938 34.7969C21.8915 34.8599 21.8309 34.911 21.761 34.9463C21.6911 34.9816 21.6139 35 21.5356 35C21.4697 35.0002 21.4045 34.9871 21.3437 34.9614C21.2404 34.9187 21.1545 34.8424 21.0997 34.7449C21.0449 34.6474 21.0244 34.5344 21.0415 34.4238L22.417 25.5H16.5C16.4075 25.5 16.3168 25.4743 16.238 25.4258C16.1592 25.3774 16.0954 25.308 16.0537 25.2254C16.012 25.1428 15.994 25.0502 16.0018 24.958C16.0095 24.8658 16.0427 24.7776 16.0976 24.7031L26.062 11.2031C26.1284 11.1132 26.223 11.0481 26.3308 11.0182C26.4385 10.9883 26.5532 10.9954 26.6564 11.0384C26.7596 11.0813 26.8455 11.1576 26.9003 11.2551C26.955 11.3526 26.9755 11.4656 26.9585 11.5761L25.583 20.5H31.5C31.5925 20.5 31.6832 20.5257 31.7621 20.5741C31.8409 20.6226 31.9047 20.692 31.9464 20.7746C31.9881 20.8572 32.006 20.9498 31.9983 21.042C31.9905 21.1342 31.9573 21.2224 31.9023 21.2969Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4320_4950">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ThunderIcon;
