import React from 'react'
import { useEffect } from 'react'
function RestaurantDetails() {
    const API='https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.4987&lng=77.6669&restaurantId=580164&query=Ice%20Cream&submitAction=ENTER'
     
      useEffect(() => {
        async function getRestaurantInfo() {
          try {
            const resp = await fetch(API);
            const json = await resp.json();
            setData(json);
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        }
        getRestaurantInfo();
      }, [id]);
  return (
    <div>
      let {id}=useParams();
     
      
    </div>
  )
}

export default RestaurantDetails
