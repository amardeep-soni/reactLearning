const Card = (props) => {

    const { restaurant_name, image, rating, dishes_offered} = props.value

    return (
        <div className="h-56 w-56 border-2 border-solid border-black ">
            <img src={image} className="w-full h-1/2" alt="" />
            <div className="p-2 h-1/2 bg-[#f87171]">
                <p>{restaurant_name}</p>
                <p>{rating} ⭐</p>
                <p className="line-clamp-2">
                    {dishes_offered.join(', ')}
                </p>
            </div>
        </div>
    )
}
export default Card;
