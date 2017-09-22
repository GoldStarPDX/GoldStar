import React, { Component } from 'react';
import List from './List';
import Gallery from './Gallery';

const Views = {
  list: List,
  gallery: Gallery
};

const views = Object.keys(Views);

export default class ViewSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view:views[0]
    };
    this.handleChange.bind(this);
  }

    handleChange = view => {
      this.setState({ view: view });
    }

    render() {
      const { view } = this.state;
      const { cards, deleteCards } = this.props;
      return (
        <div>
          <button onClick={() => this.handleChange('list')}>List</button>
          <button onClick={() => this.handleChange('gallery')}>Gallery</button>
          <ViewDisplay view={view} cards={cards} onDelete={deleteCards} />
        </div>
      );
    }
}

export function ViewDisplay({ view, cards, onDelete }) {
  const View = Views[view];
  return <View cards={cards} onDelete={onDelete} />;
}
