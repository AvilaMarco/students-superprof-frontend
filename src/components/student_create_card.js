import React from "react";
import swal from "sweetalert";
import { createStudent, requestFetch, DRIVE, MEET } from "../apis/students";

const StudentCreateCard = (props) => {
  function dataStudent(e) {
    e.preventDefault();
    const entries = [...document.querySelectorAll("input")];
    const student = entries.reduce((student, { name, value }) => {
      student[name] = value;
      return student;
    }, {});
    if (entries.some(({ value }) => value === "")) return;
    createStudent(requestFetch("POST", student)).then(() => {
      document.getElementById("create-student").reset();
      document.getElementById("btn-toggle").click();
      swal("Create Student");
    });
  }

  return (
    <div className={"box-rotate"} id={"student-create"}>
      <div className={"box-rotate-front justify-center items-center"}>
        <i
          className="fas fa-plus-circle fa-7x text-white"
          data-id={"student-create"}
          onClick={props.toggleFaceCard}
        />
      </div>
      <div id={"create-student"} className={"box-rotate-back"}>
        <input
          name={"name"}
          type="text"
          placeholder={"Name"}
          className={"input-data"}
        />
        <input
          name={"cellphone"}
          type="number"
          placeholder={"Cell Phone"}
          className={"input-data"}
        />
        <input
          name={"email"}
          type="text"
          placeholder={"Email"}
          className={"input-data"}
        />
        <div className={"create-link"}>
          <input
            name={"meet"}
            type="text"
            placeholder={"Google Meet"}
            className={"input-data"}
          />
          <a className={"btn bg-meet"} href={MEET} target={"_blank"} rel="noreferrer">
            Meet
          </a>
        </div>
        <div className={"create-link"}>
          <input
            name={"drive"}
            type="text"
            placeholder={"Google Drive"}
            className={"input-data"}
          />
          <a className={"btn bg-drive"} href={DRIVE} target={"_blank"} rel={"noreferrer"}>
            Drive
          </a>
        </div>
        <div className={"flex justify-between"}>
          <button className={"btn btn-info"} onClick={dataStudent}>
            Create Student
          </button>
          <button
            id={"btn-toggle"}
            className={"btn btn-danger"}
            data-id={"student-create"}
            onClick={props.toggleFaceCard}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCreateCard;
