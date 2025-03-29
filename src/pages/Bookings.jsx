import React from "react";
import { useParams } from "react-router";
import { halls } from "../data/booking";

const Bookings = () => {
  const params = useParams();
  const hallId = Number(params.hall_id);
  const selectedHall = halls.find((hall) => hall.id === hallId);

  return (
    <div>
      <h5 className="font-inter sm:text-sm text-xs text-[#868C98]">
        <span className="font-inherit text-black">Bookings /</span>
        <span>{selectedHall.name}</span>
      </h5>
      <h2 className="font-semibold font-inter mt-4 sm:text-2xl text-lg">
        {selectedHall.name}
      </h2>
    </div>
  );
};

export default Bookings;
