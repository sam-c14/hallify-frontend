import { useState } from "react";
import { venueInformation, venues } from "../data/venues";
import Star from "../assets/icons/star";
import Guests from "../assets/icons/guests";
import VenueList from "../components/VenueList";
import Checkbox from "../components/Checkbox";
import CustomDatePicker from "../components/CustomDatePicker";
import Error from "../assets/icons/error";

const HallInfo = () => {
  const [bookingForm, setBookingForm] = useState({
    session: [],
    start_date: "",
    end_date: "",
  });

  const handleBookingFormChange = (key, value) => {
    setBookingForm((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const updateSessionArray = (value, sessionType) => {
    const sessions = bookingForm.session;
    if (value) {
      sessions.push(sessionType);
      handleBookingFormChange("session", sessions);
    } else
      handleBookingFormChange(
        "session",
        bookingForm.session.filter((value) => value !== sessionType)
      );
  };

  const isSubmitDisabled = () => {
    const { end_date, session, start_date } = bookingForm;
    return !end_date || !start_date || session.length === 0;
  };

  return (
    <div className="xl:px-32 px-5 mt-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7 mb-10">
        <img
          src={venueInformation.hallBaseImg}
          alt="base-img"
          className=" w-full h-full min-w-full min-h-[379px] rounded-md"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {venueInformation.hallImgs.map((img, index) => (
            <img
              className="w-full min-h-[181.5px] rounded-md"
              src={img}
              key={index}
              alt="hall-imgs"
            />
          ))}
        </div>
      </div>
      <div className="grid xl:grid-cols-[70%_30%] lg:grid-cols-[60%_40%] gap-y-8 grid-cols-1">
        <div>
          <div className="flex flex-col gap-y-4">
            <h3 className="font-inter sm:text-3xl text-xl font-semibold">
              {venueInformation.name}
            </h3>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-3">
                <Star />
                <p className="text-gray-500 font-inter sm:text-sm text-xs">
                  {venueInformation.starCount} Star • 
                  <span className="font-inter text-purple-500 underline">
                    {venueInformation.reviewCount} Reviews
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <Guests />
                <p className="text-gray-500 font-inter sm:text-sm text-xs">
                  {venueInformation.guestCapacity} Guests
                </p>
              </div>
            </div>
            <p className="font-semibold font-inter sm:text-base text-sm">
              NGN {venueInformation.rate}
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-semibold sm:text-2xl text-lg font-inter mb-4">
              Hall Description
            </h3>
            <p className="font-inter text-gray-500 md:w-10/12">
              {venueInformation.hallDescription}
            </p>
          </div>
          <div className="mt-20">
            <VenueList
              venues={venues.slice(0, 2)}
              xlCount={4}
              title="Other Hotel Halls"
            />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl shadow-md px-6 py-7 h-fit">
          <h3 className="font-inter sm:text-2xl text-lg mb-7 font-semibold">
            Booking Details
          </h3>
          <form action="">
            <div className="border flex flex-col gap-y-4 border-gray-200 shadow-sm rounded-lg sm:px-5 px-3 py-3 mb-5">
              <label
                htmlFor="morning-session"
                className="flex items-center gap-x-3"
              >
                <Checkbox
                  id="morning-session"
                  name="session"
                  value={bookingForm.session.includes("morning")}
                  onChange={(value) => updateSessionArray(value, "morning")}
                />
                <span className="font-inter">Morning Session</span>
              </label>
              <label
                htmlFor="evening-session"
                className="flex items-center gap-x-3"
              >
                <Checkbox
                  id="evening-session"
                  name="session"
                  value={bookingForm.session.includes("evening")}
                  onChange={(value) => updateSessionArray(value, "evening")}
                />
                <span className="font-inter">Evening Session</span>
              </label>
            </div>
            <div className="border border-gray-200 flex flex-col gap-y-4 shadow-sm rounded-lg sm:px-5 px-3 py-5 mb-5">
              <CustomDatePicker
                label="Start Date"
                date={bookingForm.start_date}
                onDateChange={(value) =>
                  handleBookingFormChange("start_date", value)
                }
              />
              <CustomDatePicker
                label="End Date"
                date={bookingForm.end_date}
                onDateChange={(value) =>
                  handleBookingFormChange("end_date", value)
                }
              />
            </div>
            <div className="flex items-center font-inter gap-x-4 bg-[#FDEDF0] my-5 py-2.5 rounded-xl px-4">
              <Error />
              <p className="sm:text-sm text-xs font-normal">
                50% Refunds on Booking Cancellation
              </p>
            </div>
            <div>
              <button
                className="w-full font-inter py-3.5 rounded-xl text-center sm:text-base text-sm disabled:bg-[#F6F8FA] disabled:text-[#CDD0D5] text-white bg-purple-600"
                disabled={isSubmitDisabled()}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HallInfo;
