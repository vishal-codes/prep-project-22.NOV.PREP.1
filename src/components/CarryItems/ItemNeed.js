const ItemNeed = (props) => {
    let weather_details= {
        "Clear" : ["sunglasses", "sunscreen"],  
    
        "Rain"          : ["umbrella", "raincoat","boots"] , 
        "Drizzle"       : ["umbrella", "raincoat","boots"] , 
        "Clouds"        : ["umbrella" , "raincoat",,"mittens"],
        "Snow"          : ["raincoat" , "umbrella","mittens"], 
    
    
        "Tornado"       : ["torch" ,"winter-hat"], 
        "Thunderstorm"  : ["umbrella" , "boots"], 
    
        "Squall"        :  ["sunglasses", "Torch"],  
        "Ash"           :  ["sunglasses", "cap","torch"],  
        "Dust"          : ["sunglasses", "sunscreen","torch"],   
        "Smoke"         :  ["sunglasses", "sunscreen","torch"],  
        "Haze"          :  ["sunglasses", "sunscreen","torch"],  
        "Fog"           :  ["torch","raincoat"],  
        "Mist"          :["torch","raincoat"],    
        "Sand"          : ["sunglasses", "sunscreen"],  
    
    } ; 
    const weatherdata = props.resultantdata ;
    return (  
        <div className="Items-to-bring"> 
            <h2> Items you should bring </h2>
            <div className="Items-box"> 
                {
                weather_details[weatherdata] && weather_details[weatherdata].map((item)=> (
                    <div className="Item-container">
                        <img key={item}  src={ require (`../../assets/images/${item}.png`).default} alt={`${item}`}/>  
                        <p>{item[0].toUpperCase() + item.slice(1)}</p>
                    </div>
                )) }  
            </div>   
        </div>
    );
}
 
export default ItemNeed;