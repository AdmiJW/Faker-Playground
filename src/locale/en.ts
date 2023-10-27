export const enDict = {
    title: 'Faker Playground',
    navbar: {
        language: 'Language',
        darkMode: 'Dark Mode',
        fakerJsDoc: 'Faker.js API Documentation',
    },
    footer: {
        madeWithLove: 'Made with ❤️ by',
    },
    drawer: {
        airline: 'Airline',
        animal: 'Animal',
        color: 'Color',
        commerce: 'Commerce',
        company: 'Company',
        database: 'Database',
        datatype: 'Datatype',
        date: 'Date',
        finance: 'Finance',
        git: 'Git',
        hacker: 'Hacker',
        image: 'Image',
        internet: 'Internet',
        location: 'Location',
        lorem: 'Lorem',
        music: 'Music',
        number: 'Number',
        person: 'Person',
        phone: 'Phone',
        science: 'Science',
        string: 'String',
        system: 'System',
        vehicle: 'Vehicle',
        word: 'Word',
    },
    homeScreen: {
        welcome: 'Welcome to Faker Playground!',
        getStartedButton: 'Faking start!',
    },
    fakerSection: {
        generateButton: 'Fake!',
        noParametersNeeded: 'No parameters needed 👊',
    },
    airline: {
        title: 'Airline ✈️',
        aircraftType: {
            tooltip: `Returns a random aircraft type.`,
            title: 'Aircraft Type',
            success: 'Faked aircraft type!',
        },
        airline: {
            tooltip: 'Generates a random airline.',
            title: 'Airline',
            success: 'Faked airline!',
        },
        airplane: {
            tooltip: 'Generates a random airplane.',
            title: 'Airplane',
            success: 'Faked airplane!',
        },
        airport: {
            tooltip: 'Generates a random airport.',
            title: 'Airport',
            success: 'Faked airport!',
        },
        flightNumber: {
            tooltip: `
                Returns a random flight number. 
                Flight numbers are always 1 to 4 digits long.
                Sometimes they are used without leading zeros (e.g.: American Airlines flight 425) and
                sometimes with leading zeros, often with the airline code prepended (e.g.: AA0425).
            `,
            title: 'Flight Number',
            success: 'Faked flight number!',
            addLeadingZeroesLabel: 'Add Leading Zeroes',
            addLeadingZeroesTooltip:
                'Whether to pad the flight number up to 4 digits with leading zeros.',
            lengthLabel: 'Length',
            lengthTooltip: 'The number or range of digits to generate.',
        },
        recordLocator: {
            tooltip: `
                Generates a random record locator. Record locators are used by airlines to identify reservations. 
                They're also known as booking reference numbers, locator codes, confirmation codes, or reservation codes.
            `,
            title: 'Record Locator',
            success: 'Faked record locator!',
            allowNumericLabel: 'Allow Numeric',
            allowNumericTooltip: 'Whether to allow numeric characters.',
            allowVisuallySimilarCharactersLabel:
                'Allow Visually Similar Characters',
            allowVisuallySimilarCharactersTooltip:
                "Whether to allow visually similar characters such as '1' and 'I'.",
        },
        seat: {
            tooltip: 'Generates a random seat.',
            title: 'Seat',
            success: 'Faked seat!',
            aircraftTypeLabel: 'Aircraft Type',
            aircraftTypeTooltip: 'The aircraft type.',
            optionNarrowBody: 'Narrowbody',
            optionWideBody: 'Widebody',
            optionRegional: 'Regional',
        },
    },
    animal: {
        title: 'Animal 🐶',
    },
    color: {
        title: 'Color 🎨',
    },
    commerce: {
        title: 'Commerce 🛒',
    },
    company: {
        title: 'Company 🏢',
    },
    database: {
        title: 'Database 🗄️',
    },
    datatype: {
        title: 'Datatype 📊',
    },
    date: {
        title: 'Date 📅',
    },
    finance: {
        title: 'Finance 💰',
    },
    git: {
        title: 'Git 🌿',
    },
    hacker: {
        title: 'Hacker 🎭',
    },
    image: {
        title: 'Image 📷',
    },
    internet: {
        title: 'Internet 🌐',
    },
    location: {
        title: 'Location 📍',
    },
    lorem: {
        title: 'Lorem 📝',
    },
    music: {
        title: 'Music 🎵',
    },
    number: {
        title: 'Number 🔢',
    },
    person: {
        title: 'Person 👨🏻',
    },
    phone: {
        title: 'Phone 📞',
    },
    science: {
        title: 'Science 🔬',
    },
    string: {
        title: 'String 🔡',
    },
    system: {
        title: 'System 🖥️',
    },
    vehicle: {
        title: 'Vehicle 🚗',
    },
    word: {
        title: 'Word 📖',
    },
};
