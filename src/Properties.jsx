function Properties ({name, rating, price}){
    return (
        <li>
            <div>{name}</div>
            <div>${price ? 'Available' : 'Not Available'} a night</div>
            <div>Rating : {rating}</div>
        </li>
    )
}

export default Properties;