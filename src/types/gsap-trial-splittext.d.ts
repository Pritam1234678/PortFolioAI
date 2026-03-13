declare module "gsap-trial/SplitText" {
  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    [key: string]: unknown;
  }

  export class SplitText {
    constructor(
      target: string | Element | Element[] | string[],
      vars?: SplitTextVars
    );

    chars: Element[];
    words: Element[];
    lines: Element[];

    revert(): void;
  }
}
