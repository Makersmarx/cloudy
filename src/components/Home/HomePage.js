import React from 'react';
import './Home.css';
import unsplash from '../../api/unsplash';
import Header from '../Header/Header';
import SearchBar from '../Search/SearchBar';
import LessonList from '../Lessons/LessonList';

class HomePage extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <Header />

        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <LessonList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default HomePage;
