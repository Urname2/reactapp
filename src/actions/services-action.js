import routes from '../infrastruktur/routes';

const services = [
    {
        name: 'Min kontaktinfo',
        description: 'Oppdater kontaktinformasjon',
        icon: 'fas fa-file',
        route: routes.profile
    },
    {
        name: 'Blåresept vedtak',
        description: 'Vedtaksspørring og søknad blåresept',
        icon: 'fas fa-gavel',
        route: routes.vedtak
    },
    {
        name: 'Blåresept søknad',
        description: 'Søk på vegne av en pasient',
        icon: 'fas fa-user-edit',
        route: routes.reseptsonkad
    },
    {
        name: 'Mine oppgjør',
        description: 'Oppgjørsstatus og innrapportering oppgjør',
        icon: 'fas fa-book',
        route: routes.profile
    },
    {
        name: 'Mine takster',
        description: 'Takstveiledning og takstinformasjon',
        icon: 'fas fa-address-card',
        route: routes.profile
    },
    {
        name: 'Regeleditor',
        description: 'Redigering av regelsett',
        icon: 'fas fa-wrench blue',
        route: routes.profile
    }
];

export { services };