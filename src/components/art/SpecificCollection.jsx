import './nft-card.css';
import nftdata from '../../nft-data.json';
import collections from '../../nft-collections.json'; // Import the collections JSON
import NftArtCard from "./NftArtCard";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function SpecificCollection({ collection }) {
    const [statusFilter, setStatusFilter] = useState(null); // 'sold', 'available'
    const [editionsFilter, setEditionsFilter] = useState(null);

    // Find the collection details from the collections JSON
    const collectionDetails = collections.find(col => col.name.toLowerCase() === collection.toLowerCase());

    // Filter NFTs by collection name
    const filteredByCollection = nftdata.filter(item => item.collection.toLowerCase() === collection.toLowerCase());

    const handleStatusFilter = (status) => {
        setStatusFilter(status);
    };

    const handleEditionsFilter = (editionType) => {
        setEditionsFilter(editionType);
    };

    const filteredNfts = filteredByCollection.filter(item => {
        const statusMatch = statusFilter === 'sold' ? item.status === "sold" :
                            statusFilter === 'available' ? item.status === "available" :
                            true;
        const editionsMatch = editionsFilter ? item.editions === editionsFilter : true;
        return statusMatch && editionsMatch;
    });

    return (
        <div className="overflow-hidden">
            <section className="d-flex flex-row align-selft-start justify-content-start">
                <div className="m-2">
                    <Button className="text-white" as={Link} to='/nft-collections' variant="outline-light">Return To Collections</Button>
                </div>
            </section>
            <div>
                <h1 className="text-blue text-uppercase">{collectionDetails?.name || collection}</h1>
                {/* Render description if it exists */}
                <div>
                    {/* Render link if it exists */}
                    {collectionDetails?.link && (
                        <a href={collectionDetails.link} target="_blank" rel="noopener noreferrer">
                            Visit Collection Store
                        </a>
                    )}
                </div>
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
                <div>
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
                <div className="d-flex flex-row mx-1 align-items-center justify-content-between">
                    <section>
                        <p className="m-0">{filteredNfts.length} NFTs found</p>
                    </section>
                    <Button 
                        variant="outline-secondary" 
                        onClick={() => {
                            handleStatusFilter(null);
                            setEditionsFilter(null);
                        }}
                    >
                        Clear filters
                    </Button>
                </div>
            </section>
            <section className="d-flex flex-row flex-wrap justify-content-center align-items-center mb-5 pb-5">
                {filteredNfts.map(item => (
                    <NftArtCard 
                        key={item.id}
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
                ))}
            </section>
        </div>
    );
}