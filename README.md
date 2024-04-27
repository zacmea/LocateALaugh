# Unit 3 Project - Locate A Laugh &emsp; &ensp; [(live on Netlify)](https://main--locatealaugh.netlify.app/)
**Purpose**: Design and build a web-based and mobile app that allows a user get in their laughs by being able to locate and view comedy shows or specific comedians and reserve a spot at these comedy shows.

_created by: [Aleena](https://git.generalassemb.ly/athomas022),&ensp; [Nail](https://git.generalassemb.ly/nail-ga),&ensp; [Zachary](https://github.com/zacmea)_

![Screenshot 2024-04-27 at 5 20 52 PM](https://github.com/zacmea/LocateALaugh/assets/152098774/268ad70e-1237-4914-b4ea-2f55ba7d90fa)

## Technologies Used
- MongoDB
- Express
- React
- Node.js
- Heroku (back end)
- Netlify (front end)
- Tailwind CSS
- [Ticketmaster's _Discovery_ API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)

## Installation Instructions
1) Access this app on [Heroku](https://main--locatealaugh.netlify.app/), or
2) Fork & clone this repo.  Be sure to npm i both the front and back end to install all dependencies.

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
![Screenshot 2024-04-13 at 2 08 43 PM](https://github.com/zacmea/LocateALaugh/assets/152098774/24adcffe-9351-4675-9359-4e7a40722edd)
![Screenshot 2024-04-13 at 2 08 57 PM](https://github.com/zacmea/LocateALaugh/assets/152098774/7caadd06-1494-423f-9a5c-1ac942ecff71)
![Screenshot 2024-04-13 at 2 09 13 PM](https://github.com/zacmea/LocateALaugh/assets/152098774/08612927-de62-45d2-91c0-a10cedc887e5)
![Screenshot 2024-04-13 at 2 09 30 PM](https://github.com/zacmea/LocateALaugh/assets/152098774/bb77ff7f-b781-4a82-a4c7-5d83e5529f81)


## Approach taken: Utilized the MVC setup with the 7 restful routes
We began this group project by talking about user needs and generating ideas & wireframes.  We then hashed out the ERD & relationships.  From there, we divided the 3 routes --user, event, & artist-- between the 3 of us.  With the rough draft of the routes in place, we solidified our connections to the API and the database and began working on views and authentication.

1) The navigation piece includes a few components that render on top of views, but is mainly comprised of pages.  
- Header/footer
- Homepage
- Login/signup
- Search results
- Events: calendar, list, details, edit
- User: login/sign up, profile, edit
- Artist: list, details, edit

2) Schemas built (Models):
We built the following schemas (for MongoDb) for the user interaction etc.:
- Artists
- Events
- Users
   
Moreover, we utilized Ticketmaster's API to pull artists and events, which have their own schemas in Discovery.
     
3. Association using the MangoDB object ID to achieve the relationships between the user, artists, and events, as shown in our ERD below:
![3545f2b3-fe54-4296-84e7-3ed3ea67a456](https://github.com/zacmea/LocateALaugh/assets/152098774/e96e5d60-ca2f-4d56-902e-b3a9ba7af884)

4. The user is authenticated via the checktoken for every fetch to the user collection in mangoDB. localStorage is utilized to store the user's ID and token and make it available through the app. In this version we have utilized the stored ID and username in populating the user profile page.
5. Moreover, navigation is restricted so that once logged in the user can navigate to search for events and artists but can only see their info in the user profile and only their saved events list.
6. Finally, utilize all the 7 restful routes (controller) to navigate pages and query and retrieve MangoDb across the 3 models.

## Unsolved Problems / Major Hurdles:
### Major Hurdles:
1. Deploying the full scale execution of the authorization for all the routes
2. Resolving merge conflicts
3. Working with data from 2 different sources (API and database)

### Unresolved Problems/Goals:
We plan to continue to work on addressing these issues to bring our app more into alignment with our original vision.
1. We struggle still with the calendar displaying upcoming tickemaster events, and we haven't yet connected the user created events to the calendar.
2. Saving an event as a user currently adds the user to the event, but doesn't add the event to the user.  Further logic is needed.
3. Some pages require the user to manually refresh the page in order for the updates to appear.  We may have a breakdown in the virtual DOM realizing it's been updated.
4. Some of the styling isn't as precise as we would like, since we're still learning to use Tailwind.  This will be updated soon.

## References
Throughout this project, referenced ChatGPT, W3Schools, StackOverflow, the documentation for the various technologies, and our instructors.



## References
1. Reviewed the documentation on [MDN documents](https://www.w3schools.com/howto/howto_css_center-vertical.asp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all))
