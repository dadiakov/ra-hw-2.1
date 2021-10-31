import React from 'react';

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return filters.map((e) => (
    <button
      class={e === selected ? 'active btn' : 'btn'}
      onClick={onSelectFilter}
    >
      {e}
    </button>
  ));
}
