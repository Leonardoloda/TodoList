# TODOApp
Just a simple Vue app to handle a TODO List app to create and delete TODOs

## Project setup
  > <i>This project was configured using yarn, but you could use npm as well</i>
 
### Installing the dependencies
```
yarn install
```

### Build
To generate a build for production, you can just run
```
yarn install
```
the result will be generated in the `dist` folder

### Developing
You can run the app simply by executing
```
yarn develop
```

### Format
This app also has a formatting dependency allowing you to format the code automatically, you can do it by running
```
yarn format
```
### Testing
The app do contains unit and end to end testing, each one is detailed below

#### Unit testing
Using Vue Test Utils and jest, this app is configured to run all the unit tests created in `src/` with a `.spec.js` extension, you can execute a test run using 
```
yarn test
```

if you wanna do a change, you can enable livereloading in your tests using
```
yarn test:watch
```
#### e2e testing
Cypress was enable for this app to run the end to end to end tests created in the `e2e/` using
```
yarn test:e2e
```

## Support
Althoug this app was created purely as a practice excercise, I'm happy to answer any questions or feedback about the app.

## Authors
>Leonardo Lopez Daza
>Web UI developer
>[My Linkedn](https://www.linkedin.com/in/leonardo-lopez-daza/)
>[My mail](leonardoloda2@gmail.com)