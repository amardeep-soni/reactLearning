
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";

const DataModal = (props) => {
    const { onSubmit, handleShowModal } = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(props);

    return (
        <div className="bg-white h-screen w-full fixed bg-opacity-75 top-0 flex items-center justify-center">
            <div className="w-[350px] h-fit border-2 bg-white p-4 rounded">
                <div className="flex justify-between items-center text-2xl pb-2">
                    <p>Basic Modal</p>
                    <IoCloseCircle className="cursor-pointer" onClick={() => handleShowModal(false)} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between pb-2">
                        <p>Name:</p>
                        <input type="text" className="border-2" {...register("name")} />
                    </div>
                    <div className="flex justify-between pb-2">
                        <p>Email:</p>
                        <input type="email" className="border-2" {...register("email")} />
                    </div>
                    <div className="flex justify-between pb-2">
                        <p>Phone:</p>
                        <input type="number" className="border-2" {...register("phone")} />
                    </div>
                    <div className="flex justify-between pb-2">
                        <p>Website:</p>
                        <input type="url" className="border-2" {...register("url")} />
                    </div>
                    <div className="flex justify-between pb-2">
                        <p>Image url:</p>
                        <input type="url" className="border-2" {...register("imgurl")} />
                    </div>
                    <button className="bg-blue-700 rounded-lg p-4 w-full text-white" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default DataModal;