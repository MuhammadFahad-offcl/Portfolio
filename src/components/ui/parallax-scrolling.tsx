'use client';

/**
 * Layered parallax header: a stack of full-bleed image layers and a title that drift down at different speeds
 * as the section scrolls away, so the scene comes apart in depth. Based on Osmo's layered parallax resource
 * (https://www.osmo.supply/).
 *
 * Dependencies: gsap (+ ScrollTrigger). Smooth scrolling is optional: if the page runs Lenis, pass its
 * instance (or a getter) as `lenis` so ScrollTrigger updates on every smoothed frame.
 *
 * Layers are painted back to front. The title sits between the last two image layers by default
 * (`titleLayer`), so the foreground stands in front of it.
 */

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface ParallaxLayer {
  /** Image source (the largest version) */
  src: string;
  /** Optional responsive sources, e.g. "/a-1000.webp 1000w, /a-2000.webp 2000w" */
  srcSet?: string;
  /** How far the layer travels down while the header scrolls away, in % of its height */
  yPercent: number;
}

interface LenisLike {
  on: (event: 'scroll', callback: () => void) => unknown;
  off?: (event: 'scroll', callback: () => void) => unknown;
}

export interface ParallaxProps {
  /** Image layers, back to front. Default: the original mountain scene */
  layers?: ParallaxLayer[];
  /** Big title placed inside the scene. Default: "Parallax" */
  title?: ReactNode;
  /** How far the title travels, in % (between the layers behind and in front of it). Default: 40 */
  titleYPercent?: number;
  /** Index in `layers` the title is placed before. Default: the last layer (the foreground) */
  titleLayer?: number;
  /** Content of the section under the scene. Default: the Osmo mark */
  children?: ReactNode;
  /** The page's Lenis smooth scroll, if any */
  lenis?: LenisLike | null;
  /** Extra classes for the wrapper */
  className?: string;
  /** id of the wrapper, for in-page links */
  id?: string;
}

const DEFAULT_LAYERS: ParallaxLayer[] = [
  {
    src: 'https://cdn.21st.dev/assets/mirror/a4/a43f4eae3459c461345ee676f12d6e1ddca65e8a5279a5af00d475b17ff83aea.webp',
    yPercent: 70,
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/50/50ca6a0d36d2780bfcb469d6db7eaec0be7e0d2961ba69a63d2a1473b040338d.webp',
    yPercent: 55,
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/e1/e1c8137b5f971c3b3ec1a0f9e79b9c17018767005f844a10082b890472afecfb.webp',
    yPercent: 10,
  },
];

const OsmoMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 160 160" fill="none" className="parallax__mark" aria-hidden>
    <path
      d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z"
      fill="currentColor"
    />
  </svg>
);

export function ParallaxComponent({
  layers = DEFAULT_LAYERS,
  title = 'Parallax',
  titleYPercent = 40,
  titleLayer,
  children,
  lenis,
  className,
  id,
}: ParallaxProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const titleAt = titleLayer ?? Math.max(layers.length - 1, 0);

  useEffect(() => {
    const root = parallaxRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    // Reduced motion: the scene simply stays still
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // A context scopes every tween and trigger made here, so cleanup removes only this component's
    // (not every ScrollTrigger on the page)
    const ctx = gsap.context(() => {
      const trigger = root.querySelector('[data-parallax-layers]');
      if (!trigger) return;

      const tl = gsap.timeline({
        scrollTrigger: { trigger, start: '0% 0%', end: '100% 0%', scrub: 0 },
      });

      trigger.querySelectorAll<HTMLElement>('[data-parallax-layer]').forEach((element, index) => {
        tl.to(
          element,
          { yPercent: Number(element.dataset.parallaxY ?? 0), ease: 'none', force3D: true },
          index === 0 ? undefined : '<',
        );
      });
    }, root);

    // Keeps ScrollTrigger in step with the smoothed scroll position
    const update = () => ScrollTrigger.update();
    lenis?.on('scroll', update);

    // Images change the page's height as they load further down; re-measure once everything is in
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      lenis?.off?.('scroll', update);
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [lenis, layers]);

  const items: ReactNode[] = [];

  layers.forEach((layer, index) => {
    if (index === titleAt) {
      items.push(
        <div key="title" data-parallax-layer data-parallax-y={titleYPercent} className="parallax__layer-title">
          <h2 className="parallax__title">{title}</h2>
        </div>,
      );
    }

    items.push(
      <img
        key={layer.src}
        src={layer.src}
        srcSet={layer.srcSet}
        sizes="100vw"
        loading="lazy"
        decoding="async"
        width={2000}
        height={1906}
        alt=""
        data-parallax-layer
        data-parallax-y={layer.yPercent}
        className="parallax__layer-img"
      />,
    );
  });

  return (
    <div id={id} className={['parallax', className].filter(Boolean).join(' ')} ref={parallaxRef}>
      <section className="parallax__header" aria-label={typeof title === 'string' ? title : undefined}>
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />
          <div data-parallax-layers className="parallax__layers">
            {items}
          </div>
          <div className="parallax__fade" />
        </div>
      </section>
      <section className="parallax__content">{children ?? <OsmoMark />}</section>
    </div>
  );
}

export default ParallaxComponent;
