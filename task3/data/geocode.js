const request = require ('request')
const geocode = (address , callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'
    
    request ({url : geocodeUrl , json : true} , (error , response) => {
        if (error) {
            callback ("Enable to connect geocode Service" , undefined)
        }
        else if (response.body.message) {
            callback (response.body.message , undefined)
        }
        else if (response.body.features.length == 0){
             callback ("Unable to find location"  , undefined)
        } 
        else {
            callback (undefined , {
                 longtitude :  response.body.features[0].center[0] ,
                 latitude : response.body.features[0].center[1]
            } )
        }
    } )
}

module.exports = geocode;
