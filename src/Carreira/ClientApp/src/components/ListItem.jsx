function ListItem({id, title, description, companyName, companyLocation, createdAt, onClick}) {
    return (
        <div className="list-item-content">
            <div className="list-item-header">
                <h4>{title}</h4>
                <div className="metadata">
                    <span className="d-block">{companyName}</span>
                    <span className="d-block">{companyLocation}</span>
                    <span className="d-block">
                        Anunciada em: {new Date(createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
            <div className="list-item-body">
                <div className="description">
                    {description?.substring(0, 144)}
                </div>
            </div>
            <div className="list-item-footer">
                <button className="button button-primary is-full" type="button" onClick={onClick}>
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
}

export default ListItem;