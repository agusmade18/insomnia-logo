import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Carousel from '../layouts/dashboard/Carousel'
import Intro from '../layouts/dashboard/Intro'
import Portfolio from '../layouts/dashboard/Portfolio'

function Dashboard() {
  return (
    <React.Fragment>
        <MainLayout>
            <Carousel />
            <Intro />
            <Portfolio />
        </MainLayout>
    </React.Fragment>
  )
}

export default Dashboard