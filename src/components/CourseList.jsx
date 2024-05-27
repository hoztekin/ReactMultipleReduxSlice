import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    // return state.courses.data;
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { courses: filteredCourses };
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>Adı :{course.name}</h1>
        <p>Açıklama :{course.description}</p>
        <p>Fiyat : {course.cost}</p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
