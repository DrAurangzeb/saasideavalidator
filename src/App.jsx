import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import BusinessIdeaForm from './components/BusinessIdeaForm';
import ValidationResults from './components/ValidationResults';
import Header from './components/Header';
import { validateBusinessIdea } from './services/validationService';

function App() {
  const [validationResults, setValidationResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async (businessIdea) => {
    setIsLoading(true);
    try {
      const results = await validateBusinessIdea(businessIdea);
      setValidationResults(results);
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