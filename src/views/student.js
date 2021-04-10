import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getStudent } from "../apis/students";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const { name, email, phone } = student;

  useEffect(() => {
    let mounted = true;
    getStudent(id).then((student) => {
      if (mounted) setStudent(student);
    });
    return () => (mounted = false);
  }, [id]);

  return (
    <div className={"container-student p-4 bg-drive"}>
      <div className="flex flex-col text-center py-4">
        <i className="fas fa-user-circle fa-10x" />
        <div className="flex-1 flex flex-col justify-around py-4">
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{phone}</p>
          <button className="btn bg-drive">Drive</button>
          <button className="btn bg-meet">Meet</button>
        </div>
        <textarea
          className="input-data text-left"
          rows="7"
            placeholder="Nota...."
       />
      </div>
      <div className="student-list-data">
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
