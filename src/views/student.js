import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getStudent } from "../apis/students";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const { name, email, cellphone, drive, meet } = student;

  useEffect(() => {
    let mounted = true;
    getStudent(id).then((student) => {
      if (mounted) setStudent(student);
    });
    return () => (mounted = false);
  }, [id]);

  return (
    <div className={"container-student p-4 bg-dak text-white gap-4"}>
      <div className="flex flex-col text-center py-4">
        <i className="fas fa-user-circle fa-10x" />
        <div className="flex-1 flex flex-col justify-around py-4">
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{cellphone}</p>
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
        </div>
        <textarea
          className="input-data text-black"
          rows="10"
          placeholder="Nota...."
       />
      </div>
      <div className="student-list-data">
        {/*create component for show lists*/}
        <div className="list">
          <h2>Resources</h2>
          <div className="list-scroll">

          </div>
        </div>
        <div className="list">
          <h2>Contents</h2>
          <div className="list-scroll">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
