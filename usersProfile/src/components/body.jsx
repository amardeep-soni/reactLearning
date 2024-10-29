import { Data } from "../../Data";
import Card from "./Card";
import DataModal from "./DataModal";

const Body = () => {
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="m-2 flex flex-wrap">
            <DataModal onSubmit={onSubmit} />
            {Data.map((val) => (
                <Card value={val} />
            ))}
        </div>
    )
}
export default Body;