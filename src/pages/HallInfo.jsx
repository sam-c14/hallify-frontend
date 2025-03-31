import { useState } from "react";
import { venueInformation, venues } from "../data/venues";
import Star from "../assets/icons/star";
import Guests from "../assets/icons/guests";
import VenueList from "../components/VenueList";
import Checkbox from "../components/Checkbox";
import CustomDatePicker from "../components/CustomDatePicker";
import Error from "../assets/icons/error";
import useFetch from "../utils/fetch";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { post, parseError } from "../utils/axios";
import Spinner from "../components/Spinner";
import { format, startOfWeek, endOfWeek, parseISO } from "date-fns";

const HallInfo = () => {
  const params = useParams();
  const [bookingForm, setBookingForm] = useState({
    session_ids: [],
    date: "",
    // end_date: "",
    event_name: "",
    hall_id: Number(params.id),
  });
  const [loading, setLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [showWeeklySessions, setShowWeeklySessions] = useState(false);

  const { data, error, isLoading } = useFetch(`bookings/halls/${params.id}`);

  // console.log(data);

  if (isLoading || error) {
    return (
      <div className="grid place-items-center min-h-screen">
        {isLoading ? (
          <Spinner />
        ) : (
          <p className="text-red-500">Error: {error.message}</p>
        )}
      </div>
    );
  }

  const handleBookingFormChange = (key, value) => {
    setBookingForm((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  // Handle date selection
  const handleDateChange = (dateRange) => {
    if (dateRange[0]) {
      const formattedDate = format(
        dateRange[0] instanceof Date ? dateRange[0] : new Date(dateRange[0]),
        "yyyy-MM-dd"
      );

      setSelectedDate(formattedDate);
      setBookingForm((prev) => {
        return {
          ...prev,
          session_ids: [],
        };
      });
      setShowWeeklySessions(false);
    }
  };

  // Filter sessions for the selected date
  const filteredSessions = data?.sessions
    ? data.sessions.filter(
        (session) => session.date === selectedDate && !session.is_booked
      )
    : [];

  // Get all sessions for the selected week (excluding selected date)
  const selectedDateObj = selectedDate ? parseISO(selectedDate) : null;
  const weekStart = selectedDateObj ? startOfWeek(selectedDateObj) : null;
  const weekEnd = selectedDateObj ? endOfWeek(selectedDateObj) : null;

  const weeklySessions = data?.sessions
    ? data.sessions.filter((session) => {
        const sessionDate = parseISO(session.date);
        return (
          selectedDateObj &&
          sessionDate >= weekStart &&
          sessionDate <= weekEnd &&
          session.date !== selectedDate && // Exclude selected date
          !session.is_booked
        );
      })
    : [];

  // console.log(data.sessions);

  const updateSessionArray = (isChecked, sessionType) => {
    setBookingForm((prev) => {
      const newSessions = isChecked
        ? [...prev.session_ids, sessionType] // ✅ Add session
        : prev.session_ids.filter((s) => s !== sessionType); // ✅ Remove session

      return { ...prev, session_ids: newSessions };
    });
  };

  const isSubmitDisabled = () => {
    const { session_ids, date } = bookingForm;
    return !date || session_ids.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await post("bookings/create/", bookingForm);
      toast.success("Hall successfully booked!");
      // navigate("/admin/sessions");
      console.log(response);
    } catch (error) {
      const errMsg = parseError(error);
      console.log(errMsg);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
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
              {venues.find((hall) => hall.id === Number(params.id)).name}
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
                  {data?.capacity} Guests
                </p>
              </div>
            </div>
            <p className="font-semibold font-inter sm:text-base text-sm">
              NGN {data?.price_per_session}
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-semibold sm:text-2xl text-lg font-inter mb-4">
              Hall Description
            </h3>
            <p className="font-inter text-gray-500 md:w-10/12">
              {data?.description}. Please note that every hall has a size limit
              and also can be maxed out pending the umber of bookings for that
              hall at the time it is requested.
            </p>
          </div>
          <div className="mt-20">
            <VenueList
              venues={venues.filter((venue) => venue.id !== Number(params.id))}
              xlCount={4}
              title="Other Hotel Halls"
            />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl shadow-md px-6 py-7 h-fit">
          <h3 className="font-inter sm:text-2xl text-lg mb-7 font-semibold">
            Booking Details
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block font-inter text-gray-700 text-sm font-semibold mb-2"
              >
                Event Name:
              </label>
              <input
                type="text"
                id="text"
                value={bookingForm.event_name}
                // disabled={loading}
                onChange={({ target }) =>
                  handleBookingFormChange("event_name", target.value)
                }
                className="shadow appearance-none border border-gray-300 rounded-md w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <CustomDatePicker
              date={selectedDate ? [selectedDate, null] : [null, null]}
              onDateChange={handleDateChange}
            />

            {/* Show sessions for selected date */}
            <div className="mt-4">
              {filteredSessions.length > 0 ? (
                filteredSessions.map((session) => (
                  <label key={session.id} className="flex items-center gap-x-3">
                    <Checkbox
                      onChange={(value) =>
                        updateSessionArray(value, session.id)
                      }
                      value={bookingForm.session_ids.includes(session.id)}
                      id={`session-${session.id}`}
                      name="session"
                    />
                    <span className="font-inter">
                      {session.session_type.charAt(0).toUpperCase() +
                        session.session_type.slice(1)}{" "}
                      Session - {session.date}
                    </span>
                  </label>
                ))
              ) : (
                <button
                  type="button"
                  onClick={() => setShowWeeklySessions(!showWeeklySessions)}
                  className="mt-3 text-blue-500 underline"
                >
                  {showWeeklySessions ? "Hide" : "See"} all available sessions
                  this week
                </button>
              )}
            </div>

            {/* Show weekly sessions if no sessions found for selected date */}
            {showWeeklySessions && (
              <div className="mt-5">
                <h4 className="font-semibold text-lg mb-4">
                  Sessions this week:
                </h4>
                {weeklySessions.length > 0 ? (
                  weeklySessions.map((session) => (
                    <label
                      key={session.id}
                      htmlFor={`session-${session.id}`}
                      className="flex items-center gap-x-3 my-1"
                    >
                      <Checkbox
                        onChange={(value) => {
                          console.log(value);
                          updateSessionArray(value, session.id);
                        }}
                        value={bookingForm.session_ids.includes(session.id)}
                        id={`session-${session.id}`}
                        name="session"
                      />
                      <span className="font-inter">
                        {session.session_type.charAt(0).toUpperCase() +
                          session.session_type.slice(1)}{" "}
                        Session - {session.date}
                      </span>
                    </label>
                  ))
                ) : (
                  <p>No available sessions for this week.</p>
                )}
              </div>
            )}
            <div className="flex items-center font-inter gap-x-4 bg-[#FDEDF0] my-5 py-2.5 rounded-xl px-4">
              <Error />
              <p className="sm:text-sm text-xs font-normal">
                50% Refunds on Booking Cancellation
              </p>
            </div>
            <div>
              <button
                className="w-full flex justify-center font-inter py-3.5 rounded-xl text-center sm:text-base text-sm disabled:bg-[#F6F8FA] disabled:text-[#CDD0D5] text-white bg-purple-600"
                disabled={isSubmitDisabled()}
              >
                {loading ? <Spinner size={25} /> : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HallInfo;
