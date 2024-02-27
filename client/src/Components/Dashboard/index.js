import React, { useEffect } from 'react'

const Dashboard = (props) => {
    useEffect(() => {
        props.changePath();
    }, []);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard