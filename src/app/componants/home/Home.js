"use client";
import React from 'react';
import StatisticsVector from '../statistics/StaticsVector';
import BarCharts from '../statistics/BarChart';
import { faDollarSign, faPeopleCarryBox, faTruck, faUsers } from '@fortawesome/free-solid-svg-icons';
import GeneralStatistics from '../statistics/GeneralStatistics';
import RadarChart from '../statistics/RadarChart';
import Maps from '../statistics/Maps';

import './Home.css';
export default function Home() {
  return (
    <div className='Home'>
      <div className='Home-header'>
        <GeneralStatistics 
          data={[0, 100, 300, 600, 400, 1000]} 
          icon={faDollarSign} 
          Growth={20} 
          title="Total Revenue" 
          value="$12,234,567" 
          
        />
        <GeneralStatistics 
          data={[0, 100, 50, 400, 200, 600]} 
          icon={faPeopleCarryBox} 
          Growth={-20} 
          title="Completed orders" 
          value="1,234" 
        />
        <GeneralStatistics 
          data={[0, 100, 1000, 600, 300, 400]} 
          icon={faUsers} 
          Growth={-30} 
          title="Website visitors" 
          value="1,234" 
        />
        <GeneralStatistics 
          data={[0, 100, 400, 4005, 5000, 600]} 
          icon={faTruck} 
          Growth={40} 
          title="Total Orders" 
          value="567" 
        />
      </div>
      <div className='Home-chart'>
        <div className='Home-chart-victory vector'>
          <h3>Statistics Growth</h3>
        <StatisticsVector typeBar={"%"} data={[0,50,40,900 ,100, 300, 600, 400,500,1100, 1000]}></StatisticsVector>
        </div>
        <div className='Home-chart-victory radar'>
          <h3>Statistics </h3>
        <RadarChart  data1={[0,200,400,600,800,600]} data2={[600,200,400,900,800,900]} label={["Products", "Revenues", "Orders", "Completed Deals", "Visitors", "Customers"]}></RadarChart>
        </div>
      </div>
      <div className='chart-bar'>

        <div className='Home-chart-bar-Line'>
      <BarCharts ></BarCharts>
              </div>
      <div className='Home-map'>
        <h3>visitors countries</h3>
        <Maps />
        </div>
      </div>
      </div>
  );
};