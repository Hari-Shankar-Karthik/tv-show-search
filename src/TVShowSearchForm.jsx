import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm, Controller } from "react-hook-form";

export default function TVShowSearchForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="4">
          <Form.Label htmlFor="searchFor">Search For</Form.Label>
          <Controller
            name="searchFor"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Please select an option",
              },
              minLength: {
                value: 1,
                message: "Please select an option",
              },
            }}
            render={({ field }) => (
              <Form.Select {...field} aria-label="searchFor">
                <option value="">Open this select menu</option>
                <option value="shows">Shows</option>
                <option value="people">People</option>
              </Form.Select>
            )}
          />
          {errors.searchFor && (
            <Form.Text className="text-danger">
              {errors.searchFor.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label htmlFor="searchKeyword">Search Keyword</Form.Label>
          <Form.Control
            id="searchKeyword"
            name="searchKeyword"
            type="text"
            {...register("searchKeyword", {
              required: {
                value: true,
                message: "Please enter a search keyword",
              },
            })}
          />
          {errors.searchKeyword && (
            <Form.Text className="text-danger">
              {errors.searchKeyword.message}
            </Form.Text>
          )}
        </Form.Group>
      </Row>
      <Row className="justify-content-center">
        <Button className="col-md-4" type="submit">
          Submit form
        </Button>
      </Row>
    </Form>
  );
}
