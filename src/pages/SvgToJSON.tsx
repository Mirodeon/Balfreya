import React, { useState } from "react";
import { useFormik } from "formik";
import { parse } from "svgson";

const SvgToJSON = () => {
  document.title = "Balfreya - Convert SVG to JSON";
  const [loading, setLoading] = useState(false);
  const [svgParsed, setSvgParsed] = useState("");
  const [message, setMessage] = useState("");

  const handleParseSvg = (svg: string) => {
    parse(svg)
      .then((res) => {
        setSvgParsed(JSON.stringify(res, null, 2));
        setLoading(false);
      })
      .catch((e) => {
        setMessage("Something went wrong.");
        console.log(e);
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      svg: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      setMessage("");
      setSvgParsed("");
      handleParseSvg(values.svg);
    },
  });

  return (
    <div className="container_converter_svg">
      <form onSubmit={formik.handleSubmit} className="form_converter_svg">
        <input
          className="input_svg"
          id="input_svg"
          type="svg"
          placeholder="Put a svg here."
          name="svg"
          value={formik.values.svg}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit" disabled={loading} className="nav_btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Convert
        </button>
        <p className="result_svg">
          {message ? message : svgParsed ? svgParsed : ""}
        </p>
      </form>
    </div>
  );
};

export default SvgToJSON;
