import { FC, useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { logMain } from 'src/modules/logger/logger';
import Styled from 'src/components/vfx/ParticlesOverlay.styles';

interface Sizes {
  min: number;
  max: number;
}

interface ParticlesOverlayProps {
  id: string;
  color: 'green' | 'red' | 'purple' | 'black';
  number?: number;
  sizes?: Sizes;
  particleColor?: string;
  shadowColor?: string;
  enableShadow?: boolean;
  style?: React.CSSProperties;
}

const ParticlesOverlay: FC<ParticlesOverlayProps> = ({
  id,
  color,
  number = 50,
  sizes = { min: 1, max: 5 },
  particleColor = '#ccff00',
  shadowColor = '#00ff00',
  enableShadow = false,
  style = {},
}) => {
  const presetColors = ['green', 'red', 'purple', 'black'];

  const particlesInit = useCallback(async (engine: Engine) => {
    logMain.debug(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await logMain.debug(container);
  }, []);

  return (
    <Styled.Root id={`tsparticles_${id}`} style={style}>
      <Particles
        id={`tsparticles_${id}`}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                // mode: 'push',
              },
              onHover: {
                enable: false,
                // mode: 'repulse',
              },
              resize: true,
            },
            // modes: {
            //   push: {
            //     quantity: 4,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 0.4,
            //   },
            // },
          },
          particles: {
            color: {
              value: particleColor,
            },
            // links: {
            //   color: '#ffffff',
            //   distance: 150,
            //   enable: true,
            //   opacity: 0.5,
            //   width: 1,
            // },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'out',
              random: false,
              speed: 0.7,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: number,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.3,
                sync: true,
                startValue: 'random',
                // count: 1,
                destroy: 'none',
              },
              value: {
                min: 0,
                max: 0.8,
              },
            },
            shape: {
              type: presetColors.indexOf(color) === -1 ? 'circle' : 'image',
              image: {
                src: `/assets/particle_${color}.webp`,
                width: 15,
                height: 15,
                replaceColor: false,
              },
            },
            size: {
              value: sizes,
            },
            shadow: {
              blur: 10,
              color: shadowColor,
              enable: enableShadow,
              offset: {
                x: 0,
                y: 0,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </Styled.Root>
  );
};

export default ParticlesOverlay;
