import './nft-card.css'
import nftdata from '../../nft-data.json';
import collectionData from '../../nft-collections.json';
import TraditionalArtCard from "./TraditionalArtCard";

import React, { useState, useEffect } from 'react';

export default function NftMain() { 
    return (
        <div className="overflow-hidden">
            <section class="d-flex flex-row flex-wrap justify-content-center align-items-center">
                {
                    nftdata.map(item => {
                        return(
                            <TraditionalArtCard 
                                title={item.title} 
                                editions={item.editions} 
                                url={item.src}
                                status={item.status} 
                                market={item.market} 
                                alt={item.alt}
                            />
                        )
                    })
                }

            </section>
        </div>
    )
}