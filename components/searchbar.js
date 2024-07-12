import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
 
const SearchBar = () => {
    const [isVisible,setIsVisible] = useState(false);
    const [query, setQuery] = useState('');
    const handleSearchToggle = () => {
        setIsVisible(!isVisible);
    }
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
       
    };

    return(
    <div className=" flex flex-col items-center">
           <IoSearchOutline onClick={handleSearchToggle} className="text-xl cursor-pointer" /> 
           {isVisible && (
                <form onSubmit={handleSearch} className="fixed bottom-0 left-0 right-0 p-4 border rounded-lg shadow-lg bg-white">
                    <input type="text" style={{paddingTop:"1.5rem"}}  placeholder="RECHERCHER UN PRODUIT" value={query} onChange={handleInputChange}  className="text-3xl w-full   rounded-md px-6 py-56 focus:outline-none" />
                    
                     <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        className="   border-gray-300  mt-2 py-1 px-6 bg-pink-400 hover:bg-pink-500 text-white  focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900"
                        
                    >
                        Rechercher
                    </button>
                   
                    </div>
                </form>
            )}
        
        </div>
    )

}

export default SearchBar