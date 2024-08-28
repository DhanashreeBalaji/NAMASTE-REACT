import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();

    console.log("Error is : " + err);

      return (

    <div>
    {err.status} : {err.statusText}
    </div>
    
  )
}

export default Error