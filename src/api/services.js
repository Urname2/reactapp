import routes from '../infrastruktur/routes';

const services = [
    { name: 'Min kontaktinfo', route: routes.profile},
    { name: 'Blåresept vedtak', route: routes.vedtak},
    { name: 'Blåresept søknad', route: routes.reseptsonkad},
    { name: 'Mine oppgjør', route: routes.profile},
    { name: 'Frikortspørring', route: routes.profile},
    { name: 'Takstveiledning', route: routes.profile},
];

export { services };