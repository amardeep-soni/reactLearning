import { Data } from "../../Data";
import Card from "./Card";
import DataModal from "./DataModal";
import { useState } from "react";

const Body = () => {
    const [users, setUsers] = useState(Data);
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState("");

    const onSubmit = (data) => {
        users[id].name = data.name;
        users[id].email = data.email;
        users[id].phone = data.phone;
        users[id].url = data.url;
        users[id].imgurl = data.imgurl;

        setShowModal(false);
    }

    const handleShowModal = (status) => {
        setShowModal(status);
    }

    const handleId = (id) => {
        setId(id);
    }


    return (
        <div className="m-2 flex flex-wrap">
            {showModal ? (
                <DataModal onSubmit={onSubmit} handleShowModal={handleShowModal} />
            ) : ("")}
            {users.map((val) => (
                <Card key={val.id} handleId={handleId} value={val} handleShowModal={handleShowModal} />
            ))}
        </div>
    )
}
export default Body;