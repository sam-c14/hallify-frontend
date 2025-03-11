import React from "react";
import Favorites from "../assets/icons/favorites";
import Star from "../assets/icons/star";
import Guests from "../assets/icons/guests";

const VenueCard = ({
  isLiked,
  cardImg,
  location,
  name,
  starCount,
  reviewCount,
  guestCapacity,
  rate,
}) => {
  return (
    <div className="flex flex-col gap-y-3 font-inter">
      <div className="relative rounded-lg min-w-[230px] max-w-[232px] h-[195px]">
        <img
          src={cardImg}
          alt="venue-img"
          className="w-full h-full rounded-lg"
        />
        <button className="absolute top-3.5 right-2 rounded-full bg-white p-2">
          <Favorites />
        </button>
      </div>
      {/* Card Info */}
      <h5 className="text-gray-500 uppercase sm:text-sm text-xs">{location}</h5>
      <h4 className="font-semibold capitalize sm:text-base text-sm">{name}</h4>
      <div className="flex items-center gap-x-3">
        <Star />
        <p className="text-gray-500 font-inter sm:text-sm text-xs">
          {starCount} Star • {reviewCount} Reviews
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <Guests />
        <p className="text-gray-500 font-inter sm:text-sm text-xs">
          {guestCapacity} Guests
        </p>
      </div>
      <p className="font-semibold font-inter sm:text-base text-sm">
        NGN {rate}{" "}
      </p>
    </div>
  );
};

export default VenueCard;
