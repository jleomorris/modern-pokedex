import React, { useEffect, useState } from 'react';

const DynamicSprite = ({
  id,
  type,
  name,
  mouseEnterHandler,
  mouseLeaveHandler,
  customClass,
}) => {
  const [source, setSource] = useState(null);

  useEffect(async () => {
    // debugger;
    console.log('DynamicSprite.name', name);
    let sourceImport;
    if (type === 'black and white animated') {
      sourceImport = await import(`../img/sprite_animations/${id}.gif`);
    } else if (type === 'shiny') {
      sourceImport = await import(`../img/sprites/shiny/${id}.png`);
    } else if (type === 'shiny animated') {
      sourceImport = await import(`../img/sprite_animations/shiny/${id}.gif`);
    } else if (type === '3d') {
      sourceImport = await import(`../img/sprite_animations/3D/${name}.gif`);
    } else if (type === 'official') {
      sourceImport = await import(`../img/sprites/official/${id}.png`);
    } else if (type === 'default') {
      sourceImport = await import(`../img/sprites/default/${id}.png`);
    } else if (type === 'dream world') {
      sourceImport = await import(`../img/sprites/dream_world/${id}.svg`);
    }

    setSource(sourceImport.default);
  });

  return (
    source && (
      <img
        className={`${
          type === 'black and white animated' ? 'default-sprite-animation' : ''
        } ${type === 'shiny' ? 'pokemon-card-image-shiny' : ''} ${
          type === 'shiny animated' ? 'shiny-sprite-animation' : ''
        } ${type === '3d' ? 'sprite-animation-3d' : ''} ${
          type === 'official' ? 'pokemon-card-image-official' : ''
        } ${type === 'default' ? 'pokemon-card-image-default' : ''} ${
          type === 'dream world' ? 'pokemon-card-image-dream-world' : ''
        } ${customClass}`}
        src={source}
        alt="sprite animation"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
    )
  );
};

export default DynamicSprite;
