import { IoLocationOutline } from "react-icons/io5";
import { LuScale3D } from "react-icons/lu";
import PropTypes from "prop-types";

const SavedCart = ({ property }) => {
  const {
    image_url,
    location,
    price,
    segment_name,
    status,
    area,
    estate_title,
  } = property;
  return (
    <div className="flex flex-col mb-3 w-[80%] md:w-2/3  mx-auto px-5">
      <div className="min-h-[180px] flex flex-col md:flex-row relative  md:gap-6 border">
        <div className="h-[180px] overflow-hidden bg-pink-200">
          <img className="h-full w-full object-cover" src={image_url} alt="" />
        </div>
        <div className="flex-auto pr-6 pl-3 mt-1">
          <p className="text-xl font-medium text-zinc-600">{estate_title}</p>
          <p className="text-sm text-zinc-400">{segment_name}</p>
          <div className="flex flex-col md:flex-row justify-between md:items-center text-zinc-600">
            <h3 className="flex items-center">
              <IoLocationOutline />
              {location}
            </h3>
            <h3 className="flex items-center gap-1">
              <LuScale3D />
              {area}
            </h3>
          </div>
          <p className="text-lg font-semibold text-sky-400">{price}</p>
          <div className="py-3">
            <button className="btn btn-sm px-6 bg-sky-400 text-white">
              Buy
            </button>
          </div>
        </div>
      </div>
      <p className="absolute text-sm mt-1 ml-1 bg-red-500 text-white px-2 rounded-md">
        {status}
      </p>
    </div>
  );
};

export default SavedCart;

SavedCart.propTypes = {
  property: PropTypes.array,
};
