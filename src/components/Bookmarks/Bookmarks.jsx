
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function Bookmarks({bookmarks, readingTime}) {

  return (
    <div className="md:w-1/3 bg-gray-300 mt-3 p-4">
    <div>
      <h3 className="text-3xl text-center">Reading time {readingTime}</h3>
    </div>
      <h2 className="text-4xl text-center">Bookmarks: {bookmarks.length}</h2>
      <hr></hr>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks:PropTypes.array,
  readingTime:PropTypes.number
};  

export default Bookmarks;
