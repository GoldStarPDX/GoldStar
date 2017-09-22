import React, { Component } from 'react';
import List from './List';
import Gallery from './Gallery';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const Views = {
  list: List,
  gallery: Gallery
};

const views = Object.keys(Views);

export default class ViewSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: views[0]
    };
  }

    handleChange = view => {
      this.setState({ view });
    }

    render() {
      const { view } = this.state;
      const { cards, id, deleteCards } = this.props;
      return (
        <div>
          <RadioButtons views={views}/>
          <ViewDisplay view={view} cards={cards} onDelete={deleteCards} />
        </div>
      );
    }
}

export function ViewDisplay({ view, cards, onDelete }) {
  const View = Views[view];
  return <View cards={cards} onDelete={onDelete} />;
}


function RadioButtons({ views, onChange }) {
  return (
    <RadioGroup onChange={onChange} horizontal>
      {views.map(view => (
        <RadioButton key={view} value={view}>
          {view}
        </RadioButton>
      ))}
    </RadioGroup>
  );
}
