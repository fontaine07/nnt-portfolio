import { Col } from "react-bootstrap";
import { Button } from "antd";

const ProjectCard = ({ title, description, imgUrl, pjUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl}/>
        <div className="proj-txtx">          
          <h4><a href={pjUrl} target="_blank">{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard