import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, text, date, handleDeleteNote, color, colorArray }) => {
  const handleColorClick = () => {
    //change color
  };
  return (
    <div className="note" style={{ backgroundColor: `${color}` }}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div>
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={() => handleDeleteNote(id)}
          ></MdDeleteForever>
          {/* <button onClick={handleColorClick}>.</button> */}
        </div>
      </div>
    </div>
  );
};
export default Note;
