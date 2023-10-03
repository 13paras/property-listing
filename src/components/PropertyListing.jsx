import React, { useEffect, useState } from "react";
import ListingItem from "./ListingItem";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";

const PropertyListing = () => {
  const { properties, city } = useSelector((state) => state.property);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showProperties, setShowProperties] = useState(6);

  useEffect(() => {
    const filteredProperties = properties.filter(
      (property) => property.city === city
    );
    setFilteredProperties(filteredProperties.slice(0, showProperties));
  }, [city, properties, showProperties]);
  useEffect(() => {
    setShowProperties(6);
  }, [city]);
  const loadMore = () => {
    setShowProperties((prev) => prev + 3);
  };
  return (
    <div className='mt-10'>
      <div className='flex flex-wrap gap-3'>
        {filteredProperties.map((property) => (
          <ListingItem key={property.index} property={property} />
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
        <Button onClick={loadMore} className=' bg-voiletBlue text-cream'>
          Show More
        </Button>
      </div>
    </div>
  );
};

export default PropertyListing;
