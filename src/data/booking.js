import BookedImage from "../assets/images/hall-booked-img.png";

export const bookings = [
  {
    img: BookedImage,
    hall_name: "Luzang Hall A",
    status: "Pending",
    date_range: "Aug 25th - 30th",
    guest_count: "200-250",
    sub_total: "2,350,000",
  },
  {
    img: BookedImage,
    hall_name: "Luzang Hall B",
    status: "Approved",
    date_range: "Aug 25th - 30th",
    guest_count: "200-250",
    sub_total: "2,350,000",
  },
  {
    img: BookedImage,
    hall_name: "Luzang Hall C",
    status: "Rejected",
    date_range: "Aug 25th - 30th",
    guest_count: "200-250",
    sub_total: "2,350,000",
  },
];

export const halls = [
  {
    id: 1,
    name: "Luzang Hall A",
  },
  {
    id: 2,
    name: "Luzang Hall B",
  },
  {
    id: 3,
    name: "Luzang Hall C",
  },
];
