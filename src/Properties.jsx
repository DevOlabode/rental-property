function Properties ({name, rating, price}){
    return (
        <li>
            <div>The name is : {name}</div>
            <div>${price} a night</div>
            <div>Rating : {rating}</div>
        </li>
    )
}

export default Properties;