import './App.css'
import { Header } from './components/shared/header';
import AppRoutes from './routes/appRoutes'

function App() {
    
  return (
    <div className='min-h-screen bg-slate-950'>
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <AppRoutes />
      </main>

    </div>
  )
}

export default App
