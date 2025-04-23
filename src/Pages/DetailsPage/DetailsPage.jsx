import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardDragon from '../../Components/CardDragon/CardDragon';
import './DetailsPage.css'; 
import { Button } from '@mui/material'; 

const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams(); // Obtiene el ID del personaje desde la URL
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error('Error al obtener los detalles del personaje:', error));
  }, [id]);

  if (!character) {
    return <p>Cargando detalles del personaje...</p>;
  }

  return (
    <>
      <div className="container">
        <CardDragon user={character} showDetails={true} />
        <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)} // Navega a la página anterior
        style={{ marginTop: '20px' }}
      >
        Volver
      </Button>
      </div>
      
    </>
  );
};

export default DetailsPage;