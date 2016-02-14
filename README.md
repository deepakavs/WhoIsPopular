# WhoIsPopular
This app lets you figure out who is popular amond the two mentioned github usernames

Instructions for using the serice:

GET request as below:

http://localhost:3000/pop?firstuser=:gitusername1&seconduser=gitusername2

Example:

http://localhost:3000/pop?firstuser=deepakavs&seconduser=aporter

it returns a json object as shown below

{"popular":"aporter"}

Note: User validation not added. Please make sure you write correct usernames
      You can also find the application at Good UI at http://localhost:3000
