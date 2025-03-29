import React from "react";
import Table from "../components/Table";
import { venues } from "../data/venues";

const Sessions = () => {
  const headers = [
    "Name",
    "Guest Number",
    "Cost Per Session",
    "Pending Application",
    "Date Added",
  ];

  const data = venues.map((venue) => ({
    id: venue.id,
    name: {
      img: venue.src,
      text: venue.name,
    },
    guest_number: venue.guestCapacity,
    cost_per_session: venue.rate,
    pending_application: venue.reviewCount,
    date_added: "18 Jan 2025",
  }));

  return (
    <div className="sm:pt-10 pt-20">
      <h2 className="font-inter sm:text-3xl text-lg font-semibold mb-5">
        Halls
      </h2>
      <div className="pr-10">
        <Table headers={headers} data={data} route="/admin/sessions-list" />
      </div>
    </div>
  );
};

export default Sessions;
