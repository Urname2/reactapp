import React from 'react'
import Hero from '../elements/Hero';


const Vedtak = () => (
    <div>
        <Hero title="Vedtakspørring legemidler" subtitle="Søk etter eksisterende legemiddelvedtak"></Hero>
        <div className="container">
            <form>
                <input placeholder="fødselsnummer" />
                <input placeholder="Legemiddel || Næringsmiddel" />
                <input placeholder="Legemiddel type festId: ID_FBC4BD2D-CC61-4000-B5BB-65361B6DD780" />
                <button>Søk</button>
            </form>
            <div>
                <p>Todo: Loading.. Vis søkeresultat</p>
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

export default Vedtak
