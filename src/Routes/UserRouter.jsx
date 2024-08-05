import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/UserPages/HomePage'

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default UserRouter
