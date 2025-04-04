import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MetricChart = ({ data, metric }: { data: any[], metric: string }) => {
  const filteredData = [data.find(d => d.name === metric)].filter(Boolean);
  
  return (
    <div className="h-80">
      <h3 className="text-lg font-medium mb-2 text-gray-700">{metric}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            formatter={(value, name, props) => {
              const unit = props.payload.unit || '';
              return [`${value} ${unit}`, name];
            }}
          />
          <Legend />
          <Bar dataKey="Yelix" fill="#4C78A8" name="Yelix (Deno)" />
          <Bar dataKey="Fastify" fill="#E74C3C" name="Fastify (Node.js)" />
          <Bar dataKey="Oak" fill="#DE8F5F" name="Oak (Deno)" />
          <Bar dataKey="Express" fill="#8E44AD" name="Express.js (Node.js)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function ResponseTimeChart({ data }: { data: any[] }) {
  const metrics = [
    'Requests/second (higher is better)',
    'Avg Duration (lower is better)',
    'Median Duration (lower is better)',
    'p95 Duration (lower is better)',
    'Max Duration (lower is better)'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Response Time Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12">
        {metrics.map(metric => (
          <MetricChart key={metric} data={data} metric={metric} />
        ))}
      </div>
    </div>
  );
}
