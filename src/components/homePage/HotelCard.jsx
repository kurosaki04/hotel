import { useNavigate } from "react-router-dom"
import './style/HotelCard.css'


const HotelCard = ({hotel}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/hotel/${hotel.id}`)
    }

    console.log(hotel)

  return (
    <article className="card">
        <header className="card__header">
            <img className="card__img" src={hotel.images[0].url} alt="" />
        </header>
        <section className="card__body">
            <h3 className="card__name">{hotel.name}</h3>
            <span className="card__rating">Raiting</span>
            <p className="card__location">{hotel.city.name}, {hotel.city.country}</p>
            <div className="card__price">{hotel.Price}</div>
         <button className="card__btn" onClick={handleNavigate}>See more...</button>   
        </section>
    </article>
  )
}

export default HotelCard