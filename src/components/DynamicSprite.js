import React, { useEffect, useState } from 'react';

const DynamicSprite = ({ id, type, name }) => {
  const [source, setSource] = useState(null);

  useEffect(async () => {
    // debugger;
    console.log('DynamicSprite.name', name);
    let sourceImport;
    if (type === 'black and white') {
      sourceImport = await import(`../img/sprite_animations/${id}.gif`);
    } else if (type === 'shiny') {
      sourceImport = await import(`../img/sprite_animations/shiny/${id}.gif`);
    } else if (type === '3d') {
      sourceImport = await import(`../img/sprite_animations/3D/${name}.gif`);
    }
    setSource(sourceImport.default);
  });

  return (
    source && (
      <img
        className={`${
          type === 'black and white' ? 'default-sprite-animation' : ''
        } ${type === 'shiny' ? 'shiny-sprite-animation' : ''} ${
          type === '3d' ? 'sprite-animation-3d' : ''
        }`}
        src={source}
        alt="sprite animation"
      />
    )
  );
};

export default DynamicSprite;