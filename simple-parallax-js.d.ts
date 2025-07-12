declare module 'simple-parallax-js' {
  interface SimpleParallaxOptions {
    orientation?: 'up' | 'down' | 'left' | 'right' | 'up left' | 'up right' | 'down left' | 'down right' | 'left right' | 'right left' | 'up down' | 'down up';
    scale?: number;
    overflow?: boolean;
    delay?: number;
    transition?: string;
    maxTransition?: number;
    customContainer?: string | Element;
    customWrapper?: string;
    breakpoint?: number;
  }

  class SimpleParallax {
    constructor(elements: Element | Element[] | NodeList | string, options?: SimpleParallaxOptions);
    destroy(): void;
    update(): void;
  }

  export = SimpleParallax;
}
