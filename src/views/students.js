import React from "react";
import StudentCard from "../components/student_card";
import StudentCreateCard from "../components/student_create_card";
import { toggleFlipContent, clipData } from "../funcionesAux/funciones";

const Students = ({ students }) => {
  return (
    <main className={"container-students"}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          toggleFaceCard={toggleFlipContent}
          copyClipBoard={clipData}
        />
      ))}
      <StudentCreateCard toggleFaceCard={toggleFlipContent} />
    </main>
  );
};

export default Students;
