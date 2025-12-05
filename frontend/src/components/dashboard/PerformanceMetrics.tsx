// src/components/PerformanceMetrics.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', sales: 12000 },
  { name: 'Mar', sales: 15000 },
  { name: 'Mer', sales: 18000 },
  { name: 'Jeu', sales: 14000 },
  { name: 'Ven', sales: 20000 },
  { name: 'Sam', sales: 22000 },
  { name: 'Dim', sales: 19000 },
];

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Performance commerciale</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-500">CA (30j)</p>
          <p className="text-xl font-bold text-gray-800">780 000 CFA</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-500">Transactions</p>
          <p className="text-xl font-bold text-gray-800">42</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-500">Nouveaux clients</p>
          <p className="text-xl font-bold text-gray-800">8</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <p className="text-sm text-gray-500">Retard paiement</p>
          <p className="text-xl font-bold text-gray-800">4%</p>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceMetrics;