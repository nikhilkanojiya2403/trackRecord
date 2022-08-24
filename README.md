# trackRecord
## Description About The Project:
This is back-end poject based on the transaction and basic CRUD operations with JWT (bearer token) for authentication and authorization.<br>
## Important Highlights:
a) This project is made in NodeJs using ExpressJS web framework.<br>
b) For the SQL database , PostgresSQL have been used.<br>
c) For the REST API, I have used 'Postman'.<br>
## Endpoints:
a) <b>/users/signup:</b> (POST Request) It is used for the registration of the user, which takes input as follows:<br>
<ul>
  <li>username</li>
  <li>name</li>
  <li>mobile number</li>
  <li>password</li>
</ul>

b) <b>/users/signin:</b> (POST Request) It is used to login by taking username and password and generating the bearer token.<br><br>
c) <b>/transactions/view:</b> (GET Request) It is used to view all the details of the current logged in user. Following informations are displayed:<br>
  
<ul>
  <li>username</li>
  <li>name</li>
  <li>mobile number</li>
  <li>current balance</li>
</ul>

d) <b>/transactions/credit:</b>(POST Request) It is used to add amount to the curr_balance by taking input from the user and display the acknowledgement to the user.<br><br>
e) <b>/transactions/debit:</b> (POST Request) It is used to deduct amount from the curr_balance by taking input from the user and display the acknowledgement to the user.<br><br>

## Important Validations Handled:
a) During signup, if username already exist then it will not register again.<br>
b) During password entering,it should contain at least 1 special character,1 number,1 capital letter, 1 small letter.<br>
c) Duirng any CRUD operations, <b>token validation</b> is passed as a <b>middleware</b> before any operations.<br>
d) During credit and debit operations, amount entered by the user is valid or not is also being handled.<br>
e) And many other small cases is being handled.<br>

## Table Structures:
a) User's Table:<br>
![image](https://user-images.githubusercontent.com/70429608/170790248-796bbe27-f6eb-4d46-9a23-44c599b675a4.png)
<br>
b) Transaction's Table:<br>
![image](https://user-images.githubusercontent.com/70429608/170790351-bad709cf-5f0c-44df-bc4e-c67f63e5f429.png)
