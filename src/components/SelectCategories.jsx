import React from 'react';

const SelectCategories = (props) => {
    return (
        <select className="form-select  mb-3 p-2 w-80" aria-label=".form-select-lg example" onChange={(e)=>{
          props.setCategorie(e.target.value)
        }}>
        <option value="all">All Categories</option>
        <option value="games">Games</option>
        <option value="office">Office tools</option>
        <option value="design">Design</option>
        <option value="travel">Travel</option>
        <option value="internet">Internet</option>
        <option value="home">Home</option>
      </select>
    );
};

export default SelectCategories;