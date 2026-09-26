import './App.css'
import { TestimonialCard } from './components/TestimonialCard';
import { testimonial } from './constant';

function App() {
  return (
    <main className="page">
      <TestimonialCard {...testimonial}/> 
    </main>
  )
}

export default App
