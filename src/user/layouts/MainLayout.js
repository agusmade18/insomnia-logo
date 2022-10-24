import React, { Suspense } from 'react'
import NewNavbar from './navbarNew/Navbar'
import Loading from './Loading';
// import Navbar from './Navbar'
const Navbar = React.lazy(() => import('./Navbar'));

const MainLayout =({children}) => {
  return (
    <React.Fragment>
        {/* <NewNavbar /> */}
      <Suspense fallback={<Loading />}>
          <Navbar />
      </Suspense>
        <div>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </div>
    </React.Fragment>
  )
}

export default MainLayout