# azeti-cc-fe

Welcome to our code challenge from azeti GmbH, specifically for Frontend development, please accomplish the challenges you feel more comfortable with

## The build

This app was create using `create-react-app`, and we select `typescript`, which aligns with our frontend stack.

### Storytime

Here in azeti, we are interested in learning every day from each other, so this test is to prove that we can learn from you.

### Our stack

Here are some dependencies that we are familiar with, of course, this is optional, you can finish this test without them.

- [Material-UI](https://material-ui.com/)
- [formik](https://formik.org/)
- [cypress](https://www.cypress.io/)

## Challenge

Using the base code and with best practices in mind, you will develop a profile page, if you want to be creative, you could build your own, if not then your goals:

- Inputs for user name and user email.
- Save button
- On save I should be able to receive a `console.log()` with my data
- Avatar
- Mobile design
- Unit test (?)
- Validations (?)

**_Note: Points marked as (?) are optional_**

## Inputs

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Docker
You can either build Docker image locally or use existing image from Docker Hub.

### Build
`docker build -t azeti-code-challenge .`

### Run
`docker run --rm -d -p 8080:80 runesia/azeti-code-challenge`


