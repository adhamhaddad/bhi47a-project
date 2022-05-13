# Store API
#
## Description
This API gets in url params: `name`, `width` and `height` then resize images depends on width & height value.
__Example:__ `http://localhost:3000/api/signup`

## Installations

##### open Terminal in Image-Processing Directory and run the following commands:
#
`yarn` or `npm install`
#
##### To run server:
`npm run start`
#### or
`yarn start`

### Available API's options
1. `api/signup`
2. `api/signin`
3. `api/home`
4. `api/contact`
5. `api/about`


### Functionality
- user can query endpoint using various params and queries to retrieve an image with a specified height and width.
- The default height and width is set to 200px.
- All images requested will be saved to thumb folder.

### Code Styles
This project uses `eslint` and `prettier`. all configurations for this project inside `package.json` file.

## Available Scripts

In the project directory, you can run:

##### `npm run dev` or `yarn dev`

Runs the app in the development mode.
Open http://localhost:3000/api/signup to view it in the browser.

The page will reload automatically if you make edits.

##### `npm run format` or `yarn format`
will format by prettier and will also see if any lint errors in the console.


##### `npm run test` or `yarn test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

##### `npm run build` or `yarn build`

Builds the app for production to the build folder.
its format typescript to javascript

##### `npm run start` or `yarn start`

Build and runs the app in the clients mode.
Open http://localhost:3000/api/signup to view it in the browser.


### Built With
- **Node.js**
- **Express.js**
- **TypeScript**
- **Jasmine**