import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import axios from '../utils/axios'


function Analytics() {

  // useEffect(async ()=>{
  //   await axios.get(`/analytics`)
  // },[])

  //   const data = [
  //     { year: 2010, count: 10 },
  //     { year: 2011, count: 20 },
  //     { year: 2012, count: 15 },
  //     { year: 2013, count: 25 },
  //     { year: 2014, count: 22 },
  //     { year: 2015, count: 30 },
  //     { year: 2016, count: 28 },
  //   ];

  //   const chartdata = {
  //     labels: data.map(row => row.year),
  //     datasets: [
  //       {
  //         label: 'Acquisitions by year',
  //         data: data.map(row => row.count)
  //       }
  //     ]
  //   }


  return (
    <div className='w-full h-screen flex justify-center '>
      {/* <h2 className='text-3xl font-semibold'>Analytics</h2>
      <div id='acquisitions' className='Chart'>
        <Bar data={chartdata} />
      </div> */}
      <h2>Under development</h2>
    </div>
  )
}

export default Analytics