import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

export default App;

// access key E4fWTmZGF_QEgb9-VeTd2p9P8xhz6jd1L5_PRQ1F9ho
// secret key 9-Qi2k2f04JQy5Z2KauveLKCh2DTRN1DyhseS5cOSjI
