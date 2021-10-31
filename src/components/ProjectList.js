/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function ProjectList({ projects, selected }) {
  let cards = [];
  if (selected === 'All') {
    cards = projects;
  } else {
    cards = projects.filter((e) => e.category === selected);
  }
  return cards.map((e) => <img src={e.img} />);
}
