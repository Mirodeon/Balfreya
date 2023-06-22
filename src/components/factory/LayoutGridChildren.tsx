import Slide from "../slider/Slide";
import { data as dataImg } from "../../img";
import { DataLayoutGridChildren } from "../../type/type";

type LayoutGridChildrenProps = {
    data: DataLayoutGridChildren;
}
const LayoutGridChildren = ({ data }: LayoutGridChildrenProps) => {
    switch (data.model) {
        case 1: return <Slide data={dataImg} gridArea={data.gridArea} id={data.id} width={"100%"} height={"100%"} />
        case 2: return <Slide data={dataImg} gridArea={data.gridArea} id={data.id} width={"100%"} height={"300px"} />
        case 3: return <Slide data={dataImg} gridArea={data.gridArea} id={data.id} width={"100%"} height={"300px"} />
        default: return <Slide data={dataImg} gridArea={data.gridArea} id={data.id} width={"100%"} height={"300px"} />
    }
}

export default LayoutGridChildren;