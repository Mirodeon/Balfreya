import Slide from "../slider/Slide";
import { data as dataImg } from "../../img";
import { DataLayoutGridChildren } from "../../type/type";

type LayoutGridChildren = {
    data: DataLayoutGridChildren;
}
const LayoutGridChildren = ({ data }: LayoutGridChildren) => {
    switch (data.model) {
        case 1: return <Slide data={dataImg} gridArea={data.gridArea} width={"100%"} slideHeight={"300px"} />
        case 2: return <Slide data={dataImg} gridArea={data.gridArea} width={"100%"} slideHeight={"100%"} />
        case 3: return <Slide data={dataImg} gridArea={data.gridArea} width={"100%"} slideHeight={"100%"} />
        default: return <Slide data={dataImg} gridArea={data.gridArea} width={"100%"} slideHeight={"100%"} />
    }
}

export default LayoutGridChildren;