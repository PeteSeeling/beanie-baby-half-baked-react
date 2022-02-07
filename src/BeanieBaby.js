import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <><div>
      <img src={beanieBaby.image} />
      <p>{beanieBaby.name}</p>
     

      <Link to="/BeanieDetail"></Link>
    </div><div className='beanie-details'>


    </div></>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
   
  );
}
