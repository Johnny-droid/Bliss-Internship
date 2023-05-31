# Bliss Internship

## Description

This repository contains the projects I've worked on during my internship at Bliss Applications. 

For more detailed information about the internship you can check the report.

During the internship, the main project we created was a website called Bliss Economics.

## Bliss Economics

Website used to manage your money, in order to make sure our clients can save their money and invest it in the best way possible (obviously, in Bliss).

Has multiple features such as:
- Adding a new transaction
- Deleting a transaction
- Editing a transaction
- Checking the overall income, expenses and balance
- Checking the latest transactions
- Visualizing the transactions in a chart
- Viewing all transactions in an organized table


Used in order to test multiple technologies such as HTML, CSS, Tailwind, SASS, Styled Components and React.

There are 2 versions of this website, one using **vanilla** and the other using **React**. However, the React version has all the features implemented, while the vanilla lacks some of them.

## How to run the website

### React version

Navigate to the BlissEconomyReact folder.

As the backend has some issues, you need to run a local server to make the API calls in the transactions page.

#### Run the JSON Server locally

Run the following command:

`json-server --port 4000 db.json`

### Start the React app:

In React, to run the app locally use:

`npm install` 

`npm start`


### Vanilla version

Navigate to the BlissEconomyVanilla folder.

You can start a local server in different ways, but I recommed using the live server extension in VSCode.

Don't forget to start the JSON Server as well.
