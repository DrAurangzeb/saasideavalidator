import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import BusinessIdeaForm from './components/BusinessIdeaForm';
import ValidationResults from './components/ValidationResults';
import Header from './components/Header';

function App() {
  const [validationResults, setValidationResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async (businessIdea) => {
    setIsLoading(true);
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock results
      const mockResults = {
        overall_score: 75,
        market_validation_summary: "The business idea shows promising market validation with clear demand signals.",
        key_pain_points: [
          "Existing solutions are too expensive",
          "Complex setup process",
          "Poor customer support"
        ],
        existing_solutions: [
          "Competitor A",
          "Competitor B",
          "Competitor C"
        ],
        market_opportunities: [
          "Target small businesses",
          "Focus on ease of use",
          "Provide better support"
        ],
        platform_insights: [
          {
            platform: "Reddit",
            insights: "Strong community interest in simplified solutions"
          },
          {
            platform: "ProductHunt",
            insights: "Users willing to pay for better alternatives"
          }
        ],
        recommendations: [
          "Focus on user-friendly interface",
          "Implement competitive pricing",
          "Prioritize customer support"
        ]
      };

      setValidationResults(mockResults);
      toast.success('Validation completed successfully!');
    } catch (error) {
      console.error('Validation error:', error);
      toast.error('Error validating business idea');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <BusinessIdeaForm onValidate={handleValidate} isLoading={isLoading} />
          {validationResults && (
            <ValidationResults results={validationResults} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;