/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import {
  BathIcon,
  BedIcon,
  DoorOpenIcon,
  HeartIcon,
  LandPlotIcon,
  MapPinIcon,
} from "lucide-react";
import CommonButton from "./CommonButton";
import { useNavigate } from "react-router-dom";

const ListingItem = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div
      className='cursor-pointer'
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <Card className='relative w-[400px] bg-cream shadow-none'>
        <CardHeader>
          <Image
            className='w-[370px]'
            src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </CardHeader>
        <div className='absolute left-6 top-8 z-10 flex items-center justify-between'>
          <span className='rounded-full bg-cream px-6 py-1.5 text-lg font-semibold capitalize text-voiletBlue'>
            {property.listingType}
          </span>
          <span className='absolute -right-[200px] rounded-full bg-cream p-2.5'>
            <HeartIcon size={20} color='#3639e4' />
          </span>
        </div>
        <CardBody className='-mt-3 space-y-4'>
          <span className='flex items-center text-sm text-gray-800'>
            <MapPinIcon color='#b8a377' className='mr-2' />{" "}
            {property.postalCode} {property.city}.{" "}
          </span>
          <h3 className='text-xl font-semibold text-stone-800'>
            {property.propertyWithAddress}
          </h3>
          <ul className='flex items-center gap-4 text-gray-800'>
            <li className=''>
              <DoorOpenIcon /> {property.room}{" "}
              {property.room > 1 ? "Rooms" : "Room"}
            </li>
            <Divider className='h-10 opacity-30' orientation='vertical' />
            <li className=''>
              {" "}
              <BedIcon /> {property.bed} {property.bed > 1 ? "Beds" : "Bed"}
            </li>
            <Divider className='h-10 opacity-30' orientation='vertical' />
            <li className=''>
              {" "}
              <BathIcon />
              {property.bath} {property.bath > 1 ? "Baths" : "Bath"}
            </li>
            <Divider className='h-10 opacity-30' orientation='vertical' />
            <li className=''>
              {" "}
              <LandPlotIcon /> {property.area}
            </li>
          </ul>
          <Divider className='dotted opacity-30' />
          <div className='flex items-center justify-between'>
            <p className='text-stone-800'>
              <span className='text-2xl font-semibold text-voiletBlue'>
                {property.price}
              </span>{" "}
              /month
            </p>
            <CommonButton text={"read more"} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListingItem;
