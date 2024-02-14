// custom-elements.d.ts

import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string; // Add the 'url' property to the type definition
      };
    }
  }
}
