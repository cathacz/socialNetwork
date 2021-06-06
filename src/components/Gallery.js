import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
const heart = <FontAwesomeIcon icon={faHeart} />;
const comment = <FontAwesomeIcon icon={faComment} />;
const paperPlane = <FontAwesomeIcon icon={faPaperPlane} />;

// case 1
//const Gallery = (props) => {
//   console.log(props.Data);
// case 2
// const Gallery = ({ Data }) => {
//   console.log(Data);
// case 3
const Gallery = (props) => {
  const { Data } = props;
  console.log(Data);
  const posts = Data.map((obj) => {
    const { id, title, location, text, likes, comments, img, share } = obj;
    return (
      <div className="posts" key={id}>
        <img src={img} />
        <h2>
          <span>{title}</span>
        </h2>
        <h4>{text}</h4>
        <div className="interaction">
          <span>
            <i>{heart}</i>
            {likes}
          </span>
          <span>
            {" "}
            <i>{comment}</i>
            {comments}
          </span>
          <span>
            {" "}
            <i>{paperPlane}</i>
            {share}
          </span>
        </div>
      </div>
    );
  });
  return <div className="gallery">{posts}</div>;
};
export default Gallery;
