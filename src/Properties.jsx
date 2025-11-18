function Properties ({name, rating, price}){
    return (
        <li className="property-item">
            <div><strong>{name}</strong></div>
            <div>{price ? 'Available' : 'Not Available'}</div>
            <div>{price && price }</div>
            <div>Rating: {rating}/10</div>
        </li>
    )
}

export default Properties;