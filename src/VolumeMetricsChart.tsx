import TotalRequestsChart from './TotalRequestsChart';
import DataReceivedChart from './DataReceivedChart';
import DataSentChart from './DataSentChart';

export default function VolumeMetricsChart({ data }: { data: any[] }) {
  const totalRequests = data.find(d => d.name === 'Total Requests (higher is better)');
  const dataReceived = data.find(d => d.name === 'Data Received');
  const dataSent = data.find(d => d.name === 'Data Sent');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TotalRequestsChart data={[totalRequests]} />
      <DataReceivedChart data={[dataReceived]} />
      <DataSentChart data={[dataSent]} />
    </div>
  );
}
