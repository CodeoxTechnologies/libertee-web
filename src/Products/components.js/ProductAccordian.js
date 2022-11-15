import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
    position: "abs",
  },
}));
const ProductAccordian = () => {
  const classes = useStyles();
  return (
    <div className="product-detail-accordian">
      <Accordion
        elevation={0}
        style={{ borderRadius: "20px", margin: "10px", border: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p className="product-detail-accordian-title">Product Information</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="product-detail-accordian-paragraph">
            A sleek & discreet full-body massager with a pointed tip and
            powerful vibrations, to hit all your sweet spots. vibrating, ribbed
            massager for her ultimate pleasure. With 10 powerful speed settings,
            rabbit is a handy love-glove to satisfy all your desires.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        style={{ borderRadius: "20px", margin: "10px", border: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p className="product-detail-accordian-title">How to Use</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="product-detail-accordian-paragraph">
            A sleek & discreet full-body massager with a pointed tip and
            powerful vibrations, to hit all your sweet spots. vibrating, ribbed
            massager for her ultimate pleasure. With 10 powerful speed settings,
            rabbit is a handy love-glove to satisfy all your desires.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        style={{ borderRadius: "20px", margin: "10px", border: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <p className="product-detail-accordian-title">What is in the box</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="product-detail-accordian-paragraph">
            A sleek & discreet full-body massager with a pointed tip and
            powerful vibrations, to hit all your sweet spots. vibrating, ribbed
            massager for her ultimate pleasure. With 10 powerful speed settings,
            rabbit is a handy love-glove to satisfy all your desires.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ProductAccordian;
