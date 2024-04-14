import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from "react-icons/io5";
import { LuScale3D } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { saveProperty } from "../utilities/utility";

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((estates) => {
        const findEstate = estates.find((item) => item.id == id);
        setEstate(findEstate);
      });
  }, [id]);
  if (!estate) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-126px)]">
        <FadeLoader color="#38BDF8" />
      </div>
    );
  }
  const handleSave = (singleEstate) => {
    saveProperty(singleEstate);
  };
  const {
    image_url,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    description,
    facilities,
  } = estate;
  return (
    <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-10 relative mb-10">
      <Helmet>
        <title>ApexPlace | Estate Details</title>
      </Helmet>
      <div className="w-full max-h-[420px] overflow-hidden mx-auto flex justify-center items-center">
        <img className="max-w-full" src={image_url} alt="" />
      </div>
      <div className="flex justify-between items-center  mt-4">
        <p className="text-2xl font-semibold">{estate_title}</p>
        <p
          onClick={() => handleSave(estate)}
          className="btn btn-sm text-white bg-sky-400 px-2 "
        >
          Save
        </p>
      </div>
      <small className="text-zinc-400">{segment_name}</small>

      <div>
        <ul>
          <p className="text-zinc-900 font-medium">Facilities:</p>
          {facilities.map((item) => (
            <li className="text-sm text-zinc-600" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between py-2">
        <p className="flex items-center gap-1">
          <IoLocationOutline /> {location}
        </p>
        <h3 className="flex items-center gap-1">
          <LuScale3D /> {area}
        </h3>
      </div>
      <h3 className="pb-2 text-xl font-medium text-zinc-600 mb-4">{price}</h3>
      <div>
        <p className="font-medium">
          Description: <span className="font-normal">{description}</span>
        </p>
      </div>
      <div className="absolute text-sm top-[1%] left-[1%] bg-red-500 text-white px-2 rounded-md">
        {status}
      </div>
      <div className="py-4">
        <Link className="btn btn-sm bg-sky-400 text-white font-medium" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default EstateDetails;
