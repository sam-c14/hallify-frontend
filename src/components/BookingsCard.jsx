import React, { useState } from "react";
import { toast } from "react-toastify";
import Calendar from "../assets/icons/calendar";
import Guests from "../assets/icons/guests";
import { post, parseError } from "../utils/axios";
import ModalWrapper from "../components/ModalWrapper";
import CancelBooking from "./CancelBooking";

const BookingsCard = ({
  id,
  session,
  date,
  status,
  img,
  event_name,
  mutate,
}) => {
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getStatusColor = (status) => {
    if (status === "pending") return ["#FFDAC2", "#6E330C"];
    else if (status === "approved") return ["#CBF5E5", "#176448"];
    else return ["#F8C9D2", "#710E21"];
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    try {
      const response = await post("payments/initiate/", { booking_id: id });
      toast.success("Payment initiated successfully!");
      window.open(response.payment_url, "_self");
      // console.log(response);
    } catch (error) {
      const errMsg = parseError(error);
      toast.error(errMsg);
    } finally {
      setPaymentLoading(false);
    }
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await post(`bookings/${id}/cancel/`);
      toast.success("Booking cancelled successfully!");
      console.log(response);
      await mutate();
    } catch (error) {
      const errMsg = parseError(error);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="border border-gray-300 rounded-xl p-5">
      <div className="flex items-center gap-5">
        <img className="w-[90px] h-[80px]" src={img} alt="booking-img" />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <h6 className="sm:text-xl font-inter text-lg">{event_name}</h6>
            <p
              style={{
                color: getStatusColor(status.toLowerCase())[1],
                background: getStatusColor(status.toLowerCase())[0],
              }}
              className="font-inter capitalize text-center rounded-full sm:text-sm text-xs py-1 px-2"
            >
              {status}
            </p>
          </div>
          <div className="flex sm:items-center items-start gap-y-3 sm:flex-row flex-col gap-x-3">
            <div className="flex items-center gap-x-2">
              <Calendar />
              <span className="font-inter text-gray-500 sm:text-sm text-xs">
                {date}
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <Guests />
              <span className="font-inter text-gray-500 sm:text-sm text-xs">
                {session.length} Sessions
              </span>
            </div>
          </div>
          {/* <div className="flex items-center gap-x-3 sm:text-base text-sm font-inter">
            <p>Transaction Ref:</p>
            <h6 className="font-semibold">{transaction_ref}</h6>
          </div> */}
        </div>
      </div>
      <div className="flex gap-x-2 mt-4">
        {status === "approved" && (
          <button
            onClick={handlePayment}
            disabled={paymentLoading}
            className="bg-[#CBF5E5] hover:scale-105 transition-all text-[#176448] rounded-xl text-center sm:text-base text-sm py-2.5 w-full font-inter"
          >
            {paymentLoading ? "Processing..." : "Pay Now"}
          </button>
        )}
        <button
          onClick={() => setShowModal(true)}
          disabled={loading}
          className="bg-[#FDEDF0] hover:scale-105 transition-all text-[#DF1C41] rounded-xl text-center sm:text-base text-sm py-2.5 w-full font-inter"
        >
          Cancel Booking
        </button>
      </div>
      <ModalWrapper isOpen={showModal} onClose={closeModal}>
        <CancelBooking
          onClose={closeModal}
          handleCancel={handleCancel}
          loading={loading}
        />
      </ModalWrapper>
    </div>
  );
};

export default BookingsCard;
