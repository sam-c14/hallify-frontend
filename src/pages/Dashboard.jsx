import React from "react";
import Table from "../components/Table";

const Dashboard = () => {
  const headers = [
    "Name",
    "Guest Number",
    "Cost Per Session",
    "Pending Application",
    "Date Added",
  ];

  const data = [
    {
      name: {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "John Doe",
      },
      guest_number: "john@example.com",
      cost_per_session: "Admin",
      pending_application: "256",
      date_added: "18 Jan 2025",
    },
    {
      name: {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "John Doe",
      },
      guest_number: "john@example.com",
      cost_per_session: "Admin",
      pending_application: "256",
      date_added: "18 Jan 2025",
    },
    {
      name: {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "John Doe",
      },
      guest_number: "john@example.com",
      cost_per_session: "Admin",
      pending_application: "256",
      date_added: "18 Jan 2025",
    },
  ];

  return (
    <div className="sm:pt-10 pt-20">
      <h2 className="font-inter sm:text-3xl text-lg font-semibold mb-5">
        Bookings
      </h2>
      <div className="pr-10">
        <Table headers={headers} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
