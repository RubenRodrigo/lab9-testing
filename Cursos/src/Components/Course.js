import { Fragment } from "react"
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = (props) => {
    const{course}= props
    const{name}= props.course
    return (
    <div>
      <Header name={name}/>
      <Content course={course} />
      <Total course={course}/>
    </div>
)
  

}

export default Course;
