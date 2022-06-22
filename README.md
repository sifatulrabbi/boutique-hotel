# Boutique Hotel

## Backend

The backend (/server) is built with `Node.js`, `Express.js`, and `Postgresql`. This is an REST API using HTTP1.1.

**Other dependencies**

- `nodemailer`: To send emails to the clients
- `cors`: To allow cross-origin requests
- `express`: The Express.js framework
- `pg & pg-hstore`: Node.js library to use Postgresql with Node.js
- `sequelize`: Node.js ORM for SQL databases
- `nodemon`: For running development build

### Core database tables:

- **Rooms:** storing all the information about rooms.
- **Reservations:** storing all the reservations. This table will also have a foreign key which is the id of the associated room.
- **Requests:** storing all the new and old requests. This will have a foreign key which is the id of the associated room.

> **Note:** The application has a few mock data to show on the UI.

### The reservation process

- It will start from the user's side. The user will choose a room and select the time period (check-in and check-out dates).
- Then the user will provide their email, name, and submit the request
- The API will save the request the database.
- The Admin will be able to see all the requests from the requests panel. But the requests will update automatically. You will have to update the page in order to see the newly added reservations.
  > **Example:** After submitting a reservation request from the Landing page refresh the admin page to see the newly added request.
- The admin will select a request and either accept it or reject it.
- Upon accepting a Request all the other overrides/duplicate requests will be canceled.
- Canceling/accepting a request will send an email to the client.

## Frontend

The frontend is divided into two parts. The admin-panel (/admin) and the landing page (/web). I have built separate apps for admins and clients because it makes development a bit easier, also it prevents developer errors such as accidentally exposing admin API routes to the clients.

Both of the front-end app is built with `React` and `TailwindCSS`.

**Dependencies**

- `react, react-dom, react-scripts, web-vitals`: Core React dependencies
- `react-router-dom`: To use client site routings
- `recoil`: State management library to manage in app states
- `uuid`: UUID generator library for JavaScript
- `@testing-**`: These are a few libraries to do unit testing on the React app
- `axios`: To make HTTP requests similar to `fetch`
- `postcss, autoPrefixer, tailwindcss`: To use TailwindCSS
- `serve`: To serve build files with Node.js in other words run the production version of the application

## Run the application

**Before running the application make sure to fill the `.env` file with necessary information.** All the variables are required and will cause errors if not correct.

- `POSTGRES_PASSWORD`: Postgresql root password.
- `POSTGRES_USER`: Postgresql root user.
- `SMTP_EMAIL`: The google account's email address. To send emails to the client the app requires an service account. For this application you can use your personal google account/any google account to set the email.
  > **Note** if you do not provide the email and password then the system will not be able to run properly.
- `SMTP_PASSWORD`: Google accounts app password. You can visit this link to generate an app password https://myaccount.google.com/apppasswords. But adding an app password will require you to set up the 2-step authentication first. Incase you don't want to turn on the 2-step authentication then you can use the google account's password directly. To learn more about these settings please visit https://myaccount.google.com/ and search for 'app passwords'.

After filling out the `.env` file navigate to the applications root folder and run `docker-compose up --build -d`.

> **Note:** If for any reason the admin/landing page is showing blank white pages please restart the docker image and try again.
