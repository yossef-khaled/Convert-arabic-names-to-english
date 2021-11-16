To start the project: 
- First, start the json-server by : 
 1- Head to the json-server folder (Back one folder from the where this file is).
 2- Open the CMD and Type the command 'json-server --watch NamesDatabase.json -d 2000 -p 3001'
   NOTE: - 'Watch' flag is to tell json-server to keep an eye on the data base for any change to update.
         - 'd' flag is to set a delay before the responce of any request.
         - 'p' flag is to set the port where you access the database (`http://localhost:${p}`)
3- Head to the project, hit 'npm start'. And that's it.