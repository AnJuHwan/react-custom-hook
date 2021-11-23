import { useCounter } from '../hooks/use-conter.js';

import Card from './Card.jsx';

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
