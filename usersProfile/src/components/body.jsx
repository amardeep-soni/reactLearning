import { Data } from "../../Data";
import Card from "./Card";

const Body = () => {
    return (
        <div className="m-2 flex flex-wrap">
            {Data.map((val) => (
                <Card value={val} />
            ))}
        </div>
    )
}
export default Body;