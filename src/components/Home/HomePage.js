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
              lacus nunc, viverra nec. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut vel scelerisque enim. Aenean sed lobortis
              sapien. Donec ultricies semper metus, tincidunt mollis dui feugiat
              vitae. Duis faucibus sed ipsum quis laoreet. Aliquam porttitor
              sodales quam, vitae aliquet enim vestibulum in. Praesent nec sem
              eu nisl efficitur tempus. Nunc in finibus est. Integer rutrum sem
              eu tellus luctus efficitur. Donec nec ultrices odio, a condimentum
              metus. In non laoreet mi.
              <br></br>
              <br></br>
              Maecenas laoreet venenatis justo non efficitur. Nullam eu
              tincidunt dui. Aenean tellus dui, mattis eu egestas quis,
              condimentum in augue. Sed non iaculis diam. Quisque maximus ipsum
              at augue imperdiet, in feugiat orci lobortis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis non est sed sem
              laoreet scelerisque. Vestibulum auctor metus non accumsan lacinia.
              Praesent aliquam, ante et feugiat tristique, leo erat dapibus
              nulla, a pharetra odio turpis ac lorem. Proin massa quam, porta
              eget convallis nec, dictum ultricies risus. Phasellus tincidunt
              consectetur pretium. Curabitur non nisi nibh. Nullam eu arcu
              gravida, venenatis lorem nec, auctor eros. Fusce vulputate, eros
              in vulputate dictum, justo lacus sodales massa, nec ornare ligula
              nisi quis diam. Donec eget rutrum neque, at facilisis ipsum.
              Integer at tincidunt sapien. Mauris euismod lectus sit amet
              aliquet commodo. Fusce fringilla pulvinar nisl vel aliquet. Ut
              iaculis nec nisl eu viverra. Nam ullamcorper augue dui, et aliquam
              nibh egestas id. Etiam porta laoreet lorem, vitae blandit dui
              sagittis mollis. Nullam accumsan arcu at eleifend molestie. Etiam
              ac nunc luctus, volutpat mi id, fringilla sem. Mauris in bibendum
              ex, sit amet venenatis dui. Sed tincidunt nunc non sem vestibulum,
              eu varius nibh dictum. Nullam maximus rutrum lectus et tempor.
              Proin vehicula malesuada urna, bibendum lobortis lorem accumsan
              eu. Praesent porta quam id mollis efficitur. Sed laoreet urna
              vitae mauris vulputate, at venenatis lacus vulputate. Pellentesque
              commodo nibh id lectus imperdiet, in tincidunt dui eleifend. Donec
              sem nunc, maximus eu rhoncus et, tempus eu ex. Donec aliquet est
              eros, eleifend condimentum metus aliquam ac. Quisque molestie ex
              eu nulla rhoncus, vel molestie ante laoreet. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
