# Deployed app link
### Open [Deployed Application Link](https://task-it-ashy.vercel.app/) to view it in your browser.

# Things to expect
1. The app will route to login page.
2. The app needs user to register first as Tasks are to be loaded for each user.
3. The application is created only for desktop views.

# To Start Application in local machine

1. Clone the repository using `https://github.com/VishalChangder00789/Task-it.git`
2. Open the project in VSCode
3. Open terminal
4. cd client > npm start
5. cd server > npm run start-dev

## Pre Setup
1. Go to client > src > paths > serverPath.js
2. exchange
`export const baseUrl_server = `http://localhost:${port}`;`
`export const baseUrl = `https://task-it-backend.onrender.com`;`

to 

`export const baseUrl_server = https://task-it-backend.onrender.com;`
`export const baseUrl = ``http://localhost:${port}`;`

#Features
1. Notes Color
2. Set font size, bold, italic , underline.
3. Status Button switch (custom)
4. Edit task
5. Delete task
6. Easy UI
7. Desktop view


# Future Prospects
1. Add profile page for each user
2. Add Mobile view of the application
3. Add Dark Mode
4. Create a mobile application using capacitor for ios and android support
5. Add Task labeling
6. Add Tasks sharing between friends.
7. Add a chat mechanism where users can share ideas with online friends and create task related to it.
