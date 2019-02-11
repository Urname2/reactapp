import React from 'react'
import Hero from '../elements/Hero';


const Soknad = () => (
    <div>
        <Hero title="Blåresept søknad" subtitle="Søknad om individuell stønad på blå resept"></Hero>
        <div className="container">
            <form>
                <input placeholder="fødselsnummer" />
                <input placeholder="Sykdom" />
                <input placeholder="Legemiddel" />
                <button>Send inn søknad</button>
            </form>
            <div>
                <p>Todo: Pling! Sjekk motor om jeg får lov?</p>
            </div>
            <div>
                <p>Todo: Hvis jeg får lov, send søknaden til neste prosess</p>
            </div>
            <div>
                <p>Manuell || Godkjent</p>
            </div>
        </div>
    </div>
)

export default Soknad
