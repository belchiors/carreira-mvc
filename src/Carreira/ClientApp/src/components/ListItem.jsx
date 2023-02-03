function ListItem({id, title, description, companyName, companyLocation}) {
    return (
        <div className="">
            <h4 className="">{title}</h4>
            <div className="">
                <span>{companyName}</span>
                <span>{companyLocation}</span>
            </div>
            <div className="">{description?.substring(0, 255)}</div>
        </div>
    );
}

export default ListItem;