import React from "react";
import { makeStyles } from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import { Paper } from "@material-ui/core";
const Testimonials = ({ testimonialsList }) => {
  const [value, setValue] = React.useState(5);
  return (
    <div className="product-detail-testimonials">
      <div className="product-detail-testimonials-title">Testimonials</div>
      <div className="product-detail-testimonials-list">
        {testimonialsList.slice(0, value).map((testimonial, index) => {
          return (
            <Paper
              elevation={0}
              key={index}
              className="product-detail-testimonials-list-paper"
            >
              <div className="product-detail-testimonials-list-item">
                <p className="product-detail-testimonials-list-item-name">
                  {testimonial.name}
                </p>
                {testimonial.rating ? (
                  <div className="product-detail-testimonials-item-rating">
                    <Rating
                      name="half-rating-read"
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                ) : null}
                <p className="product-detail-testimonials-list-item-title">
                  {testimonial.title}
                </p>

                <p className="product-detail-testimonial-list-item-content">
                  {testimonial.content}
                </p>
                {testimonial.images && testimonial.images.length > 0 ? (
                  <div className="product-detail-tesimonial-list-item-images">
                    {testimonial.images.map((image, index) => {
                      return <img src={image} className />;
                    })}
                  </div>
                ) : null}
              </div>
            </Paper>
          );
        })}
      </div>
      <div className="product-detail-testimonials-show-more">
        {value >= testimonialsList.length ? (
          <button className="button-black" onClick={() => setValue(5)}>
            show less
          </button>
        ) : (
          <button className="button-black" onClick={() => setValue(value + 5)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};
export default Testimonials;
