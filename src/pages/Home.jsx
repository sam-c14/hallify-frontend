import React from "react";
import Hero from "../components/Hero";
import VenueList from "../components/VenueList";
import { venues } from "../data/venues";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="lg:px-32 px-5 mt-10">
        <VenueList
          venues={venues}
          xlCount={5}
          title={"Explore Stunning Venues"}
          description={"Browse top-rated event spaces tailored to your needs"}
        />
      </div>
    </div>
  );
};

export default Home;
