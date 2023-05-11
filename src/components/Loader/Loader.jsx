import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="80"
    width="80"
    color="#357abb73"
    wrapperStyle={{
      display: 'flex',
      marginLeft: '90px',
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  />
);
