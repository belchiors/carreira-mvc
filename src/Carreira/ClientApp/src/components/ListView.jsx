import ListItem from './ListItem';

function ListView({items, onItemSelected}) {
    return (
        <ul className="list-view">
            {
                items.map((i) => (
                    <li className="list-item">
                        <ListItem {...i} onClick={() => onItemSelected(i.id)} />
                    </li>
                ))
            }
        </ul>
    );
}

export default ListView;