import { ProjectBuilder } from '../classes/ProjectBuilder.class';

export const PACKAGE = (packageName: string) => `{
  "name": "${ProjectBuilder.createName(packageName)}",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --config webpack/webpack.config.js --open --mode development ",
    "build": "webpack --config webpack/webpack.config.js --mode production",
    "build-dev": "webpack --config webpack/webpack.config.js --mode development"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "16.5.2",
    "react-dom": "16.5.2",
    "react-router-dom": "4.3.1",
    "rxjs": "6.3.3"
  },
  "devDependencies": {
    "@types/react": "^16.4.15",
    "@types/react-dom": "^16.0.8",
    "@types/react-router-dom": "^4.3.1",
    "base-href-webpack-plugin": "^2.0.0",
    "copy-webpack-plugin": "^4.5.2",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^5.2.1",
    "tslint": "^5.11.0",
    "tslint-loader": "^3.6.0",
    "typescript": "^3.1.1",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.9"
  }
}
`;