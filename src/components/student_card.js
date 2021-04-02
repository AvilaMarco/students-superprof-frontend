import React from 'react';

class StudentCard extends React.Component{
    render(){
        return (
        <div className={"box-rotate p-4"} id={"student-card"}>
            <div className={"box-rotate-front"}>
                <div className={"student-card h-full"}>
                    <h1 className={"item-data"}>Name Student</h1>
                    <p className={"item-data"}>Email@student.com</p>
                    <p className={"item-data"}>1161862698</p>
                    <a  className={"item-data"} href="#">Google Meet</a>
                    <a  className={"item-data"} href="#">Google Drive</a>
                    <div className={"flex justify-between"}>
                        <button className={"btn btn-info"}>Complete Information</button>
                        <button className={"btn btn-info"} data-id={"student-card"} onClick={this.props.toggleFaceCard}>Options</button>
                    </div>
                </div>
            </div>
            <div className={"box-rotate-back"}>
                <button className={"btn btn-info"}>Edit</button>
                <button className={"btn btn-info"}>Delete</button>
                <button className={"btn btn-info"} data-id={"student-card"} onClick={this.props.toggleFaceCard}>Info Student</button>
            </div>
        </div>
    )}
}

export default StudentCard;