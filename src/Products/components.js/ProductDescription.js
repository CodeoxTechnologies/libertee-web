import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import rupees from "../../assets/images/rupee.png";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupedButtons from "./ButtonGroups";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#f2f2f2",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 600,
  },
}));
const ProductDescription = ({ product }) => {
  const classes = useStyles();
  return (
    <div className="product-detail-description">
      <div className="product-detail-description-top">
        <p className="product-detail-description-top-title">{product.name}</p>
      </div>
      <div className="product-detail-description-price">
        <p>
          <strong> Rs {product.price}/-</strong>
        </p>
      </div>
      <div className="product-detail-description-rating">
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
        <p className="product-detail-description-rating-count">143 Reviews </p>
      </div>
      <div className="product-detail-description-short">
        A sleek & discreet full-body massager with a pointed tip and powerful
        vibrations, to hit all your sweet spots. vibrating, ribbed massager for
        her ultimate pleasure. With 10 powerful speed settings, rabbit is a
        handy love-glove to satisfy all your desires.
      </div>

      {/* <div className={classes.root}>
        <Accordion elevation={0} style={{ background: "#f2f2f2" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Product Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} style={{ background: "#f2f2f2" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>How to Use</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} style={{ background: "#f2f2f2" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              What is in the box
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div> */}
      <div className="product-detail-description-color">
        <p className="product-detail-description-color-title">Color : </p>
        <div className="product-detail-description-color-<list">
          {product.color.map((item, index) => (
            <FiberManualRecordRoundedIcon
              style={{ color: item.color, fontSize: "80px" }}
            />
          ))}
        </div>
      </div>
      <div className="product-detail-description-quantity">
        <p className="product-detail-description-quantity-title">Quantity : </p>
        <div className="product-detail-description-quanrtity-counter">
          <GroupedButtons />
        </div>
      </div>
      <div className="add-to-cart">
        <button className="button-black button-big">Add to Cart </button>
        <button className="button-white button-big">Buy Now </button>
      </div>
    </div>
  );
};
export default ProductDescription;
