import './Card.css'
import { useNavigate } from 'react-router-dom';

const Card = ({ name, image }) => {
    const navigate = useNavigate();

    return (
        <div className='cardWrapper' onClick={() => navigate(`pokemon/${name}`)}>
            <img src={image} alt={name} className='pokemonImage' />
            <p className='cardTitle'>{name}</p>
        </div>
    );
};

export default Card;




