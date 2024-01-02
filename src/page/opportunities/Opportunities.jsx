import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import opportunitySidebarData from '../../data/sidebarOpportunities'

const Opportunities = () => {
  return (
    <div>
        <Sidebar sidebarData={opportunitySidebarData} />
        Opportunities
    </div>
  )
}

export default Opportunities