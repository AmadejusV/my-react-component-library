install react and typescript:
 npm install react typescript @types/react --save-dev

export the components to the top level

add typescript config: 
 npx tsc --init

use rollup for bundling since it's particularly good for bundling libraries:
 npm i rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts --save-dev

create rollup.config.js in root and configure it and package.json


