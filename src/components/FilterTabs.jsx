import { Tab, Tabs } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setCity } from "../redux/slices/propertiesSlice";
import { useLocation, useParams } from "react-router-dom";

const FilterTabs = () => {
  const dispatch = useDispatch();
  const cities = ["New York", "Mumbai", "Paris", "London", "Faridabad"];
  const location = useLocation();
  console.log(location.pathname);
  const handleClick = (key) => {
    dispatch(setCity(key));
  };

  return (
    <div className='mt-10 flex flex-wrap justify-center gap-4 bg-websiteBase'>
      {location.pathname === "/" && (
        <Tabs
          aria-label='Options'
          classNames={{
            tabList: "gap-6 w-full relative rounded-none ",
            cursor: "w-full bg-[#3639e4]",
            tab: " h-14",
            tabContent: "group-data-[selected=true]:text-[#f4f5fd]",
          }}
          radius='full'
          onSelectionChange={handleClick}
        >
          {cities.map((city) => (
            <Tab
              className='h-10 w-24 px-4 text-base font-semibold text-zinc-700'
              key={city}
              title={city}
              onClick={() => handleClick(city)}
            />
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default FilterTabs;
