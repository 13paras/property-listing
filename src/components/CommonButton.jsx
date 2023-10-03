/* eslint-disable react/prop-types */

const CommonButton = ({ text }) => {
  return (
    <button className='rounded-full border border-[#3639e4] px-5 py-2 text-lg font-semibold capitalize text-voiletBlue hover:shadow-md'>
      {text}
    </button>
  );
};

export default CommonButton;
