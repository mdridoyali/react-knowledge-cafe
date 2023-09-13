import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead  }) => {
  
  const {id, title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
  return (
    <div>
    <img className="w-full my-5" src={cover}/>
    <div className="flex justify-between mb-3 ">
        <div className="flex items-center">
           <img className="w-14 " src={author_img}/>
           <div className="ml-3">
              <h3 className="font-bold">{author}</h3>
              <p>{posted_date}</p>
           </div>
        </div>
        <div className="flex items-center">
           <span className="mr-3">{reading_time} min read</span>
           <button onClick={ () => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
        </div>
    </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
            hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
        }
      </p>
       <button onClick={ () => handleMarkAsRead(id, reading_time)} className="text-purple-800 font-bold underline mb-5">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
