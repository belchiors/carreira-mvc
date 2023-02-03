import { useEffect } from "react";
import ListView from "./ListView";

function Home() {
    return (
        <div className="content">
            <ListView items={items} />
        </div>
    );
}

export default Home;