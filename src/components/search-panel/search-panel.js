import React from 'react';
import './search-panel';

const SearchPanel = () => {
    const searchText='Type here to search';
    return (
        <input placeholder={searchText} />
        
    );

}

export default SearchPanel;