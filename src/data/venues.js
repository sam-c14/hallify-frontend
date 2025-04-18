import HallA from "../assets/images/hall-a.png";
import HallB from "../assets/images/hall-b.png";
import HallC from "../assets/images/hall-c.png";
// import HallD from "../assets/images/hall-d.png";
// import HallE from "../assets/images/hall-e.png";
import HallImg1 from "../assets/images/hall-img-1.png";
import HallImg2 from "../assets/images/hall-img-2.png";
import HallImg3 from "../assets/images/hall-img-3.png";
import HallImg4 from "../assets/images/hall-img-4.png";
import HallImg5 from "../assets/images/hall-img-5.png";

export const venues = [
  {
    id: 1,
    src: HallA,
    location: "Victoria Island, Lagos",
    name: "Hall A",
    starCount: "4",
    reviewCount: "10",
    guestCapacity: "200-250",
    rate: "250,000/Session",
  },
  {
    id: 2,
    src: HallB,
    location: "Victoria Island, Lagos",
    name: "Hall B",
    starCount: "4",
    reviewCount: "11",
    guestCapacity: "200-250",
    rate: "200,000/Session",
  },
  {
    id: 3,
    src: HallC,
    location: "Victoria Island, Lagos",
    name: "Hall C",
    starCount: "4",
    reviewCount: "5",
    guestCapacity: "200-250",
    rate: "300,000/Session",
  },
  // {
  //   id: 4,
  //   src: HallD,
  //   location: "Victoria Island, Lagos",
  //   name: "Hall A",
  //   starCount: "4",
  //   reviewCount: "25",
  //   guestCapacity: "200-250",
  //   rate: "329,590/Hour",
  // },
  // {
  //   id: 5,
  //   src: HallE,
  //   location: "Victoria Island, Lagos",
  //   name: "Hall A",
  //   starCount: "4",
  //   reviewCount: "25",
  //   guestCapacity: "200-250",
  //   rate: "329,590/Hour",
  // },
];

export const venueInformation = {
  hallBaseImg: HallImg1,
  hallImgs: [HallImg2, HallImg3, HallImg4, HallImg5],
  name: "Luzang Hall A",
  starCount: "4",
  reviewCount: "25",
  guestCapacity: "200-250",
  rate: "329,590/Hour",
  hallDescription:
    "Lorem ipsum dolor sit amet consectetur. Laoreet vivamus vivamus in amet ipsum commodo velit neque. Hendrerit nulla ipsum vitae netus id gravida pharetra. Nunc in vel vel eu lectus pellentesque nibh felis ornare. Nunc egestas adipiscing tortor pretium cras purus arcu. Euismod tellus ultrices lorem dis tincidunt dolor ipsum nibh facilisis.Malesuada urna sit ut tempus. Nibh aliquet integer metus dignissim at. Praesent in posuere tempus feugiat enim. Sagittis senectus metus amet fermentum blandit hac nulla vel sed.",
};

export const hallImgs = [HallA, HallB, HallC];
