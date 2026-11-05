# React Image Search

A React web application that searches for images by keyword and displays the results returned by the Unsplash API.

## Overview

Users enter a search term in the search interface. The application sends a request to the Unsplash photo-search endpoint and renders the returned images in a reusable image-list component.

## Technology Stack

- React 18
- JavaScript
- Axios
- Unsplash API
- HTML and CSS

## Main Areas

- Keyword-based image search
- HTTP requests with Axios
- Reusable search bar component
- Image list and image item components
- State management with React component state

## Getting Started

1. Clone this repository.
2. Open the React application directory:

   ```bash
   cd apiProje/resimapi
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create an Unsplash developer application and obtain your own access key.
5. Store the key in a local `.env` file as:

   ```env
   REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key
   ```

6. Update the Axios request in `src/components/App.js` to read the key from `process.env.REACT_APP_UNSPLASH_ACCESS_KEY` rather than embedding a key in source code.
7. Start the development server:

   ```bash
   npm start
   ```

The app is typically available at `http://localhost:3000`.

## Security

Never commit API keys or other secrets. Use your own Unsplash key and keep the local `.env` file out of version control.

## Author

**Serkan Bahtiyar** — Computer Engineer

- Portfolio: https://serkanbahtiyar.github.io/
- GitHub: https://github.com/SerkanBahtiyar
- LinkedIn: https://www.linkedin.com/in/serkanbahtiyar/
