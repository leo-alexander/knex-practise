var express = require('express')

// var db = require('knex')(config)

var db = require('../db')

module.exports = {
  get: get,
  getProfile: getProfile,
  getNewUser: getNewUser,
  userAdded: userAdded,
  viewBlogPost: viewBlogPost
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      var data = {
        users: users
      }
      res.render('index', data)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfile (req, res) {
  var paramID = Number(req.params.id)
  db.getUser(paramID)
    .then(function (user) {
      var data = {
        user: user[0]
      }
      console.log(data)
      res.render('profile', data)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getNewUser (req, res) {
  res.render('newUser')
}

function userAdded (req, res) {
  var data = {
    name: req.body.name,
    email: req.body.email,
    url: req.body.url,
    photo: req.body.photo
  }
  db.addUser(data)
    .then(function () {
      res.render('userAdded')
    })
}

function viewBlogPost (re, res) {
  userId = Number(req.params.id)
   db.getUsers()
   .join('blogs', 'users.id', 'blogs.user_id')
   .select('users.id as userid', 'users.name as name', 'blogs.blog as blog', 'blogs.id as blogid')
   .where('users.id', userId)
   .then(function (user) {
     var data = {
       userProfile: user[0]
     }
     res.render('blogposts', data)
   })
   .catch(function (err) {
     res.status(500).send('DATABASE ERROR: ' + err.message)
   })
 }
