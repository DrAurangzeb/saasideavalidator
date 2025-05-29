import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import BusinessIdeaForm from './components/BusinessIdeaForm';
import ValidationResults from './components/ValidationResults';
import Header from './components/Header';
import { validateBusinessIdea } from './services/validationService';

function App() {
  const [validationResults, setValidationResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleValidate = async (businessIdea) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await validateBusinessIdea(businessIdea);
      setValidationResults(results);
      toast.success('Validation completed successfully!');
    } catch (error) {
      console.error('Validation error:', error);
      setError(error.message || 'Error validating business idea');
      toast.error(error.message || 'Error validating business idea');
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
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative\" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <BusinessIdeaForm onValidate={handleValidate} isLoading={isLoading} />
          {validationResults && (
            <ValidationResults results={validationResults} />
          )}
          {isLoading && (
            <div className="mt-4 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Analyzing your business idea...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;