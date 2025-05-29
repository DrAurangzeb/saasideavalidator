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

        {/* Data Sources */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Data Sources</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Analysis conducted using:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>Reddit discussions and community feedback</li>
              <li>HackerNews technical discussions</li>
              <li>Product Hunt launches and reviews</li>
              <li>Industry forums and communities</li>
            </ul>
          </div>
        </div>

        {/* Target Audience Analysis */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Target Audience Analysis</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Demographics</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Primary age group: 25-45</li>
                  <li>• Tech-savvy professionals</li>
                  <li>• Urban and suburban markets</li>
                  <li>• Mid to high income bracket</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Behavior Patterns</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Early adopters of technology</li>
                  <li>• Value convenience and efficiency</li>
                  <li>• Active online presence</li>
                  <li>• Regular online purchasers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Solutions */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Market Analysis</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2">Existing Solutions</h5>
            <div className="space-y-4">
              {results.existing_solutions.map((solution, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h6 className="font-medium text-gray-900">{solution}</h6>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a 
                      href={`https://www.producthunt.com/search?q=${encodeURIComponent(solution)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Product Hunt →
                    </a>
                    <a 
                      href={`https://www.crunchbase.com/textsearch?q=${encodeURIComponent(solution)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Crunchbase →
                    </a>
                    <a 
                      href={`https://www.g2.com/search?query=${encodeURIComponent(solution)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      G2 Reviews →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
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