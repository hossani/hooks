import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";


export default function Filtring({filter}) {
        // Référence pour le champ de recherche
    let searchRef = useRef();
        // État pour la note de filtrage
    const [rate, setRate] = useState(0);
        // Fonction appelée lorsque la note de filtrage est modifiée
    const ratingChanged = (newRating) => {
                // Appel de la fonction de filtrage avec la valeur de recherche et la nouvelle note
         filter(searchRef.current.value,newRating);
        setRate(newRating)
    };
    // Fonction appelée lors de la soumission du formulaire
    function submitted(ev){
        ev.preventDefault();
                // Appel de la fonction de filtrage avec la valeur de recherche et la note actuelle
        filter(searchRef.current.value,rate);
    }


    return (
        <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <h3> FILTER BAR </h3>
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." aria-label=".form-control-lg example" />
            <button className="btn btn-primary searchbtn" type="submit" >Search</button>

            
            <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
        </form>
    )
}