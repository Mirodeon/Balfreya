import { useState } from "react";
import { useFormik } from "formik";
import { parse } from "svgson";
import { LayoutContainer, LayoutGrid } from "../components/factory";
import { NavBtnForm } from "../components/button";

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
    <LayoutContainer>
      <LayoutGrid gridTemplateAreas={""} title={"Balfreya - Convert SVG to JSON"}>
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
            <NavBtnForm className={""} content={"convert"} type={"submit"} loading={loading} />
            <p className="result_svg">
              {message ? message : svgParsed ? svgParsed : ""}
            </p>
          </form>
        </div>
      </LayoutGrid>
    </LayoutContainer>
  );
};

export default SvgToJSON;
