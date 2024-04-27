# Unit 3 Project - Locate A Laugh &emsp; &ensp; [(live on Netlify)](https://main--locatealaugh.netlify.app/)

![Screenshot 2024-04-27 at 5 20 52 PM](https://github.com/zacmea/LocateALaugh/assets/152098774/268ad70e-1237-4914-b4ea-2f55ba7d90fa)

## Technologies Used
- MongoDB
- Express
- React
- Node.js
- Heroku (back end)
- Netlify (front end)
- [Ticketmaster's Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)

## Installation Instructions
Access this app on [Heroku]()

## User Stories
- As a comedy enthusiast, I want to be to access the landing page of the "Locate A Laugh" app on a web-browser and to be able to easily understand the different features of the app.
- As a comedy enthusiast, I want to be to access the landing page of the "Locate A Laugh " app on a mobile phone and be able to access the different features of the app.
- As a comedy enthusiast, I want to be able to easily navigate to the different features of the web and mobile app.
- As a comedy enthusiast, I want to be able to register myself with the app and to be authenticated every time I want to use the features and save my preferences and previous selections.
- As a comedy enthusiast, I want to i) search for specific comedy shows, ii) see details of these shows, iii) register for these shows and iv) cancel my reservation.
- As a comedy enthusiast, I want to i) search for a particular comedian, ii) see which shows the comedian is performing at and details of the comedian, iii) navigate from the artist page to the shows to register for the show.
- As a event co-ordinator, I want to i) create a show, ii) edit the shows I've created, iii) cancel the shows.
- As the artist's manager, I want to i) create a profile for my artist, ii) edit the details of my artist and iii) delete the artist profile.
- As a comedy enthusiast, I want to be able to view the shows that I have signed up for.
- As a event co-ordinator, I want to able to view all the shows that I have created.

## Wireframes
**Purpose**: Design and build a web-based and mobile app that allows a user get in their laughs by being able to locate and view comedy shows or specific comedians and reserve a spot at these comedy shows.


## Approach taken: Utilized the MVC setup with the 7 restful routes
1. Nagivation (Views):
Utilized the following views to navigate between the pages:
- Home page: this is the landing page
- Courts pages: Index page and show page to 1) see all the courts and 2) click into the individual court pages to further view details and reserve the court.
- Members pages: Edit, new and show pages to edit exisiting members via a form, create new members via a form and display to the memebers their relevant information.
- Event pages: Index, Edit, New, Register and Show to display all the events created, click in to the individual events, create new events, edit or delete the events (depending on your authorization) and register members to the events 
- Groups: Index, Edit, New, Join and Show to display all the groups, click into each groups to view more details and join the group. Users can also create, edit and delete the group.

3. Schemas built (Models):
   Built the following schemas (for MangoDb) for the user interaction etc.:
   - Artists
   - Events
   - Users
   
   Moreover, we utilized Ticketmaster API's to pull and seed the artists and events.
     
4. Association using the MangoDB object ID to achieve the relationships detailed below:
   The ERD is: ![image](https://media.git.generalassemb.ly/user/51651/files/13ef1a62-9bc3-4f81-b1b6-d9dec9cb6120) 
5. The user is authenticated via the checktoken for every fetch to the user collection in mangoDB. localStorage is utilized to store the user's ID and token and make it available through the app. In this version we have utilized the stored ID and username in populating the user profile page.
6. Moreover, navigation is restricted so that once logged in the user can navigate to search for events and artists but can only see their info in the user profile. Edits to the user profile
7. Utilize all the 7 restful routes (controller) to navigate pages and query and retrieve MangoDb across the 3 models.

## Unsolved Problems / Major Hurdles:
### Major Hurdles:
1. Deploying the full scale execution of the authorization for all the routes
2. 

### Unresolved Problems/Goals:
1. Deploying the full scale execution of the authorization for all the routes.


### Unresolved Stretch Goals:


## References
1. Reviewed the documentation on [MDN documents](https://www.w3schools.com/howto/howto_css_center-vertical.asp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all))
