import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./index.css";

export const Collaborator = ({ id, name, image, role, backgroundColor, onDelete, isFavorite, onFavorite }) => {
  const favorite = () => {
    onFavorite(id);
  };

  const propsFavorite = {
    size: 25,
    onClick: favorite,
  };

  return (
    <div className="collaborator">
      <AiFillCloseCircle size={25} className="delete" onClick={() => onDelete(id)} />

      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <div className="favorite">{isFavorite ? <AiFillHeart {...propsFavorite} color="red" /> : <AiOutlineHeart {...propsFavorite} />}</div>
      </div>
    </div>
  );
};
