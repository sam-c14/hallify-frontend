import React from "react";
import VenueCard from "./VenueCard";
import { useNavigate } from "react-router";

const VenueList = ({ venues, title, description, xlCount }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-2 font-inter">
      <h3 className="font-semibold sm:text-2xl text-lg text-start">{title}</h3>
      {description && (
        <p className="sm:text-base text-sm text-neutral-900 my-0">
          {description}
        </p>
      )}
      <div
        className={`grid gap-x-3 gap-y-6 place-items-center mt-2 md:grid-cols-3 grid-cols-1 xl:grid-cols-${
          xlCount ?? 5
        }`}
      >
        {venues.map((venue, index) => (
          <VenueCard
            onClick={() => navigate(`/hall/${venue.id}`)}
            key={index}
            cardImg={venue.src}
            guestCapacity={venue.guestCapacity}
            location={venue.location}
            name={venue.name}
            rate={venue.rate}
            reviewCount={venue.reviewCount}
            starCount={venue.starCount}
          />
        ))}
      </div>
    </div>
  );
};

export default VenueList;
