import React from 'react'
import Hero from '../elements/Hero';
import Services from '../elements/Services';


const Home = () => (
    <div>
        <Hero title="Edit programmet" subtitle="Programmet tilbyr en rekke APIer, tjenester og brukegrensesnitt for helseaktører. Vi forvalter helselover og er faglig rådgiver innen helse."></Hero>
        <Services />
    </div>
)

export default Home