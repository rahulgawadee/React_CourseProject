import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {
    let category = props.category;
    let courses = props.courses;            // Courses ka sara data mil gaya
    const [likedCourse,setlikedCourse] = useState([]);
   
   

    
    function getCourses() {
      if (category === "All") {
          let allCourses = [];
          Object.values(props.courses).forEach((array) => {
              array.forEach((courseData) => {
                  allCourses.push(courseData);
              });
          });
          return allCourses;
      }
      else
      {
        // main sirf specific category ka data array karung
          return props.courses[category];
      }
  }
    
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course) =>(
            <Card key = {course.id } course ={course} 
            likedCourse ={likedCourse}
            setlikedCourse ={setlikedCourse} />              // we should give the key after the map because its a good practice
        )
        )
      }
    </div>
  )
}

export default Cards
