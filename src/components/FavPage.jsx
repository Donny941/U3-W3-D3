import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavPage = () => {
  const myFav = useSelector((state) => state.favourite.content);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-between align-items-center">
          <h1 className="display-1">Favourite Job-List</h1>
          <Link to="/">Back To Home</Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {myFav && myFav.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default FavPage;
