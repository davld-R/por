import React, { useState } from 'react';
import { FaCss3Alt } from 'react-icons/fa';

const Html5Icon: React.FC = () => {
  let color = '#2a7ae4';
  let color2 = '#E44D26';

  let cambio = true;

  const [htmlIcon, setHtmlIcon] = useState(cambio);

  const clasecolor = htmlIcon ? color : color2;

  const handleClick = () => {
    setHtmlIcon(!htmlIcon);
  };

  return <FaCss3Alt size={64} color={clasecolor} onClick={handleClick} />;
};

export default Html5Icon;
