import type { Preview } from "@storybook/react";
import "../src/styles/index.css";
import "../src/styles/App.css";
import "../src/styles/Input.css";
import "../src/styles/Modal.css";
import "../src/styles/ChatModal.css";
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
