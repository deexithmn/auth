Auth Application:

###Run Instructions:
    1. clone the repo by running the below command in you terminal
        `git clone https://github.com/deexithmn/auth.git`
    2. Install all the npm packages by running the below command.
        `npm install`
    3. Create a .env file in the root folder. You need to create two variables inside the file.
        `DB_CONNECT = Your mongo connection string`
        `AUTH_SECRET = Your auth secret`
    4. Now you are all set, just run the below command.
        `npm start`
    5. Your application is running in port 3000, you can update the port in app.js file.

###Application:
    There are 3 routes. (Since the app running in you local, I am using the same for hitting the application)
    1. `http://localhost:3000/api/user/register`
        For a new user to login. Sample payload looks like below,
           ```js {
                "username":"test",
                "password":"test",
                "repeat_password":"test",
                "birth_year":1992,
                "email":"test@gmail.com"
            } ```
        Application uses the bcryptjs library to encrypt user password using salt.
    2. `http://localhost:3000/api/user/login`
        Sample payload for the login looks like below.
            {
                "username":"test",
                "password":"test",
            }
        Once the user is logged, api call will respond back the jwt token as a header, the next calls can make user of this taken to fetch the user details.
    3. `http://localhost:3000/api/user/details`
        Please check the postman curl file in the root folder, make sure to update the Authorization header in the above call you make.

This is a basic auth application, which can be used as a microservice to fetch user id and then point him to a different service based on the user request.
If you want to create a different model, create a new model in models folder and create a new validation for the created schema under schemas folder, so that @hapi/joi will take care of validating the payload.
