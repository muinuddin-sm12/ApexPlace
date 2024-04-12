import { IoLocationOutline } from "react-icons/io5";
import { LuScale3D } from "react-icons/lu";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Estate = ({ estate }) => {
  const {
    id,
    image_url,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
  } = estate;
  // console.log(estate)
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="border p-2 relative flex flex-col justify-between">
      <div className="h-[200px] overflow-hidden">
        <img className="object-cover h-full w-full" src={image_url} alt="" />
      </div>
      <div className="px-2">
        <p className="text-xl font-medium mt-3">{estate_title}</p>
        <p className="text-sm">{segment_name}</p>
        <div className="flex justify-between py-2">
          <p className="flex items-center gap-1">
            <IoLocationOutline /> {location}
          </p>
          <h3 className="flex items-center gap-1">
            <LuScale3D /> {area}
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 border-t py-3">
        <h3 className="text-zinc-500 font-semibold">{price}</h3>
        <Link
          to={`/estate/${id}`}
          className="bg-sky-400 text-white font-medium px-2 py-1 rounded-md"
        >
          View Property
        </Link>
      </div>
      <div className="absolute text-sm top-[4%] left-[5%] bg-red-500 text-white px-2 rounded-md">
        {status}
      </div>
    </div>
  );
};

export default Estate;

Estate.propTypes = {
  estate: PropTypes.array,
};
