import { useLocation, useParams } from "react-router";

export default function ProductView() {

  const params = useParams();
  const {productId} = useParams();
  console.log(params);


  
  return (
    <>
      <p>detaileed product view for slug: {params.productId} </p>
    </>
  );
}
