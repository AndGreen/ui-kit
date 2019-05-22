import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import svg from "rollup-plugin-svg";
import { terser } from "rollup-plugin-terser"; // minificator

const globals = {
  "styled-components": "styled-components",
  uuid: "uuid",
  "prop-types": "PropTypes",
  "react-dom": "ReactDOM",
  react: "React"
};

const external = Object.keys(globals);

export default {
  input: "./src/index.js",
  output: {
    file: "index.js",
    name: "bundle",
    format: "cjs",
    globals,
  },
  plugins: [babel(), resolve(), svg(), terser()],
  external: [...external]
};
