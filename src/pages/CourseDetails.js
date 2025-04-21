import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Util from "../helper/course_details";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NewsLetter from "../components/newsletter/newsLetter";
import coursesData from "../data/course_details.json";
import { fetchSlotEvents } from "../api/get";
import { createSlotOrder, bookSlotApi } from "../api/post";
import { toast } from "react-toastify";
const localizer = momentLocalizer(moment);

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);
  const [events, setEvents] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const timeSlots = Util.generateTimeSlots("09:00", "17:00");

  const fetchEvents = async () => {
    try {
      const response = await fetchSlotEvents();
      const formattedEvents = Util.formatEvents(response);
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDateSelection = (slotInfo) => {
    const currentTime = moment();
    const selectedTime = moment(slotInfo.start);

    if (selectedTime.isBefore(currentTime, "day")) {
      toast.warn("Please select a date in the future.");
      return;
    }
    setSelectedDate(slotInfo.start);
    setPopupVisible(true);
  };

  const createOrder = async (amount) => {
    try {
      const response = await createSlotOrder(amount);
      if (response && response.order_id) {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: amount * 100,
          currency: "INR",
          name: "Your Company Name",
          description: "Payment for Order",
          order_id: response.order_id,
          prefill: {
            name,
            email,
            phone,
          },
          theme: {
            color: "#F37254",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        toast.success("Slot booked initiate You will get email soon!");
        return {
          order_id: response.order_id,
          amount: amount,
          currency: "INR",
        };
      } else {
        toast.error("Order creation failed. Please try again.");
        return null;
      }
    } catch (error) {
      toast.error("Error creating order. Please try again.");
      return null;
    }
  };

  const bookSlot = async (slotData) => {
    try {
      const response = await bookSlotApi(slotData);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(
        "Error booking slot:",
        error.response?.data || error.message
      );
      toast.error("Error booking slot. Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      toast.warn("Please fill in all fields.");
      return;
    }

    if (!selectedSlot) {
      toast.warn("Please select a time slot.");
      return;
    }

    const startDateTime = new Date(
      moment(selectedDate).format("YYYY-MM-DD") + "T" + selectedSlot
    );
    const endDateTime = moment(startDateTime).add(30, "minutes").toDate();

    const isOverlapping = events.some(
      (event) => startDateTime < event.end && endDateTime > event.start
    );

    if (isOverlapping) {
      toast.warn("This slot overlaps with an existing booking!");
      return;
    }
    const orderData = await createOrder(course.priceInt);
    if (!orderData) return;

    const { order_id } = orderData;
    const newEvent = {
      id: events.length + 1,
      title: `Booking by ${name}`,
      start: startDateTime,
      end: endDateTime,
    };
    setEvents([...events, newEvent]);
    setPopupVisible(false);
    setSelectedSlot(null);
    const formData = {
      name,
      email,
      phone,
      courseId: course.id,
      price: course.priceInt,
      paymentId: order_id,
      platform: "goggle",
      dateTime: startDateTime.toISOString(),
      start_date: startDateTime.toISOString(),
      end_date: endDateTime.toISOString(),
    };
    const response = await bookSlot(formData);
    if (!response) {
      toast.error("Error booking slot. Please try again.");
      return;
    }
  };

  return (
    <>
      <Navbar />
      <section className="course_details-area pt-60 pb-60">
        <div className="container">
          <div className="course_details-top">
            <div className="row">
              <div className="col-md-10 col-12">
                <h3 className="course_details-title">{course.title} </h3>
              </div>
              <div className="col-md-2 col-12">
                <div className="course_details-meta-right">
                  <Link className="theme-btn theme-btn-medium">
                    Price: {course.price}
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="course_details-wrap ">
                  <div className="course_details-tab-button">
                  </div>
                  <div className="course_details-tab-content">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0">
                        <div className="course_details-content">
                          <h4 className="course_details-content-title mb-15">
                            Courses Description
                          </h4>
                          <p className="mb-25">{course.description1}</p>
                          <p className="mb-40">{course.description2}</p>
                          <h4 className="course_details-content-title mb-20">
                            {course.sub_header}
                          </h4>
                          <div className="course_details-content-list">
                            <ul>
                              {course.listData.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="account-main">
                  <form className="account-form" onSubmit={handleSubmit}>
                    <div className="account-form-item mb-20">
                      <div className="account-form-label">
                        <label>Name</label>
                      </div>
                      <div className="account-form-input">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="account-form-item mb-20">
                      <div className="account-form-label">
                        <label>Email</label>
                      </div>
                      <div className="account-form-input">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="account-form-item mb-20">
                      <div className="account-form-label">
                        <label>Phone</label>
                      </div>
                      <div className="account-form-input">
                        <input
                          type="tel"
                          placeholder="Enter Your Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Calendar
                        localizer={localizer}
                        events={events}
                        selectable
                        onSelectSlot={handleDateSelection}
                        defaultView="month"
                        longPressThreshold={2}
                        views={["month"]}
                        defaultDate={new Date()}
                        style={{ height: 400 }}
                        className="calendar-container"
                        dayPropGetter={Util.calendarStyle}
                      />
                      {popupVisible && (
                        <div className="popup">
                          <p>
                            Select Time Slot for{" "}
                            {moment(selectedDate).format("MMMM Do YYYY")}
                          </p>
                          <div style={Util.slotsContainerStyle}>
                            {timeSlots.map((slot) => {
                              const disabled = Util.isSlotDisabled(
                                slot,
                                selectedDate,
                                events
                              );
                              return (
                                <div
                                  key={slot}
                                  className="slot-box"                               
                                  style={{
                                    // ...Util.slotBoxStyle,
                                    backgroundColor: disabled
                                      ? "#E0E0E0"
                                      : selectedSlot === slot
                                      ? "#007BFF"
                                      : "#FFF",
                                    color: disabled
                                      ? "#A9A9A9"
                                      : selectedSlot === slot
                                      ? "#FFF"
                                      : "#000",
                                    cursor: disabled
                                      ? "not-allowed"
                                      : "pointer",
                                    pointerEvents: disabled ? "none" : "auto",
                                  }}
                                  onClick={() =>
                                    !disabled && setSelectedSlot(slot)
                                  }>
                                  {moment(slot, "HH:mm").format("h:mm A")}
                                </div>
                              );
                            })}
                          </div>
                          <div
                            style={{ marginTop: "10px" }}
                            className="text-center mt-2">
                            <button
                              className="btn-primary-cs"
                              disabled={!selectedSlot}
                              onClick={() => {
                                alert(
                                  "Slot selected successfully! Please confirm booking."
                                );
                                toast.success(
                                  "Slot selected successfully! Please confirm booking."
                                );
                                setPopupVisible(false);
                              }}>
                              Book Slot
                            </button>
                            <button
                               className="btn-cancel"
                              onClick={() => setPopupVisible(false)}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <br />
                    <div className="account-form-button">
                      <button
                        type="submit"
                        className="account-btn"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}>
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="newsletter"></div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default CourseDetails;
