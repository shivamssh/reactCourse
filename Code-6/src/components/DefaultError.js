import { useRouteError } from 'react-router-dom';
// For error ( navigtion at non exist page )
const DefaultError = () => {
          const errDetails = useRouteError();
          return (
                    <div>
                              <h1>Oops !!</h1>
                              <h2>Something went wrong</h2>
                              <h3>{errDetails.status + ' : ' + errDetails.statusText }</h3>
                    </div>
          )
}

export default DefaultError;