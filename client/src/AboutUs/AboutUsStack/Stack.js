// Original: https://tympanus.net/codrops/2017/03/15/stack-motion-hover-effects/
import React, { useState } from 'react';
import { useSpring, useSprings, animated, to } from 'react-spring';
import '../Styles.scss';

function Stack({ image, background, scaleFrom, scaleTo }) {
  const [open, setOpen] = useState(false);
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
  const cards = useSprings(
    5,
    [0, 1, 2, 3, 4].map((i) => ({
      opacity: 0.2 + i / 5,
      z: open ? (i / 5) * 80 : 0,
    }))
  );
  return (
    <div
      className='stackContainer'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          key={index}
          style={{
            opacity,
            background: 'none',
            transform: to(
              [z, f.to([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            ),
          }}
        >
          {index === 4 && (
            <animated.img
              style={{
                transform: f.to([0, 1], [scaleTo, scaleFrom]),
              }}
              src={image}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
}

export default Stack;
