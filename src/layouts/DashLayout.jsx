import React from 'react'
import { Outlet } from 'react-router-dom'
const DashLayout = () => {
  return (
    <div>
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="flex gap-2">
                <button className="bg-color-primary-variant hover:bg-color-primary-variant-dark text-color-light font-semibold py-2 px-4 rounded-md">
                  Add New
                </button>
                <button className="bg-color-light text-color-primary-variant hover:bg-color-light-dark font-semibold py-2 px-4 rounded-md">
                  Edit
                </button>
              </div>
            </div>
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default DashLayout