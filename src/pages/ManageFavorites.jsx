import { useState } from "react";
import EmptyData from "../components/EmptyData";
import NoFavorites from "../assets/images/no-favorites.png";
import VenueList from "../components/VenueList";
import { venues } from "../data/venues";

const ManageFavorites = () => {
  const [hasFavorites, setHasFavorites] = useState(false);

  return (
    <div className="relative">
      {!hasFavorites ? (
        <EmptyData
          baseRoute="Home"
          childRoute="Manage Favorites"
          img={NoFavorites}
          label="No Favorites at the moment"
        />
      ) : (
        <div className="py-10 xl:px-32 sm:px-10 px-5">
          <p className="font-inter flex items-center gap-x-1 sm:text-sm text-xs font-light">
            <span className="text-black">Home</span>
            <span>/</span>
            <span className="text-gray-500">Manage Favorites</span>
          </p>
          <div className="mt-5 flex sm:justify-start">
            <VenueList
              venues={venues.slice(0, 2)}
              xlCount={4}
              title="Favorites"
            />
          </div>
        </div>
      )}
      <p className="text-purple-500 font-semibold sm:text-lg text-base text-center">
        This feature is coming soon
      </p>
      {/* <button
        onClick={() => setHasFavorites(!hasFavorites)}
        title="For UAT, will be removed upon api integration"
        className="absolute top-full right-5 font-inter bg-purple-600 rounded-full text-white hover:scale-105 py-2.5 px-5"
      >
        Toggle Favorites
      </button> */}
    </div>
  );
};

export default ManageFavorites;
