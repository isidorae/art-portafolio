import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function TraditionalArtCard({title, editions, url, status, market, alt}) { 
    return (
        <div className="nft-card m-1">
                <section className="m-2">
                    <h4 class="m-0">{title}</h4>
                </section>
                <section className="m-2">
                    <a target="_blank" href={market}>
                        <video className="align-self-center" width="100%" style={{ height: 'auto', maxWidth: '100%' }}>
                            <source src={url} />
                            {alt}
                          </video>
                    </a>
                </section>
                <section className="m-1">
                    <div class="d-flex flex-row justify-content-center">
                        <p class="m-0">{editions}</p>
                        <Stack className="ms-1" direction="horizontal" gap={2}>
                            <Badge bg={status === "sold" ? "success" : "primary"}>{status}</Badge>
                        </Stack>
                    </div>
                    <div className="mb-2">
                        <a target="_blank" href={market}>See on Market</a>
                    </div>
                </section>
            </div>
    )
}