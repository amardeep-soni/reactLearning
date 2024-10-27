import Card from "./Card";
import { data } from "../../data";
import { useState } from "react";

const Body = () => {
    const [filteredData, setFilteredData] = useState(data)
    const filter = () => {
        let temp = data.filter(d => d.rating >= 4);
        setFilteredData(temp);
    }

    // whenever a state variable changes the componenet renders and updates the values in the componenet
    // normal variable changes doesnot render the component

    //  useState hook

    return (
        <div className="m-3">
            <div className="flex gap-2 mb-2">
                <button className="p-2 bg-blue-700 rounded-lg text-white" onClick={filter}>Show top 4</button>
                <button className="p-2 bg-blue-700 rounded-lg text-white" onClick={() => setFilteredData(data)}>Show All</button>
                <p>Count of Restaurants {filteredData.length}</p>
            </div>
            <div className="flex gap-4 flex-wrap">
                {filteredData.map((val) => (
                    <Card value={val} />
                ))}
            </div>
        </div>
    )
}
export default Body;