import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";

const Error = () => {

  const error = useRouteError()
  console.log(error);
  
  return (
    <div className="text-center m-auto w-fit">
      <h1>{error.status} {error.statusText}</h1>
      <Link to={"/"}><h1 className="bg-blue-500 text-white p-2  rounded-md">Return Home</h1></Link>
    </div>
  )
}

export default Error;