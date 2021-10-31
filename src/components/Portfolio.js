import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
    this.state = { filter: 'All' };
    this.filters = ['All']
      .concat(
        this.cards.reduce(
          (unique, item) =>
            unique.includes(item.category)
              ? unique
              : [...unique, item.category],
          []
        )
      )
      .sort();
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(type) {
    this.setState((prevState) => {
      return { filter: type };
    });
  }

  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.filter}
          onSelectFilter={(evt) =>
            this.toggleState(evt.currentTarget.textContent)
          }
        />
        <p></p>
        <ProjectList projects={this.cards} selected={this.state.filter} />
      </>
    );
  }
}
