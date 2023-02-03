import ListItem from './ListItem';

function ListView({items}) {
    return (
        <ul className="list-view">
            {
                items.map((i) => (
                    <li className="list-item">
                        <ListItem {...i} />
                    </li>
                ))
            }
        </ul>
    );
}

export default ListView;