import type { SVGProps } from "react";

const paths = (
  <>
    <path
      d="M69.5151 64.3738L53.465 34.7738C48.7229 26.0393 43.9808 19.1246 38.0228 17.4262H51.0331V15H21V17.0623C28.2955 18.1541 34.983 21.6721 40.4547 31.8623L64.773 76.8689H67.2048L89.9425 34.6525L87.1458 33.0754L69.5151 64.3738Z"
      fill="#253A5E"
    />
    <path
      d="M105.993 32.9541C105.993 19.1246 103.439 15 94.6845 15H83.2549V17.0623C94.5629 18.1541 95.4141 19.1246 95.4141 31.8623V71.0459C95.4141 79.9016 98.2107 84.6328 104.777 86.5738H83.2549V89H118.152V86.9377C106.844 85.8459 105.993 84.8754 105.993 72.1377V32.9541Z"
      fill="#253A5E"
    />
    <path
      d="M36.5637 45.9344H33.4023L32.916 74.6852C32.7944 84.5115 31.8217 85.482 21 86.9377V89H48.9661V86.9377C38.1444 85.482 37.1717 84.5115 37.0501 74.6852L36.5637 45.9344Z"
      fill="#253A5E"
    />
    <path
      d="M109.189 19.8525C108.459 17.7902 107.243 15.9705 105.419 15L107.655 15.0037L107.649 15H112.269C145.099 15 162 27.2525 162 52.3639C162 74.0787 146.193 89 124.307 89V86.5738C140.965 85.482 150.084 72.9869 150.084 52.3639C150.084 29.9811 140.351 19.558 118.439 17.9982C117.573 17.9366 111.434 17.8757 109.189 19.8525Z"
      fill="#253A5E"
    />
  </>
);

type BrandMonogramProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * Inline monogram mark — avoids stale cached /logo.svg and replaces any legacy MD placeholder.
 */
const BrandMonogram = ({ title, className, ...rest }: BrandMonogramProps) => (
  <svg
    viewBox="0 0 183 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={title ? undefined : true}
    role={title ? "img" : undefined}
    {...rest}
  >
    {title ? <title>{title}</title> : null}
    {paths}
  </svg>
);

export default BrandMonogram;
