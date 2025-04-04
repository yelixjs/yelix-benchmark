import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BenchmarkComparison = () => {
  // Key metrics data
  const performanceData = [
    {
      name: 'Requests/second',
      Yelix: 37132.79,
      Hono: 39545.22,
      unit: 'req/s'
    },
    {
      name: 'Avg Duration',
      Yelix: 3.28,
      Hono: 3.08,
      unit: 'ms'
    },
    {
      name: 'Median Duration',
      Yelix: 2.68,
      Hono: 2.61,
      unit: 'ms'
    },
    {
      name: 'p90 Duration',
      Yelix: 5.66,
      Hono: 5.35,
      unit: 'ms'
    },
    {
      name: 'p95 Duration',
      Yelix: 6.18,
      Hono: 5.81,
      unit: 'ms'
    },
    {
      name: 'Max Duration',
      Yelix: 46.36,
      Hono: 48.67,
      unit: 'ms'
    }
  ];
  
  // Total requests and data
  const volumeData = [
    {
      name: 'Total Requests',
      Yelix: 4455938,
      Hono: 4745447,
      diff: '+6.5%'
    },
    {
      name: 'Data Received',
      Yelix: 677,
      Hono: 717,
      unit: 'MB',
      diff: '+5.9%'
    },
    {
      name: 'Data Sent',
      Yelix: 397,
      Hono: 422,
      unit: 'MB',
      diff: '+6.3%'
    }
  ];

  // Compare the frameworks - key takeaways
  const comparison = {
    throughput: Number(((39545.22 - 37132.79) / 37132.79 * 100).toFixed(2)),
    latency: Number(((3.08 - 3.28) / 3.28 * 100).toFixed(2)),
    p95: Number(((5.81 - 6.18) / 6.18 * 100).toFixed(2))
  };

  return (
    <div className="flex flex-col p-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Yelix vs Hono Performance Benchmark</h1>
      
      {/* Key Findings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Key Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-800">Throughput</h3>
            <p className="text-2xl font-bold text-blue-600">{comparison.throughput}%</p>
            <p className="text-sm text-blue-700">Hono is faster with {comparison.throughput}% higher requests/second</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-medium text-green-800">Response Time</h3>
            <p className="text-2xl font-bold text-green-600">{Math.abs(comparison.latency)}%</p>
            <p className="text-sm text-green-700">Hono has {Math.abs(comparison.latency)}% lower average response time</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-medium text-purple-800">Consistency</h3>
            <p className="text-2xl font-bold text-purple-600">{Math.abs(comparison.p95)}%</p>
            <p className="text-sm text-purple-700">Hono has {Math.abs(comparison.p95)}% better p95 response time</p>
          </div>
        </div>
      </div>
      
      {/* Performance Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Response Time Metrics</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Milliseconds', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value, name) => [`${value} ms`, name]} />
              <Legend />
              <Bar dataKey="Yelix" fill="#4C78A8" name="Yelix" />
              <Bar dataKey="Hono" fill="#72B362" name="Hono" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Throughput Comparison */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Throughput Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-600 mb-2">Requests per Second</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[{name: 'RPS', Yelix: 37132.79, Hono: 39545.22}]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[35000, 40000]} />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()} req/s`]} />
                  <Legend />
                  <Bar dataKey="Yelix" fill="#4C78A8" name="Yelix" />
                  <Bar dataKey="Hono" fill="#72B362" name="Hono" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-600 mb-2">Total Volume</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={volumeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name, props) => {
                      const unit = props.payload.unit || '';
                      return [`${value.toLocaleString()} ${unit}`, name];
                    }}
                  />
                  <Legend />
                  <Bar dataKey="Yelix" fill="#4C78A8" name="Yelix" />
                  <Bar dataKey="Hono" fill="#72B362" name="Hono" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Performance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-blue-800">Yelix</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• <strong>37,132</strong> requests/second</li>
              <li>• <strong>3.28ms</strong> average response time</li>
              <li>• <strong>6.18ms</strong> p95 response time</li>
              <li>• <strong>4.46M</strong> total requests processed</li>
              <li>• 100% success rate</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-green-800">Hono</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• <strong>39,545</strong> requests/second</li>
              <li>• <strong>3.08ms</strong> average response time</li>
              <li>• <strong>5.81ms</strong> p95 response time</li>
              <li>• <strong>4.75M</strong> total requests processed</li>
              <li>• 100% success rate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkComparison;