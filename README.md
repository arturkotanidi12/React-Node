**_Test task**_


**Description**

This project demonstrates a simple web application that uses Bootstrap to create a table to display data fetched from an API using Axios. The application also utilizes uuidv4 to generate unique IDs for the table entries.

**Technologies Used**

**For Frontend**

1. react: "^18.2.0"
2. bootstrap: "5.3.1" 
3. react-bootstrap: "2.8.0"
4. axios: "1.4.0"
5. uuid: "9.0.0"

**For Backend**

1. airtable: "^0.12.1"
2. body-parser: "^1.20.2"
3. cors: "^2.8.5"
4. dotenv: "^16.3.1"
5. express: "^4.18.2"

**Frontend Installation**

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:

   
            npm install

**Usage**

1. Run the application using npm:


            npm start

**Backend Installation**

            npm install

**Usage**

1. Run the application using npm:
 

            npm run dev     

1. Open your web browser and visit http://localhost:3000 to see the table displaying data fetched from the API.


**Have two endpoints**
1. /get request   http://{baseApi_URL}/api/clients/analytics - for getting records list
2. /post request http://{baseApi_URL}/api/clients/analytics  - for creating new record

**How it Works**

1. The application makes an HTTP GET request to the API endpoint using Axios to fetch data.
2. The fetched data is then displayed in a table using Bootstrap for styling.
3. For each table entry, a unique ID is generated using uuidv4 to ensure data integrity and uniqueness.