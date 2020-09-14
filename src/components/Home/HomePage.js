import React from 'react';
import './Home.css';
import unsplash from '../../api/unsplash';
import Header from '../Header/Header';
import SearchBar from '../Search/SearchBar';
import LessonList from '../Lessons/LessonList';
import Stripe from '../Stripe/Stripe';

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
        <div className="homecont">
          <div className="ui container" style={{ marginTop: '10px' }}>
            <h1 className="searchtitle">Search the Sky</h1>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
          <LessonList images={this.state.images} />
        </div>
        <div className="vocab">
          <div className="test">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
              scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique
              sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
              risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac
              turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus
              metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
              volutpat condimentum velit. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.
              Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
              diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
              fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
              imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
              Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
              euismod lacus luctus magna. Quisque cursus, metus vitae pharetra
              auctor, sem massa mattis sem, at interdum magna augue eget diam.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
              blandit dolor. Sed non quam. In vel mi sit amet augue congue
              elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
              lacus nunc, viverra nec.
            </p>
          </div>
        </div>
        <div>
          <Stripe />
        </div>
      </div>
    );
  }
}

export default HomePage;
