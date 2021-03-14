import React, { useEffect, useState } from 'react';

const DynamicSprite = ({ id, type }) => {
  const [source, setSource] = useState(null);

  useEffect(async () => {
    let sourceImport;
    if (type === 'black and white') {
      sourceImport = await import(`../img/sprite_animations/${id}.gif`);
    } else if (type === 'shiny') {
      sourceImport = await import(`../img/sprite_animations/shiny/${id}.gif`);
    }
    setSource(sourceImport.default);
  });

  return (
    source && (
      <img
        className="default-sprite-animation"
        src={source}
        alt="sprite animation"
      />
    )
  );
};

export default DynamicSprite;
