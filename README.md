# Tech Blog

## Description 

This full-stack project involved creating a CMS-style bloggin site following the MVC architectural paradigm. The website allows users to create an account, create blog posts, edit and delete blog posts, and comment on blog posts. When a user has been inactive for 60 minutes, the session timesout and the user is automatically logged out. Features and technologies of this project include:
* Sequelize and ORM
* Express (including sessions) 
* Express Handlebars for views
* MySQL
* Additional packages including dotenv and bcrypt
* Deployed to Heroku

## Deployed URL

[Click here for the deployed URL](https://alishasaleh-tech-blog.herokuapp.com/)

## Installation

* To install the necessary packages to run this application, run ``npm install`` in your CLI
* To use the database: change the credientials in ``config/connection.js`` to your own and run ``schema.sql`` in your database management application
* To use the application in a localhost run ``node server.js``

## Usage 

The following screenshot demonstrated the homepage as a logged in user:

![homepage](/assets/screenshot-03.png)

When a user loggs in, they are presented with their dashboard which allows them to create blog posts, view their blog posts and delete their blog posts:

![user dashboard](/assets/screenshot-04.png)

They can view blog posts, add comments and (if it is their own blog post) they can edit their blog post:

![blog logged in](/assets/screenshot-02.png)

If a user is logged out, they will not be able to edit or add comments: 

![blog logged out](/assets/screenshot-01.png)

## License

> This project was created under the [MIT License](https://opensource.org/licenses/MIT)

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)