import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CommonButton from "./CommonButton";
import ListingItem from "./ListingItem";

const PropertyDetails = () => {
  const params = useParams();
  const property = useSelector((state) => state.property.properties);
  const filter = property.filter(
    (item) => item.id === Number(params.id) && item
  );

  return (
    <div className='mt-10'>
      <div className='flex justify-center'>
        <button className='mb-10 rounded-full border border-[#3639e4] px-5 py-2 text-lg font-semibold capitalize text-voiletBlue hover:shadow-md'>
          <Link to={"/"}>Home</Link>
        </button>
      </div>
      <div className='flex justify-center'>
        <ListingItem property={filter[0]} />
      </div>
    </div>
  );
};

export default PropertyDetails;
