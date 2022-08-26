import React, { useState } from 'react'


function MonApi (){
    
    const getApi = ()=>{
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=goma&appid=f5586608c2d3ba7b09e56baef9ba3d46&units=metric&lang=fr_cn')
        .then(response => response.json())
        .then(json => console.log(json.list[2]))

    }
            console.log(getApi())
    return(
<div>
  <h1>GOMA WEATHER</h1> 
</div>
        
    )
}

export default MonApi