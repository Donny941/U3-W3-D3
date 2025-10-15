import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const myFav = useSelector((state) => state.favourite.content);

  const fav = myFav.find((job) => job._id === data._id);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #ffffff33", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {/* <Col className="text-end">
        <HeartFill
          onClick={() => {
            dispatch({ type: "ADD_TO_FAV", payload: data });
          }}
          color={fav ? "red" : "grey"}
          style={{ cursor: "pointer" }}
        />
      </Col> */}
      {fav ? (
        <Col className="text-end">
          <HeartFill
            onClick={() => {
              dispatch({ type: "REMOVE_FAV", payload: data });
            }}
            color="red"
            fontSize={20}
            style={{ cursor: "pointer" }}
          />
        </Col>
      ) : (
        <Col className="text-end">
          <HeartFill
            onClick={() => {
              dispatch({ type: "ADD_TO_FAV", payload: data });
            }}
            color="grey"
            fontSize={18}
            style={{ cursor: "pointer" }}
          />
        </Col>
      )}
    </Row>
  );
};

export default Job;
