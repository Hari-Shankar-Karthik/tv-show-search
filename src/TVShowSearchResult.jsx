import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function TVShowSearchResult({ searchResult }) {
  if (searchResult.isLoading) {
    return <div className="TVShowSearchResult">Loading...</div>;
  }
  const { searchType } = searchResult;
  return (
    <Row>
      {searchResult.matches
        .filter((match) => match[searchType].image !== null)
        .map((match) => (
          <Col key={match[searchType].id} lg={3} md={4} sm={6} className="mb-3">
            <Card>
              <Card.Img variant="top" src={match[searchType].image.medium} />
              <Card.Body>
                <Card.Title>{match[searchType].name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
}
