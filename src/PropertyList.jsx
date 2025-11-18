import Properties from './Properties';

function PropertyList ({properties}){
    return (
        <ul>
            {properties.map(prop =>(
                <Properties
                key = {prop.id}
                name = {prop.name}
                price = {prop.price}
                rating = {prop.rating}
                />
            ) )}
        </ul>
    )
};

export default PropertyList;