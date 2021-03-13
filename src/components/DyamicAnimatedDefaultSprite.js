import React, { useEffect, useState } from 'react';

const DynamicDefaultSprite = ({ name }) => {
  const [source, setSource] = useState(null);

  useEffect(async () => {
    const sourceImport = await import(
      `../img/sprite_animations/default/${name}.gif`
    );

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

export default DynamicDefaultSprite;
