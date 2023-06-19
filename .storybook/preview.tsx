import type { Preview } from "@storybook/react";
import React from "react";
import "minireset.css";
import "../src/styles/tokens.css";
import "../src/styles/index.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px" 
} as const;

  export const decorators = [
    (Story) => (
      <div style={styles}>
        <Story />
      </div>
    ),
  ];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
