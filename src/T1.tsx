
import ResponseTimeChart from './ResponseTimeChart';
import VolumeMetricsChart from './VolumeMetricsChart';

export default function T1() {
  // Calculate relative performance compared to Yelix
  const relativePerformance = {
    oak: Number((37132.79 / 24212.44).toFixed(2)),
    express: Number((37132.79 / 8683.07).toFixed(2)),
    fastify: Number((37132.79 / 32504.80).toFixed(2))
  };

  // Key metrics data with reordered frameworks
  const performanceData = [
    {
      name: 'Requests/second (higher is better)',
      Yelix: 37132.79,
      Fastify: 32504.80,
      Oak: 24212.44,
      Express: 8683.07,
      unit: 'req/s'
    },
    {
      name: 'Avg Duration (lower is better)',
      Yelix: 3.28,
      Fastify: 3.77,
      Oak: 5.07,
      Express: 14.33,
      unit: 'ms'
    },
    {
      name: 'Median Duration (lower is better)',
      Yelix: 2.68,
      Fastify: 3.40,
      Oak: 4.34,
      Express: 12.14,
      unit: 'ms'
    },
    {
      name: 'p95 Duration (lower is better)',
      Yelix: 6.18,
      Fastify: 9.94,
      Oak: 9.24,
      Express: 25.27,
      unit: 'ms'
    },
    {
      name: 'Max Duration (lower is better)',
      Yelix: 46.36,
      Fastify: 57.21,
      Oak: 44.01,
      Express: 99.21,
      unit: 'ms'
    }
  ];
  
  // Total requests and data
  const volumeData = [
    {
      name: 'Total Requests (higher is better)',
      Yelix: 4455938,
      Fastify: 3900612,
      Oak: 2905499,
      Express: 1041972
    },
    {
      name: 'Data Received',
      Yelix: 677,
      Fastify: 690,
      Oak: 439,
      Express: 249,
      unit: 'MB'
    },
    {
      name: 'Data Sent',
      Yelix: 397,
      Fastify: 347,
      Oak: 259,
      Express: 93,
      unit: 'MB'
    }
  ];

  return (
    <div className="flex flex-col p-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Yelix Performance Comparison</h1>
      
      {/* Key Comparisons */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Yelix Performance Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-800">Yelix is</h3>
            <p className="text-2xl font-bold text-blue-600">{relativePerformance.fastify}x</p>
            <p className="text-sm text-blue-700">faster than Fastify</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-medium text-green-800">Yelix is</h3>
            <p className="text-2xl font-bold text-green-600">{relativePerformance.oak}x</p>
            <p className="text-sm text-green-700">faster than Oak</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-medium text-purple-800">Yelix is</h3>
            <p className="text-2xl font-bold text-purple-600">{relativePerformance.express}x</p>
            <p className="text-sm text-purple-700">faster than Express.js</p>
          </div>
        </div>
      </div>

      <ResponseTimeChart data={performanceData} />
      <VolumeMetricsChart data={volumeData} />
      
      {/* Framework Summaries */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Framework Summaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deno Frameworks */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-800 border-b pb-2">Deno Frameworks</h3>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-blue-800">Yelix</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>• <strong>37,133</strong> req/s</li>
                <li>• <strong>3.28ms</strong> avg response</li>
                <li>• <strong>6.18ms</strong> p95</li>
                <li>• Base comparison framework</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium text-orange-800">Oak</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>• <strong>24,212</strong> req/s</li>
                <li>• <strong>5.07ms</strong> avg response</li>
                <li>• <strong>9.24ms</strong> p95</li>
                <li>• {(100 - (24212.44/37132.79)*100).toFixed(1)}% slower than Yelix</li>
              </ul>
            </div>
          </div>
          
          {/* Node.js Frameworks */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-800 border-b pb-2">Node.js Frameworks</h3>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-medium text-red-800">Fastify</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>• <strong>32,505</strong> req/s</li>
                <li>• <strong>3.77ms</strong> avg response</li>
                <li>• <strong>9.94ms</strong> p95</li>
                <li>• {(100 - (32504.80/37132.79)*100).toFixed(1)}% slower than Yelix</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium text-purple-800">Express.js</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>• <strong>8,683</strong> req/s</li>
                <li>• <strong>14.33ms</strong> avg response</li>
                <li>• <strong>25.27ms</strong> p95</li>
                <li>• {(100 - (8683.07/37132.79)*100).toFixed(1)}% slower than Yelix</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}