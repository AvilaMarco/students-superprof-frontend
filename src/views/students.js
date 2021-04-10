import React from "react";
import StudentCard from "../components/student_card";
import StudentCreateCard from "../components/student_create_card";
import { toggleFlipContent, clipData } from "../funcionesAux/funciones";

const Students = ({ students, update }) => {
  return (
    <main className={"container-students"}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          toggleFaceCard={toggleFlipContent}
          copyClipBoard={clipData}
          updateStudents={update}
        />
      ))}
      <StudentCreateCard toggleFaceCard={toggleFlipContent} updateStudents={update}/>
    </main>
  );
};

export default Students;
