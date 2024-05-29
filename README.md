# Event Management Server

Server side endpoints to manage virtual events 

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/bornakpaul/virtual-event-management-server
    $ cd virtual-event-management-server
    $ npm install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- create a dotenv file
- set two variables : MONGODB_URI, SECRET_KEY
- MONGODB_URI for mongodb connection
- SECRET_KEY for setting up jwt

## Running the project

    $ npm run dev

## Simple build for production

    $ npm build

# API ENDPOINTS
  ## Registration and User Details baseurl : http://localhost:3001/user
     - Login : baseurl/login
     - Register : baseurl/register
     - Fetch all users list : baseurl/all
     - Update user role : baseurl/update


  ## Events baseurl : http://localhost:3001/event
     - Create event : baseurl/create
     - Delete event : baseurl/delete
     - Fetch all events list : baseurl/
     - Fetch event by id : baseurl/:eventId
     - Update participants : baseurl/participant/update
     - Remove participants : baseurl/participant/remove
