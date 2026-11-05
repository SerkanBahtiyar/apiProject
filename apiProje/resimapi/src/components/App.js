import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import "./app.css";
import ImageList from './image/ImageList';

class App extends Component {
  state = {
    images: []
  };

  onSearchImage = async (search) => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    if (!accessKey) {
      console.error("Unsplash API key is missing. Add REACT_APP_UNSPLASH_ACCESS_KEY to your .env file.");
      this.setState({ images: [] });
      return;
    }

    try {
      const result = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: search },
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      });

      this.setState({ images: result.data.results });
    } catch (error) {
      console.error("Image search request failed:", error);
      this.setState({ images: [] });
    }
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
