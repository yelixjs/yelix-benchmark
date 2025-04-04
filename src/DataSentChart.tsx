import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DataSentChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Data Sent</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'MB', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value) => [`${value} MB`]}
            />
            <Legend />
            <Bar dataKey="Yelix" fill="#4C78A8" name="Yelix (Deno)" />
            <Bar dataKey="Fastify" fill="#E74C3C" name="Fastify (Node.js)" />
            <Bar dataKey="Oak" fill="#DE8F5F" name="Oak (Deno)" />
            <Bar dataKey="Express" fill="#8E44AD" name="Express.js (Node.js)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
