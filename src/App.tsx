import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

type Page = 'home' | 'about' | 'projects' | 'project-detail' | 'skills' | 'contact' | '404'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: string) => {
    const valid: Page[] = ['home', 'about', 'projects', 'project-detail', 'skills', 'contact']
    setPage(valid.includes(p as Page) ? (p as Page) : '404')
  }

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home navigate={navigate} />
      case 'about': return <About />
      case 'projects': return <Projects navigate={navigate} />
      case 'project-detail': return <ProjectDetail navigate={navigate} />
      case 'skills': return <Skills />
      case 'contact': return <Contact />
      default: return <NotFound navigate={navigate} />
    }
  }

  const showFooter = page !== '404'

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', color: '#e2e8f0' }}>
      <Navbar currentPage={page} navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      {showFooter && <Footer navigate={navigate} />}
    </div>
  )
}
