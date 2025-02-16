import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function NftArtCard({id, title, collection, editions, previewimg, status, market, alt, format, network}) { 
    return (
        <div key={id} className="nft-card m-1">
            <div className="d-flex justify-content-end m-1">
                        {collection != "none" && (
                        <Badge className="outline-blue-badge">
                            {collection}
                        </Badge>
                        )}
                        <Stack className="ms-1" direction="horizontal" gap={2}>
                            <Badge className="outline-badge">{network}</Badge>
                        </Stack>
                    </div>
                <section className="m-2 d-flex flex-column">
                    <h4 className="m-0">{title}</h4>
                </section>
                
                <section className="m-2">
                    {format == "video" 
                    ? 
                    (
                        <video 
                            controls 
                            className="align-self-center" 
                            width="220" 
                            height="auto" 
                            loading="lazy"
                            style={{ height: '100%' }} 
                            type="video/mp4"
                            >
                            <source src={previewimg} />
                            {alt}
                          </video>
                    )
                    : (<img src={previewimg} alt={format === 'gif' ? 'Embedded GIF' : 'Embedded Image'}  
                        width="220" 
                        height="auto" 
                        loading="lazy" 
                        style={{ width: '100%', height: 'auto' }} />)
                    }
                </section>
                <section className="m-1">
                    <div className="d-flex flex-row justify-content-center">
                        <p className="m-0">{editions}</p>
                        <Stack className="ms-1" direction="horizontal" gap={2}>
                            <Badge bg={status === "sold" ? "success" : "primary"}>{status}</Badge>
                        </Stack>
                    </div>
                    <div className="mb-2">
                        <a target="_blank" href={market}>
                        <i className="bi bi-arrow-up-right-circle-fill text-blue me-1"></i>
                            See on Market
                        </a>
                    </div>
                </section>
                
            </div>
    )
}