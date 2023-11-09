==============================
Project Configuration and Deployment Guide
==============================

# Project Title

DBC-MUBI-MOVIE

## Overview

This is a web application where user can search movies, view movies details, filter movie by genre, write reviews.
Users who are registered and loggedin can get access to My Watchlist. They can add movies to their watchlist.

## Local Deployment

To install this project, follow these steps:

1. Clone the repository or unzip the DBC.zip, open the unzipped folder in VScode

   ```bash
   `git clone https://github.com/LingJIang9/TheMandalorian.git`
   ```

2. Install dependencies
   2.1 `npm install axios react-bootstrap react-dom react-router-dom`
   2.2 `cd server` -> `npm install express bcrypt cors mongodb mongoose nodemon`

3. Usage
   Client-side: `npm run dev` (it will show a localhost link, click it, the browser will open)
   Server-side: `cd server` -> `npm start`(it will show server is running on 3000 database connected)

## Production Deployment

`npm run build`
Deployment folder: dist
Deployed with Netlify https://www.netlify.com/
Deployment site: https://dbc-mubi-movie.netlify.app/

## Configuration

### Environment Variables

-Movie third party API
API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3d11b45598d7855ede089fb154e694e8"
API_IMG="https://image.tmdb.org/t/p/w500/"
API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=3d11b45598d7855ede089fb154e694e8&query"
API_KEY="api_key=3d11b45598d7855ede089fb154e694e8"

-MONGODB URI:
mongodb+srv://jiangling9981:xyXA3Uvjpsq4QqpI@cluster0.dcosvtu.mongodb.net/
mongodb key: xyXA3Uvjpsq4QqpI

-JWT_SECRET
secretKey = "mubi-movie"

### Folder Structure

Backend: Server folder
Frontend: src folder -> component folder, assets folder(pictures),page folders
Deplyment: dist folder

kill -9 $(lsof -t -i:3000)
