// import React from 'react'
import {Chart} from 'react-google-charts'

import './index.css'

export const data = [
  ['Task', 'Hours per Day'],
  ['Rahul', 11],
  ['Ram', 2],
  ['Arjun', 2],
  ['Harsha', 2],
  ['Arun', 7], // CSS-style declaration
]

export const options = {
  title: 'Employees Performance',
  pieHole: 0.4,
  is3D: false,
}

const PieChart = () => (
  <>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  </>
)

export default PieChart
