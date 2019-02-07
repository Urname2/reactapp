import React from 'react'
import Hero from '../elements/Hero';
import Services from '../elements/Services';
import Helfo from '../elements/Helfo';

//<Hero title="" subtitle="Programmet tilbyr en rekke APIer, tjenester og brukegrensesnitt for helseaktører. Vi forvalter helselover og er faglig rådgiver innen helse."></Hero>

const Home = () => (
    <div>
        <Helfo>
            <Services />
        </Helfo>
    </div>
)

export default Home