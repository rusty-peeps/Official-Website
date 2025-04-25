import moment from "moment";

const slotsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "10px",
};

const generateTimeSlots = (start, end) => {
  const slots = [];
  let current = moment(start, "HH:mm");
  const endTime = moment(end, "HH:mm");

  while (current.isBefore(endTime)) {
    slots.push(current.format("HH:mm"));
    current = current.add(30, "minutes");
  }

  return slots;
};

const isSlotDisabled = (slot, selectedDate, events) => {
  const now = new Date();
  const selectedDay = moment(selectedDate).startOf("day");
  const today = moment().startOf("day");
  const startDateTime = new Date(
    moment(selectedDate).format("YYYY-MM-DD") + "T" + slot,
  );
  const endDateTime = moment(startDateTime).add(30, "minutes").toDate();
  const isPastTime = selectedDay.isSame(today, "day") && startDateTime < now;
  const isBooked = events.some(
    (event) => startDateTime < event.end && endDateTime > event.start,
  );
  return isPastTime || isBooked;
};

export const formatEvents = (events) => {
  return events.map((event) => ({
    ...event,
    id: event._id,
    title: `Booking by ${event.name}`,
    start: new Date(event.start_date),
    end: new Date(event.end_date),
  }));
};

const calendarStyle = (date) => {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  if (date < today) {
    return {
      style: {
        backgroundColor: "#D3D3D3",
        cursor: "not-allowed",
        pointerEvents: "none",
        color: "#A9A9A9",
        border: "1px solid #A9A9A9",
        margin: 0,
        padding: 0,
      },
    };
  }

  return {};
};

export default {
  slotsContainerStyle,
  generateTimeSlots,
  isSlotDisabled,
  formatEvents,
  calendarStyle,
};
