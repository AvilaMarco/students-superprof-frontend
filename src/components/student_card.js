import React from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import {deleteStudent} from "../apis/students";

const StudentCard = ({ student, toggleFaceCard, copyClipBoard, updateStudents }) => {
  const { id, name, email, cellphone, drive, meet } = student;

  async function Delete(){
    const message = await deleteStudent(id)
    await swal(message.msg);
    await updateStudents()
  }

  return (
    <div className={"box-rotate p-4"} id={id}>
      <div className={"box-rotate-front justify-center items-center"}>
        <div className={"user-face"}>
          <i
            className="fas fa-user-circle fa-7x"
            data-id={id}
            onClick={toggleFaceCard}
          />
          <h2 className={"p-2"}>{name}</h2>
        </div>
      </div>
      <div className={"box-rotate-back justify-between"}>
        <p
          className={"item-data copy"}
          data-email={email}
          onClick={copyClipBoard}
        >
          {email}
        </p>
        <p
          className={"item-data copy"}
          data-phone={cellphone}
          onClick={copyClipBoard}
        >
          {cellphone || "1161862698"}
        </p>
        <a
          className={"item-data bg-meet text-white"}
          href={meet}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <i className="fas fa-video" /> Google Meet
        </a>
        <a
          className={"item-data bg-drive text-white"}
          href={drive}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <i className="fab fa-google-drive" /> Google Drive
        </a>

        <div className={"flex bnt-group"}>
          <button className={"btn btn-warning flex-1"}>Edit</button>
          <button
              className={"btn btn-danger flex-1"}
              onClick={Delete}
          >
            Delete
          </button>
        </div>
        <div className={"flex justify-between"}>
          <Link className={"btn btn-info"} to={`users/${id}`}>
            <i className="fas fa-address-card" /> Information
          </Link>
          <i
            className="fas fa-undo-alt fa-2x text-green-600"
            data-id={id}
            onClick={toggleFaceCard}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
