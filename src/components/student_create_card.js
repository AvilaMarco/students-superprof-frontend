import React from "react";

class StudentCreateCard extends React.Component {
    render() {
        return (
            <div className={"box-rotate"} id={"student-create"}>
                <div className={"box-rotate-front justify-center items-center"}>
                    <i className="fas fa-plus-circle fa-7x text-white" data-id={"student-create"} onClick={this.props.toggleFaceCard}/>
                </div>
                <div className={"box-rotate-back"}>
                    <input
                        type="text"
                        placeholder={"Name"}
                        className={"input-data"}
                    />
                    <input
                        type="number"
                        placeholder={"Cell Phone"}
                        className={"input-data"}
                    />
                    <input
                        type="text"
                        placeholder={"Email"}
                        className={"input-data"}
                    />
                    <input
                        type="text"
                        placeholder={"Google Meet"}
                        className={"input-data"}
                    />
                    <input
                        type="text"
                        placeholder={"Google Drive"}
                        className={"input-data"}
                    />
                    <div className={"flex justify-between"}>
                        <button className={"btn btn-info"}>
                            Create Student
                        </button>
                        <button className={"btn btn-danger"} data-id={"student-create"} onClick={this.props.toggleFaceCard}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentCreateCard;
