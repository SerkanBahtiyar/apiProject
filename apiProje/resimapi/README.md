# React Image Search

A React application that searches for photos by keyword using the Unsplash API and displays the results.

## Features

- Keyword-based photo search
- API requests with Axios
- Reusable search bar and image list components
- React component state for displaying results

## Tech Stack

- React 18
- JavaScript
- Axios
- Unsplash API
- HTML and CSS

## Run Locally

1. Clone the repository and open the application folder:

   ```bash
   cd apiProje/resimapi
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local `.env` file in this folder and add your own Unsplash access key:

   ```env
   REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key
   ```

   You can use `.env.example` as a template. Create an application in the Unsplash developer dashboard to obtain a key.

4. Start the development server:

   ```bash
   npm start
   ```

   Open http://localhost:3000.

## Security

- Never commit your real API key.
- The local `.env` file is excluded by `.gitignore`.
- The React environment variable is included in the client-side build. It keeps the key out of source control, but it is **not a secure secret store**. For a production application, route requests through a backend that protects the key and applies appropriate usage limits.

## Author

**Serkan Bahtiyar** · [Portfolio](https://serkanbahtiyar.github.io/) · [GitHub](https://github.com/SerkanBahtiyar) · [LinkedIn](https://www.linkedin.com/in/serkanbahtiyar/)
