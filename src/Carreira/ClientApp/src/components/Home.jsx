import { useState, useEffect } from "react";
import DetailsModal from "./DetailsModal";
import ListView from "./ListView";

function Home() {
    const [items, setItems] = useState([]);
    const [showModal, setModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const onItemSelected = (id) => {
        setModal(!showModal);
        setSelectedItem(id);
    }

    const onModalClose = () => {
        setModal(!showModal);
    }

    useEffect(() => {
        fetch("api/jobs")
            .then((response) => response.json())
            .then(setItems);
    }, []);

    return (
        <div className="content">
            <ListView items={items} onItemSelected={onItemSelected} />
            {showModal ? (
                <div className="modal">
                    <DetailsModal
                        id={selectedItem}
                        onModalClose={onModalClose}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default Home;