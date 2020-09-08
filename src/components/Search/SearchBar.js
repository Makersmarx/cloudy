import React from 'react';
import './Search.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="input-box">
              <input
                type="text"
                placeholder="Lesson Search"
                value={this.state.term}
                onChange={(event) =>
                  this.setState({ term: event.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
