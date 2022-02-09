import './App.css';
import {useEffect} from "react";
import ajax from "./api/ajax";

function Home() {
    useEffect(() => {
        ajax.get("/search");
    });
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Home section
                </p>
            </header>
        </div>
    );
}

export default Home;
