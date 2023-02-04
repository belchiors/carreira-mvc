import { useState, useEffect } from "react";
import ListView from "./ListView";

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("api/jobs")
            .then((response) => response.json())
            .then(setItems);
    }, []);

    return (
        <div className="content">
            <ListView items={items} />
        </div>
    );
}

export default Home;