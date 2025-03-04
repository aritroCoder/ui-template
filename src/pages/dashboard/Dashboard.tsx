const Dashboard = () => {
  const installCommand = "yarn install && yarn run dev";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg mx-auto bg-white  p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold flex items-center mb-2">
          Boilerplate Setup
        </h2>
        <p className="text-gray-600 mb-4">
          This is the base of the project and consists of:
        </p>
        <ul className="list-disc list-inside text-gray-800  space-y-1">
          <li>
            ⚡ <strong>TanStack Router</strong> - For managing routes
          </li>
          <li>
            📦 <strong>Zustand</strong> - State management
          </li>
          <li>
            🛠️ <strong>Vite.js</strong> - For fast builds
          </li>
          <li>
            🎨 <strong>TailwindCSS</strong> - For UI styling
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">📂 Folder Structure</h3>
        <pre className="bg-gray-100  text-sm p-3 rounded-lg mt-2 whitespace-pre-wrap">
          {`/src
├── components/   # Reusable UI components
├── pages/        # Page components for routing
├── utils/        # Resuable utility functions
├── store/        # Zustand state management
├── main.tsx      # Entry point
├── routes/        # TanStack Router setup`}
        </pre>

        <h3 className="text-lg font-semibold mt-6">📥 Install and Run</h3>
        <div className="relative bg-gray-100  p-3 rounded-lg flex justify-between items-center">
          <code className="text-sm text-gray-800 ">{installCommand}</code>
        </div>

        <h3 className="text-lg font-semibold mt-6">📚 Documentation</h3>
        <ul className="text-blue-500 space-y-1">
          <li>
            <a href="https://tanstack.com/router/latest">TanStack Router</a>
          </li>
          <li>
            <a href="https://zustand-demo.pmnd.rs/">Zustand</a>
          </li>
          <li>
            <a href="https://vite.dev/guide/">Vite.js</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
