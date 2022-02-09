import './App.css';
import ajax from "./api/ajax";
import {useEffect} from "react";

function About() {
    useEffect(() => {
        ajax.get("/search");
    });
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    About section
                </p>
            </header>
        </div>
    );
}

export default About;
