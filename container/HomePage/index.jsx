
import HomePage from '../Container/Home/HomeSection'
import AboutPage from '../Container/Home/AboutSection'
import BrandsSection from '../Container/Home/BrandsSection'
import CounterSection from '../Container/Home/CounterSection'
import FaqSection from '../Container/Home/FaqSection'
import ProjectSection from '../Container/Home/ProjectsSection'
import QuoteSection from '../Container/Home/QuoteSection'
import ServicesSection from '../Container/Home/ServicesSection'

function homePage() {
  return (
    
    <div>
      <HomePage/>
      <AboutPage/>
      <BrandsSection/>
      <CounterSection/>
      <FaqSection/>
      <ProjectSection/>
      <QuoteSection/>
      <ServicesSection/>
    </div>

  )
}

export default homePage