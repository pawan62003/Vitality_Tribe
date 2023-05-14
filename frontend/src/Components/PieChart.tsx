import React from 'react'

const PieChart = () => {
  return (
    <div>
      
    </div>
  )
}

export default PieChart

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const chartData = [
//   { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
// ];
// const Chart = () => {
//   return (
//     <LineChart width={500} height={300} data={chartData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//     </LineChart>
//   );
// };
// export default Chart;
// import React from 'react'
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// const data01 = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 278 },
//     { name: 'Group F', value: 189 },
//   ];
  
//   const data02 = [
//     { name: 'Group A', value: 2400 },
//     { name: 'Group B', value: 4567 },
//     { name: 'Group C', value: 1398 },
//     { name: 'Group D', value: 9800 },
//     { name: 'Group E', value: 3908 },
//     { name: 'Group F', value: 4800 },
//   ];

// const Charts = () => {

    
//   return (
//     <div>
//         <PieChart>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data01}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
//           <Tooltip />
//         </PieChart>
//     </div>
//   )
// }

// export default Charts