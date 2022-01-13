# Roatan Life in the Bay (Development)

<img width="958" alt="life-bay-home" src="https://user-images.githubusercontent.com/52940934/147795958-83223113-e4a1-443d-ba76-91af6f92fa64.png">

## Description

This website displays relevant information about Roatan Life in the Bay. Here you can see comments made by clients, contact information, a gallery, and the avaialble tours with their respective details such as:

- Prices
- Description
- Length
- Route

Next.js was choosen as the framework for this project because of its SSR technologies which would allow for better performance of the website. Mongo DB was implemented to store and fetch data for the website which allows us to make use of the dynamic routing capability from Next.js.
A feature that I hope to implement in the future is allowing payments through PayPal for the merchandise that the store has to offer.
This project is based of the [official website](https://www.roatanlifeinthebay.com/) of Roatan Life in the Bay which was developed by Luke Johnson.
NOTE: This project was made for educational purposes only. This project is licensed under the terms of the GNU GPLv3 license.

## Installation
NOTE: Node.js must be installed on your computer. If you don't have it installed then [click here](https://nodejs.org/en/download/) to install the version for your OS.
### Node
First, install node modules file

```bash
npm install
# or
yarn install
```
### Running Dev Server
Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

After running this command it will display the address where the server is running, follow that address to use the website.
### Setting up Mongo
Firstly you will have to [create an account](https://www.mongodb.com/) on Mongo. Then you will have to follow the steps starting from creating your cluster until connecting to the cluster. After doing this you will be able to get your **MONGODB_URI**. Head over to the Database screen then select the Connect button, this will then show a pop-up screen. Here you will select the option that says Connnect your application then copy the string that is showed and follow the steps displayed below that string to then get your **MONGODB_URI**. The second enviroment variable will be **MONGODB_DB** which is simply the name you decided for the created database. After doing this simply rename the **.env.local.example** to **.env.local** and change the values of the respective enviroment variables.
To make use of the database you must import the collections which are in **/mongoDB**. An easy way to import these would be using [MongoDB Compass](https://www.mongodb.com/try/download/compass). [Here](https://docs.mongodb.com/compass/current/import-export/) is a quickguide on how to import/export databases in Mongo using Mongo Compass.



## Dependencies used

The dependencies used on this project were:

- Fontawesome
- MongoDB
- Swiper
