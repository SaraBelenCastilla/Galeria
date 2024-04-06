import React from 'react'
import {useEffect ,useState } from 'react'

function App() {

    const [imagenes,setImagenes]= useState([])
    const{VITE_API_URL}= import.meta.env

   

    useEffect(()=>{

      let controller = new AbortController()
      let options = {
          method: 'GET',
         
          signal: controller.signal
      }
      fetch(VITE_API_URL, options)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            const fotos = data.photos.photo;

            let urlFotos = fotos.map(foto=>{
        
                let idFarm = foto.farm;
                let serverId = foto.server;
                let id = foto.id;
                let secret = foto.secret;
        return `https://farm${idFarm}.staticflickr.com/${serverId}/${id}_${secret}.jpg`
        
            })
        
            console.log(urlFotos)
            setImagenes(urlFotos)
        
        })
        
              
          
          .catch(err => console.log(err))
          .finally(() => controller.abort())

    },[])

  return (

    <div className='container'>
   <><div className='container__box'>
    <figure className='container__figure'>
   <img  className='container__img' src={imagenes[7]} alt="" />
   </figure  >
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img  className='container__img' src={imagenes[0]} alt="" />
   </figure>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img  className='container__img' src={imagenes[2]} alt="" />
   </figure>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img'  src={imagenes[3]} alt="" />
   </figure>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img'  src={imagenes[4]} alt="" />
   </figure>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img' src={imagenes[5]} alt="" />
   </figure>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img' src={imagenes[6]} alt="" />
   </figure>
    </div>
    
    </>
    </div>

  )
}

export default App