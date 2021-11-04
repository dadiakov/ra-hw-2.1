import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return filters.map((e) => (
    <button
      key={e}
      className={e === selected ? 'active btn' : 'btn'}
      onClick={onSelectFilter}
    >
      {e}
    </button>
  ));
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func, 
}

Toolbar.defaultProps = {
  selected: 'All',
  onSelectFilter: () => console.log('Функция не передана'), 
}