const API = "https://superprof-students.herokuapp.com";
// const API = "http://localhost:9000";
const RESOURCES = "/student";
// const API = "https://jsonplaceholder.typicode.com";
const DRIVE =
  "https://drive.google.com/drive/u/1/folders/19HUQfCl7t7HV1GKOArywLpvcI2yJHeSq";
const MEET = "https://meet.google.com/landing?authuser=1";

const fetchData = (link, option = { method: "GET" }) =>
  fetch(`${API}${RESOURCES}${link}`, option).then((res) => res.json());

// const getStudents = () => fetchData("/users");
const getStudents = () => fetchData("/students");
const getStudent = (id) => fetchData(`/student/${id}`);

const deleteStudent = (id) => fetchData(`/delete/${id}`, { method: "DELETE" });

const createStudent = (option) => fetchData(`/create`, option);

const requestFetch = (method, body) => ({
  method,
  body: JSON.stringify(body),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export { getStudents, getStudent, deleteStudent, createStudent, requestFetch, DRIVE, MEET };
