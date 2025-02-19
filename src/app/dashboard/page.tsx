'use client';

// import React from 'react';

// const Dashboard: React.FC = () => {
//   return (
//     <div>
//       {/* Your dashboard content goes here */}
//       <h1>Dashboard</h1>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Import Shadcn components
import { Chart, registerables } from 'chart.js'; // Import Chart.js and registerables
import { Bar } from 'react-chartjs-2'; // Use Bar component from react-chartjs-2

Chart.register(...registerables);

const Dashboard: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 3000, 5000, 7000, 6000, 8000, 9000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Registered Shops</CardTitle>
            <CardDescription>50</CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>200</CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>$10,000</CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Needed Shops</CardTitle>
            <CardDescription>5</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Revenue Overview</h2>
        <Bar data={data} options={{ responsive: true }} /> {/* Use Bar component */}
      </div>
    </div>
  );
};

export default Dashboard;