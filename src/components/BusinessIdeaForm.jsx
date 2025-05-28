export default function BusinessIdeaForm({ onValidate, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const businessIdea = e.target.businessIdea.value;
    onValidate(businessIdea);
  };

  return (
    <div className="bg-white shadow sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Enter Your Business Idea
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Describe your business idea in detail. We'll analyze market signals and provide validation insights.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="w-full sm:max-w-xl">
            <textarea
              id="businessIdea"
              name="businessIdea"
              rows={4}
              className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
              placeholder="e.g., A subscription service for eco-friendly cleaning products"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Validating...' : 'Validate Business Idea'}
          </button>
        </form>
      </div>
    </div>
  );
}