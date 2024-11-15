import { RiMapPin2Fill } from "react-icons/ri";
import { MdPedalBike } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
const Card = (props) => {
  const { propData } = props;
  const {
    VendorListingWebImageName,
    Name,
    Address1,
    DeliveryDistanceStr,
    CuisineTags,
  } = propData;
  return (
    <div className="h-80 w-96 flex flex-col border-[1px] shadow-md border-black  rounded-md">
      <img
        className="h-1/2 w-full rounded-md grow"
        src={VendorListingWebImageName}
        alt=""
      />
      <div className="flex flex-col gap-1 p-4">
        <p>{Name}</p>
        <div className="flex gap-4">
          <div className="flex items-center">
            <RiMapPin2Fill />
            {Address1}
          </div>
          <div className="flex items-center">
            <MdPedalBike />
            {DeliveryDistanceStr}
          </div>
        </div>
        <div className="flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
        <span className=" items-start flex justify-start">
        <IoFastFood />
        </span>
          <span className="ml-1 overflow-hidden whitespace-nowrap text-ellipsis">{CuisineTags}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;