import { useState, useEffect } from "react";

function DetailsModal({id, onModalClose}) {
    const [item, setItem] = useState();
   
    useEffect(() => {
        fetch(`api/jobs/${id}`)
            .then((response) => response.json())
            .then(setItem);
    }, [id]);

    return (
        <div className="modal-content">
            <div className="modal-header">
                <span class="close" onClick={onModalClose}>&times;</span>
                <h3>{item?.title}</h3>
                <div className="metadata">
                    <span className="d-block">{item?.companyLocation}</span>
                    <span className="d-block">{item?.companyName}</span>
                    <span className="d-block">
                        Anunciada em: {new Date(item?.createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
            <div className="modal-body">
                <div className="description">{item?.description}</div>
            </div>
            <div className="modal-footer">
                <a className="button button-primary" href={`mailto:${item?.companyEmail}?subject=${item?.title}`}>
                    Candidate-se
                </a>
            </div>
        </div>
    );
}

export default DetailsModal;