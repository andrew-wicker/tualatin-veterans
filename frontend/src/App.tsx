import MemberForm from './components/MemberForm';
import { Toaster } from './components/ui/toaster';
import { Separator } from './components/ui/separator';
import './App.css';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            style={{ width: '20%', height: 'auto' }}
            src="../public/tualatin-historical-society.png"
          />
          <h1 className="text-3xl font-bold ml-4">Tualatin Veterans Group</h1>
        </div>

        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Member Form</h1>
          </div>
          <Separator />
          <MemberForm />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
