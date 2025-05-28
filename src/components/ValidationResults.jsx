import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ValidationResults({ results }) {
  const chartData = [
    { name: 'Market Pain', score: 65 },
    { name: 'Market Interest', score: 80 },
    { name: 'Competition', score: 70 },
    { name: 'Keyword Relevance', score: 85 },
  ];

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
          Validation Results
        </h3>
        
        {/* Overall Score */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500">Overall Score</p>
              <p className="mt-1 text-4xl font-semibold text-blue-600">
                {results.overall_score}/100
              </p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <div className="h-24 w-24 rounded-full border-8 border-blue-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {results.overall_score}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="score" stroke="#2563eb" fill="#93c5fd" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Summary</h4>
          <p className="text-gray-600">{results.market_validation_summary}</p>
        </div>

        {/* Key Findings Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pain Points */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2">Key Pain Points</h5>
            <ul className="space-y-1">
              {results.key_pain_points.map((point, index) => (
                <li key={index} className="text-sm text-gray-600">• {point}</li>
              ))}
            </ul>
          </div>

          {/* Market Opportunities */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2">Market Opportunities</h5>
            <ul className="space-y-1">
              {results.market_opportunities.map((opportunity, index) => (
                <li key={index} className="text-sm text-gray-600">• {opportunity}</li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2">Recommendations</h5>
            <ul className="space-y-1">
              {results.recommendations.map((rec, index) => (
                <li key={index} className="text-sm text-gray-600">• {rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}