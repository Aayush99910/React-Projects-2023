import { phoneProducts }  from "./data";
import { airpodProducts } from "./data";
import { laptopProducts } from "./data";
import { cameraProducts } from "./data";
import HomeForYouCard from "./Home-for-you-card";

export default function HomeMain (props) {
  let newPhoneProducts = phoneProducts.slice(0, 4);
  let newAirpodProducts = airpodProducts.slice(0, 4);
  let newLaptopProducts = laptopProducts.slice(0, 4);
  let newCameraProducts = cameraProducts.slice(0, 4);

  const allProductsDataInArray = [
    {
      id: 0,
      title: "Phones For You!",
      path: "/products/phone",
      array: [...newPhoneProducts]
    },
    {
      id: 1,
      title: "Airpods For You!",
      path: "/products/airpods",
      array: [...newAirpodProducts]
    },
    {
      id: 2,
      title: "Laptop For You!",
      path: "/products/laptop",
      array: [...newLaptopProducts]
    },
    {
      id: 3,
      title: "Cameras For You!",
      path: "/products/camera",
      array: [...newCameraProducts]
    },
  ]
  
  return (
    <main className="home-main-container">
      {
        allProductsDataInArray.map(product => {
          return <HomeForYouCard key={product.id} data={product} addItems={props.addItems}/>  
        })
      }
    </main>
  )
}
