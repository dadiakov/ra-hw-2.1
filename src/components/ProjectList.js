/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectList({ projects, selected }) {
  let cards = [];
  if (selected === 'All') {
    cards = projects;
  } else {
    cards = projects.filter((e) => e.category === selected);
  }
  return cards.map((e) => <img key={uuidv4()} src={e.img} />);
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  selected: PropTypes.string,
}

ProjectList.defaultProps = {
  selected: 'All',
}