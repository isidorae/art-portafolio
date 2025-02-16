import './nft-card.css'
import nftdata from '../../nft-data.json';
import collectionData from '../../nft-collections.json';
import NftArtCard from "./NftArtCard";
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

export default function NftMain() { 

const [statusFilter, setStatusFilter] = useState(null); // 'sold', 'available'
const [collectionFilter, setCollectionFilter] = useState(null);
const [editionsFilter, setEditionsFilter] = useState(null);
const [blockchainFilter, setBlockchainFilter] = useState(null);

const uniqueCollections = [...new Set(nftdata.map(item => item.collection))];

const collectionNames = {
    "anima mundi": "Anima Mundi",
    "Aequus": "Aequus",
    "just for fun": "Just for Fun",
    "muse lux": "Muse Lux",
};

    const handleStatusFilter = (status) => {
        setStatusFilter(status);
    };

    const handleEditionsFilter = (editionType) => {
        setEditionsFilter(editionType)
    }

    const soldNfts = nftdata.forEach(item => item.status === true);
    console.log(soldNfts)

    const filteredNfts = nftdata.filter(item => {
        const statusMatch = statusFilter === 'sold' ? item.status === "sold" :
                            statusFilter === 'available' ? item.status === "available" :
                            true;
        const collectionMatch = collectionFilter ? item.collection === collectionFilter : true;
        const editionsMatch = editionsFilter ? item.editions === editionsFilter : true; // Filter by editions
        const blockchainMatch = blockchainFilter ? item.network === blockchainFilter : true;
        return statusMatch && collectionMatch && editionsMatch && blockchainMatch;
    });
    return (
        <div className="overflow-hidden">
            <section className="d-flex flex-row align-selft-start justify-content-start">
                    <div className="m-2">
                        <Button className="text-white" as={ Link } to='/' variant="outline-light">Return</Button>
                    </div>
            </section>
            <div>
                <h1 className="text-blue" >NFTs by Isidora Axis</h1>
            </div>
            <section className="d-flex flex-column justify-content-center m-3">
                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-2">
                    <h4>Filter by status</h4>
                    <div className="mx-1">
                        <Button 
                            className={statusFilter === 'sold' ? 'active-filter' : ''} 
                            onClick={() => handleStatusFilter('sold')}
                        >
                            Sold
                        </Button>
                    </div>
                    <div className="mx-1">
                        <Button 
                            className={statusFilter === 'available' ? 'active-filter' : ''} 
                            onClick={() => handleStatusFilter('available')}
                        >
                            Available
                        </Button>
                    </div>
                </div>
                {/* Collection Filters */}
                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center mb-2">
                <h4>Filter by collection</h4>
                    {uniqueCollections.map(collection => (
                        <div className="mx-1" key={collection}>
                            <Button 
                                className={collectionFilter === collection ? 'active-filter' : ''}  
                                onClick={() => setCollectionFilter(collection)}
                            >
                                {collectionNames[collection] || "No collection"}
                            </Button>
                        </div>
                    ))}
                </div>
                <div>
                    {/* Editions Filters */}
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center mb-2">
                        <h4>Filter by editions</h4>
                        <div className="mx-1">
                            <Button 
                                className={editionsFilter === 'unique' ? 'active-filter' : ''} 
                                onClick={() => handleEditionsFilter('unique')}
                            >
                                Unique
                            </Button>
                        </div>
                        <div className="mx-1">
                            <Button 
                                className={editionsFilter === 'multiple' ? 'active-filter' : ''}
                                onClick={() => handleEditionsFilter('multiple')}
                            >
                                Multiple
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Blockchain Filters */}
                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center mb-2">
                    <h4>Filter by Blockchain</h4>
                    <div className="mx-1">
                        <Button 
                            className={blockchainFilter === 'eth' ? 'active-filter' : ''} 
                            onClick={() => setBlockchainFilter('eth')}
                        >
                            Eth
                        </Button>
                    </div>
                    <div className="mx-1">
                        <Button 
                            className={blockchainFilter === 'sol' ? 'active-filter' : ''} 
                            onClick={() => setBlockchainFilter('sol')}
                        >
                            Sol
                        </Button>
                    </div>
                    <div className="mx-1">
                        <Button 
                            className={blockchainFilter === 'tez' ? 'active-filter' : ''} 
                            onClick={() => setBlockchainFilter('tez')}
                        >
                            Tez
                        </Button>
                    </div>
                </div>
                <div className="d-flex flex-row mx-1 justify-content-end">
                    <Button 
                        variant="outline-secondary" 
                        onClick={() => {
                            handleStatusFilter(null)
                            setCollectionFilter(null);
                            setEditionsFilter(null);
                            setBlockchainFilter(null);
                        }}
                    >
                        Clear filters
                    </Button>
                </div>
            </section>
            <section className="d-flex flex-row flex-wrap justify-content-center align-items-center mb-5 pb-5">
                {
                    filteredNfts.map(item => {
                        return(
                            <NftArtCard 
                                id={item.id}
                                title={item.title} 
                                collection={item.collection}
                                editions={item.editions} 
                                previewimg={item.preview}
                                status={item.status} 
                                market={item.buy} 
                                alt={`nft preview ${item.title}`}
                                format={item.format}
                                network={item.network}
                            />
                        )
                    })
                }

            </section>
        </div>
    )
}