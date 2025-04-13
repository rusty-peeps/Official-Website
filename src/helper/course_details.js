import moment from "moment";
const popupStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
};

const slotsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "10px",
};

const slotBoxStyle = {
  width: "80px",
  height: "80px",
  border: "1px solid #007BFF",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
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
export default {
  popupStyles,
  slotsContainerStyle,
  slotBoxStyle,
  generateTimeSlots,
};
