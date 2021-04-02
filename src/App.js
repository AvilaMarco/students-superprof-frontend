import logo from './logo.svg';
import React from "react"
import './App.css';
import "./components/student_card";
import StudentCard from "./components/student_card";
import StudentCreateCard from "./components/student_create_card";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            students:[]
        }
    }

    toggleFlipContent({target}) {
        document.getElementById(target.dataset.id).classList.toggle("box-rotate-flip")
    }

    async setStudents(){
        const students = await fetch("").then(e => e.json()).then(j => j);
        console.log(students);
    }

    render(){
        return (
            <div className="App bg-black">
                <main className={"min-h-screen grid grid-cols-5 grid-rows-2 gap-2"}>
                    <StudentCard toggleFaceCard={this.toggleFlipContent}/>
                    <StudentCreateCard toggleFaceCard={this.toggleFlipContent}/>
                </main>
            </div>
        )
    }
}

export default App;
