import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/Home'
import Nft from './pages/Nft'
import Prints from './pages/Prints'
import Traditional from './pages/Traditional'
import CollectionsNfts from './pages/CollectionsNfts';
import SpecificCollectionPage from './pages/SpecificCollectionPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={< Home/>}></Route>
      <Route path='/nft-collections' element={< CollectionsNfts/>}></Route>
      <Route path='/nfts' element={< Nft/>}></Route>
      <Route path='/traditional' element={< Traditional/>}></Route>
      <Route path='/fineart-prints' element={< Prints/>}></Route>
      <Route path='/nfts/:nftCollection' element={< SpecificCollectionPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
