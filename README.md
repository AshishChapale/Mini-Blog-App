# Mini Blog App

A React mini blog/vlog-style app built with React Router and API fetching.  
Users can view posts, search posts by title, and open a single post details page.

## Features

- Home page with all posts
- Search posts by title
- Dynamic post details page
- React Router navigation
- Loading and error handling
- Component-based structure
- Responsive basic styling

## Tech Stack

- React
- Vite
- React Router DOM
- JavaScript
- CSS
- JSONPlaceholder API

## API Used

Posts are fetched from:

- JSONPlaceholder API:
https://jsonplaceholder.typicode.com/posts

## Project Structure

```txt
src/
  components/
    Navbar.jsx
    PostList.jsx
    PostItem.jsx
  pages/
    Home.jsx
    About.jsx
    PostDetails.jsx
  App.jsx
  App.css
```

## How to Run Locally

```bash
git clone https://github.com/AshishChapale/Mini-Vlog-App.git
cd Mini-Vlog-App
npm install
npm run dev
```

## Learning Concepts Practiced

- useState
- useEffect
- fetch API
- map
- filter
- props
- component splitting
- React Router
- dynamic routes
- useParams
- loading and error handling
