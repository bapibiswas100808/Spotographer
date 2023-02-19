import React from "react";
import AllImage from "../AllImage/AllImage";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Moments.css";

const Moments = () => {
  return (
    <section className="moments-area">
      <SectionHeading heading="Some Moments" />
      <AllImage />
    </section>
  );
};

export default Moments;
