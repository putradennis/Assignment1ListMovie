//import React, {createContext, useState} from 'react';
//
////untuk akses ke provider ke home dan ke penyimpanan data
//
//export const WishlistContext = createContext();
//
//export const WishlistProvider = ({children}) => {
//  const [wishlist, setWishlist] = useState([]);
//
//  return (
//    <WishlistContext.Provider value={{wishlist, setWishlist}}>
//      {children}
//    </WishlistContext.Provider>
//  );
//};


// ProviderTugas.js
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

