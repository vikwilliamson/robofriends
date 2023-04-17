import React from 'react';

const SearchBox = ({searchChange, searchField}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                onChange={searchChange}
                placeholder='Search Robots'
                type="search" 
            />
        </div>

            );
        
}

export default SearchBox;