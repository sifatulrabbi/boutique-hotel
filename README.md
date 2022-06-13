# Boutique Hotel

## The backend

### Core database tables:

- **Rooms:** storing all the information about rooms.
- **Reservations:** storing all the reservations. This table will also have a foreign key which is the id of the associated room.
- **Requests:** storing all the new and old requests. This will have a foreign key which is the id of the associated room.

### The reservation process

- It will start from the user's side. The user will choose a room and select the time period (check-in and check-out dates).
- Then the user will provide their email and name, then will submit the request
- The request will arrive at the API, the API will save the request as a new row in the table with the room Id
- The Admin will be able to see all the requests from the requests panel.
- The admin will select a request and either accept it or reject it.
- Upon accepting a new row will be added to the reservations table with the details from the request data and an email will be sent to the client's email regarding the reservation.
- Thus rejecting will trigger a similar email sent event but the email will be different and will be saying that the reservation failed. Optionally the admin will be able to modify the email if he/she wants to.

### Accepting the reservation

- While accepting the reservation the system will run a thorough query on all of the rooms and list all the available dates.
- If the available dates meet the requested dates then the request accepting button will appear (more likely enabled) otherwise, the button will be disabled.
- If there were multiple requests at the same time then it will be up to the admin to choose one and reject the rest.
- Upon accepting a new reservation data will be added and an email will be sent to the user.
