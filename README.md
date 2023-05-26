# **SNAK3** 👾 🎮 

## **TABLE OF CONTENTS**

- ✅&nbsp;&nbsp;[Requirements](#requirements)
  - [Node v16](#node-v16)
  - [Environment Variables](#environment-variables)
- 🔡&nbsp;&nbsp;[Scripts](#scripts)
  - 💻&nbsp;&nbsp;[Starting the App](#starting-the-app)
  - 🔨&nbsp;&nbsp;[Building the App](#building-the-app)
  - 🚦&nbsp;&nbsp;[Testing the App](#testing-the-app)

## **REQUIREMENTS**

- ### **Node v16**

    This project uses Node v16. 

    NVM is a great tool for managing / switching between node versions on your device. you can use `nvm use <version_number>` to switch to a particular version or `nvm use` to extract the version number from the `.nvmrc` file.

- ### **Environment Variables**

    You will need the respective environment variables for each environment you'd like to run or else the app wont start. Please ask a developer of this project for the respective `.env` files.

    in your root directory, please create the following files: `.env`, `.env.local`, `.env.dev`, `.env.staging`, `.env.qa`, and `.env.prod`

    For each file please add the current line: `REACT_APP_ENV=<environment>`, where `<environment>` matches the environment name for each of the files listed right above.

## **SCRIPTS**

- ### **Starting the App**

    #### First and foremost install all required packages by running `npm i` or by running `yarn install`.
    #### **Note:** The most reliable method is using `yarn install`.

  - `yarn start:app:local` <span style="color:lightgreen">&nbsp;&nbsp;(USE AS DEFAULT)</span>

    Starts the app in <span style="color:cyan">local</span> environment

  - `yarn start:app:dev`

    Starts the app in <span style="color:cyan">dev</span> environment

  - `yarn start:app:staging`

    Starts the app in <span style="color:cyan">staging</span> environment 

  - `yarn start:app:qa`

    Starts the app in <span style="color:cyan">qa</span> environment 

  - `yarn start:app:prod`

    Starts the app in <span style="color:cyan">prod</span> environment

- ### **Building the App**

    #### When building apps using a specific environment, the resulting build artifacts will be saved to `/builds/<env>/build-<env>-<version-number>`. The latest build will also always overwrite the artifacts found in `/build`.

  - `yarn build:dev`

    Builds the app using <span style="color:cyan">dev</span> environment

  - `yarn build:staging`

    Builds the app using <span style="color:cyan">staging</span> environment 

  - `yarn build:qa`

    Builds the app using <span style="color:cyan">qa</span> environment 

  - `yarn build:prod`

    Builds the app using <span style="color:cyan">prod</span> environment

- ### **Testing the App**

  - `yarn test`

    Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
