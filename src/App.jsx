
// import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowCanWeHelpYouToday from './components/HowCanWeHelpYouToday.jsx'
import CommittedToYourSaftey from './components/CommittedToYourSaftey.jsx'
import WeWillTreatYouWell from './components/WeWillTreatYouWell.jsx'
import OurSpecialisations from './components/OurSpecialisations.jsx'
import PatientAndVisitorGuide from './components/PatientAndVisitorGuide.jsx'
import AsterGlobalNetwork from './components/AsterGlobalNetwork.jsx'
import HealthLibrary from './components/HealthLibrary.jsx'
import GetInvolved from './components/GetInvolved.jsx'
import InsuranceCoverage from './components/InsuranceCoverage.jsx'

function App(){
  return (
    <>

    {/* Hedaer  */}
    <Header />

    {/* craousel  */}
    <Hero />
    

    {/* How can we help you today? */}
    <HowCanWeHelpYouToday />

    {/* Committed to your Safety */}
    <CommittedToYourSaftey />

    {/* We’ll treat you well */}
    <WeWillTreatYouWell />

    {/* Our Specialisations */}
    <OurSpecialisations />

    {/* Patient and Visitor Guide */}
    <PatientAndVisitorGuide />

    {/* Exceptional Facilities */}

    {/* Aster Global Network */}
    <AsterGlobalNetwork />

    {/* Health Library */}
    <HealthLibrary />

    {/* Get Involved */}
    <GetInvolved />

    {/* INSURANCE COVERAGE */}
    <InsuranceCoverage />

    {/* footer  */}
    </>
  )
}

export default App
