import React from 'react'

function SearchAnswer({searchTerm}) {
    return (
        <div>
        {console.log(searchTerm.length)}
            {searchTerm.length > 3 
                ? 
                    <b style={{color: 'green'}}>YES</b> 
                :
                    searchTerm.length === 0 
                        ? 
                            "" 
                        : 
                            <b style={{color: 'red'}}>NO</b>
            }
        </div>
    )
}

export default SearchAnswer
