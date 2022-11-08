import React from 'react';

const SelectCategories = () => {
    return (
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option value="all">All Categories</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    );
};

export default SelectCategories;