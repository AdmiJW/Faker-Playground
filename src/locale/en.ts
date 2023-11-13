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
        bear: {
            tooltip: `Returns a random bear species.`,
            title: 'Bear',
            success: 'Faked bear!',
        },
        bird: {
            tooltip: `Returns a random bird species.`,
            title: 'Bird',
            success: 'Faked bird!',
        },
        cat: {
            tooltip: `Returns a random cat breed.`,
            title: 'Cat',
            success: 'Faked cat!',
        },
        cetacean: {
            tooltip: `Returns a random cetacean species.`,
            title: 'Cetacean',
            success: 'Faked cetacean!',
        },
        cow: {
            tooltip: `Returns a random cow species.`,
            title: 'Cow',
            success: 'Faked cow!',
        },
        crocodilia: {
            tooltip: `Returns a random crocodilian species.`,
            title: 'Crocodilia',
            success: 'Faked crocodilia!',
        },
        dog: {
            tooltip: `Returns a random dog breed.`,
            title: 'Dog',
            success: 'Faked dog!',
        },
        fish: {
            tooltip: `Returns a random fish species.`,
            title: 'Fish',
            success: 'Faked fish!',
        },
        horse: {
            tooltip: `Returns a random horse breed.`,
            title: 'Horse',
            success: 'Faked horse!',
        },
        insect: {
            tooltip: `Returns a random insect species.`,
            title: 'Insect',
            success: 'Faked insect!',
        },
        lion: {
            tooltip: `Returns a random lion species.`,
            title: 'Lion',
            success: 'Faked lion!',
        },
        rabbit: {
            tooltip: `Returns a random rabbit species.`,
            title: 'Rabbit',
            success: 'Faked rabbit!',
        },
        rodent: {
            tooltip: `Returns a random rodent breed.`,
            title: 'Rodent',
            success: 'Faked rodent!',
        },
        snake: {
            tooltip: `Returns a random snake species.`,
            title: 'Snake',
            success: 'Faked snake!',
        },
        type: {
            tooltip: `Returns a random animal type.`,
            title: 'Type',
            success: 'Faked animal type!',
        },
    },
    color: {
        title: 'Color 🎨',
        colorByCssColorSpace: {
            tooltip: `Returns a random color based on CSS color space specified.`,
            title: 'Color by CSS Color Space',
            success: 'Faked color by CSS color space!',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
            spaceLabel: 'Space',
            spaceTooltip: 'Color space to generate the color from.',
            optionA98Rgb: 'A98 RGB',
            optionDisplayP3: 'Display P3',
            optionProphotoRgb: 'ProPhoto RGB',
            optionRec2020: 'Rec. 2020',
            optionSrgb: 'sRGB',
        },
        cssSupportedFunction: {
            tooltip: `Returns a random CSS supported color function name.`,
            title: 'CSS Supported Function',
            success: 'Faked CSS supported function!',
        },
        cssSupportedSpace: {
            tooltip: `Returns a random CSS supported color space name.`,
            title: 'CSS Supported Space',
            success: 'Faked CSS supported space!',
        },
        cymk: {
            tooltip: `Returns a CMYK color.`,
            title: 'CMYK',
            success: 'Faked CMYK!',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated CYMK color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
        },
        hsl: {
            tooltip: `Returns a HSL color.`,
            title: 'HSL',
            success: 'Faked HSL!',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated HSL color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
            includeAlphaLabel: 'Include Alpha',
            includeAlphaTooltip: 'Adds an alpha value to the color (RGBA).',
        },
        human: {
            tooltip: `Returns a random human-readable color name.`,
            title: 'Human',
            success: 'Faked human color!',
        },
        hwb: {
            tooltip: `Returns a HWB color.`,
            title: 'HWB',
            success: 'Faked HWB!',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated HWB color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
        },
        lab: {
            tooltip: `Returns a LAB (CIELAB) color.`,
            title: 'LAB',
            success: 'Faked LAB!',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated LAB color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
        },
        lch: {
            tooltip: `
                Returns an LCH color. Even though upper bound of chroma in LCH color space is theoretically unbounded, 
                it is bounded to 230 as anything above will not make a noticeable difference in the browser.
            `,
            title: 'LCH',
            success: 'Faked LCH!',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated LCH color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
        },
        rgb: {
            tooltip: `Returns an RGB color.`,
            title: 'RGB',
            success: 'Faked RGB!',
            casingLabel: 'Casing',
            casingTooltip: `Letter type case of the generated hex color. Only applied when 'hex' format is used.`,
            optionLower: 'Lower',
            optionUpper: 'Upper',
            optionMixed: 'Mixed',
            formatLabel: 'Format',
            formatTooltip: 'Format of generated RGB color.',
            optionBinary: 'Binary',
            optionCss: 'CSS',
            optionDecimal: 'Decimal',
            optionHex: 'Hex',
            includeAlphaLabel: 'Include Alpha',
            includeAlphaTooltip: 'Adds an alpha value to the color (RGBA).',
            prefixLabel: 'Prefix',
            prefixTooltip: `Prefix of the generated hex color. Only applied when 'hex' format is used.`,
        },
        space: {
            tooltip: `
                Returns a random color space name from the worldwide accepted color spaces. 
                Source: https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses
            `,
            title: 'Space',
            success: 'Faked color space!',
        },
    },
    commerce: {
        title: 'Commerce 🛒',
        department: {
            tooltip: `Returns a department inside a shop.`,
            title: 'Department',
            success: 'Faked department!',
        },
        isbn: {
            tooltip: `Returns a random ISBN identifier.`,
            title: 'ISBN',
            success: 'Faked ISBN!',
            separatorLabel: 'Separator',
            separatorTooltip: 'The separator to use in the format.',
            variantLabel: 'Variant',
            variantTooltip:
                'The variant of the identifier to return. Can be either 10 (10-digit format) or 13 (13-digit format).',
        },
        price: {
            tooltip: `Generates a price between min and max (inclusive).`,
            title: 'Price',
            success: 'Faked price!',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            decimalsLabel: 'Decimals',
            decimalsTooltip: 'The number of decimal places.',
            minLabel: 'Min',
            minTooltip: 'The minimum price.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum price.',
            symbolLabel: 'Symbol',
            symbolTooltip: 'The currency value to use.',
        },
        product: {
            tooltip: `Returns a short product name.`,
            title: 'Product',
            success: 'Faked product!',
        },
        productAdjective: {
            tooltip: `Returns an adjective describing a product.`,
            title: 'Product Adjective',
            success: 'Faked product adjective!',
        },
        productDescription: {
            tooltip: `Returns a product description.`,
            title: 'Product Description',
            success: 'Faked product description!',
        },
        productMaterial: {
            tooltip: `Returns a material of a product.`,
            title: 'Product Material',
            success: 'Faked product material!',
        },
        productName: {
            tooltip: `Generates a random descriptive product name.`,
            title: 'Product Name',
            success: 'Faked product name!',
        },
    },
    company: {
        title: 'Company 🏢',
        buzzAdjective: {
            tooltip: `Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.`,
            title: 'Buzz Adjective',
            success: 'Faked buzz adjective!',
        },
        buzzNoun: {
            tooltip: `Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.`,
            title: 'Buzz Noun',
            success: 'Faked buzz noun!',
        },
        buzzPhrase: {
            tooltip: `Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.`,
            title: 'Buzz Phrase',
            success: 'Faked buzz phrase!',
        },
        buzzVerb: {
            tooltip: `Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.`,
            title: 'Buzz Verb',
            success: 'Faked buzz verb!',
        },
        catchPhrase: {
            tooltip: `Generates a random catch phrase that can be displayed to an end user.`,
            title: 'Catch Phrase',
            success: 'Faked catch phrase!',
        },
        catchPhraseAdjective: {
            tooltip: `Returns a random catch phrase adjective that can be displayed to an end user.`,
            title: 'Catch Phrase Adjective',
            success: 'Faked catch phrase adjective!',
        },
        catchPhraseDescriptor: {
            tooltip: `Returns a random catch phrase descriptor that can be displayed to an end user.`,
            title: 'Catch Phrase Descriptor',
            success: 'Faked catch phrase descriptor!',
        },
        catchPhraseNoun: {
            tooltip: `Returns a random catch phrase noun that can be displayed to an end user.`,
            title: 'Catch Phrase Noun',
            success: 'Faked catch phrase noun!',
        },
        name: {
            tooltip: `Returns a random company name.`,
            title: 'Name',
            success: 'Faked company name!',
        },
    },
    database: {
        title: 'Database 🗄️',
        collation: {
            tooltip: `Returns a random database collation.`,
            title: 'Collation',
            success: 'Faked collation!',
        },
        column: {
            tooltip: `Returns a random database column name.`,
            title: 'Column',
            success: 'Faked column!',
        },
        engine: {
            tooltip: `Returns a random database engine.`,
            title: 'Engine',
            success: 'Faked engine!',
        },
        mongoDbObjectId: {
            tooltip: `Returns a MongoDB ObjectId string.`,
            title: 'MongoDB ObjectId',
            success: 'Faked MongoDB ObjectId!',
        },
        type: {
            tooltip: `Returns a random database column type.`,
            title: 'Type',
            success: 'Faked database type!',
        },
    },
    datatype: {
        title: 'Datatype 📊',
        boolean: {
            tooltip: `
                Returns the boolean value true or false.
                Note: A probability of 0.75 results in true being returned 75% of the calls; 
                likewise 0.3 => 30%. If the probability is <= 0.0, it will always return false. 
                If the probability is >= 1.0, it will always return true. 
                The probability is limited to two decimal places.
            `,
            title: 'Boolean',
            success: 'Faked boolean!',
            probabilityLabel: 'Probability',
            probabilityTooltip:
                'The probability ([0.00, 1.00]) of returning true.',
        },
    },
    date: {
        title: 'Date 📅',
        anytime: {
            tooltip: `Generates a random date that can be either in the past or in the future.`,
            title: 'Anytime',
            success: 'Faked anytime!',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the newly generated date.',
        },
        between: {
            tooltip: `Generates a random date between the given boundaries.`,
            title: 'Between',
            success: 'Faked between!',
            errorFromMustBeBeforeTo: 'From date must be before to date.',
            errorToMustBeAfterFrom: 'To date must be after from date.',
            fromLabel: 'From',
            fromTooltip: 'The early date boundary.',
            toLabel: 'To',
            toTooltip: 'The late date boundary.',
        },
        betweens: {
            tooltip: `Generates random dates between the given boundaries.`,
            title: 'Betweens',
            success: 'Faked betweens!',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            errorFromMustBeBeforeTo: 'From date must be before to date.',
            errorToMustBeAfterFrom: 'To date must be after from date.',
            minLabel: 'Min',
            minTooltip: 'The minimum number of dates to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of dates to generate.',
            fromLabel: 'From',
            fromTooltip: 'The early date boundary.',
            toLabel: 'To',
            toTooltip: 'The late date boundary.',
        },
        birthdate: {
            tooltip: `Returns a random birthdate.`,
            title: 'Birthdate',
            success: 'Faked birthdate!',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            minLabel: 'Min',
            minTooltip: 'The minimum age or year to generate a birthdate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum age or year to generate a birthdate.',
            modeLabel: 'Mode',
            modeTooltip1: `The mode to generate the birthdate. Supported modes are 'age' and 'year' . There are two modes available 'age' and 'year': `,
            modeTooltip2: `'age': The min and max options define the age of the person (e.g. 18 - 42).`,
            modeTooltip3: `'year': The min and max options define the range the birthdate may be in (e.g. 1900 - 2000).`,
            optionAge: 'Age',
            optionYear: 'Year',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the newly generated date.',
        },
        future: {
            tooltip: `Generates a random date in the future.`,
            title: 'Future',
            success: 'Faked future!',
            yearsLabel: 'Years',
            yearsTooltip: 'The range of years the date may be in the future.',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the newly generated date.',
        },
        month: {
            tooltip: `Returns a random name of a month.`,
            title: 'Month',
            success: 'Faked month!',
            abbreviatedLabel: 'Abbreviated',
            abbreviatedTooltip: 'Whether to return an abbreviation.',
            contextLabel: 'Context',
            contextTooltip:
                "Whether to return the name of a month in the context of a date. In the default en locale this has no effect, however, in other locales like fr or ru, this may affect grammar or capitalization, for example 'январь' with { context: false } and 'января' with { context: true } in ru.",
        },
        past: {
            tooltip: `Generates a random date in the past.`,
            title: 'Past',
            success: 'Faked past!',
            yearsLabel: 'Years',
            yearsTooltip: 'The range of years the date may be in the past.',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the newly generated date.',
        },
        recent: {
            tooltip: `Generates a random date in the recent past.`,
            title: 'Recent',
            success: 'Faked recent!',
            daysLabel: 'Days',
            daysTooltip: 'The range of days the date may be in the past.',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the newly generated date.',
        },
        soon: {
            tooltip: `Generates a random date in the near future.`,
            title: 'Soon',
            success: 'Faked soon!',
            daysLabel: 'Days',
            daysTooltip: 'The range of days the date may be in the future.',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the newly generated date.',
        },
        weekday: {
            tooltip: `Returns a random day of the week.`,
            title: 'Weekday',
            success: 'Faked weekday!',
            abbreviatedLabel: 'Abbreviated',
            abbreviatedTooltip: 'Whether to return an abbreviation.',
            contextLabel: 'Context',
            contextTooltip:
                "Whether to return the day of the week in the context of a date. In the default en locale this has no effect, however, in other locales like fr or ru, this may affect grammar or capitalization, for example 'Lundi' with { context: false } and 'lundi' with { context: true } in fr.",
        },
    },
    finance: {
        title: 'Finance 💰',
        accountName: {
            tooltip: `Generates a random account name.`,
            title: 'Account Name',
            success: 'Faked account name!',
        },
        accountNumber: {
            tooltip: `Generates a random account number.`,
            title: 'Account Number',
            success: 'Faked account number!',
            lengthLabel: 'Length',
            lengthTooltip: 'The length of the account number.',
        },
        amount: {
            tooltip: `Generates a random amount between the given bounds (inclusive).`,
            title: 'Amount',
            success: 'Faked amount!',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            autoFormatLabel: 'Auto Format',
            autoFormatTooltip:
                'If true this method will use Number.toLocaleString(). Otherwise it will use Number.toFixed().',
            decimalsLabel: 'Decimals',
            decimalsTooltip: 'The number of decimal places for the amount.',
            minLabel: 'Min',
            minTooltip: 'The lower bound for the amount.',
            maxLabel: 'Max',
            maxTooltip: 'The upper bound for the amount.',
            symbolLabel: 'Symbol',
            symbolTooltip: 'The symbol used to prefix the amount.',
        },
        bic: {
            tooltip: `Generates a random SWIFT/BIC code based on the ISO-9362 format.`,
            title: 'BIC',
            success: 'Faked BIC!',
            includeBranchCodeLabel: 'Include Branch Code',
            includeBranchCodeTooltip:
                'Whether to include a three-digit branch code at the end of the generated code.',
        },
        bitcoinAddress: {
            tooltip: `Generates a random bitcoin address.`,
            title: 'Bitcoin Address',
            success: 'Faked bitcoin address!',
        },
        creditCardCvv: {
            tooltip: `Generates a random credit card CVV.`,
            title: 'Credit Card CVV',
            success: 'Faked credit card CVV!',
        },
        creditCardIssuer: {
            tooltip: `Returns a random credit card issuer.`,
            title: 'Credit Card Issuer',
            success: 'Faked credit card issuer!',
        },
        creditCardNumber: {
            tooltip: `Generates a random credit card number.`,
            title: 'Credit Card Number',
            success: 'Faked credit card number!',
            issuerLabel: 'Issuer',
            issuerTooltip:
                'The name of the issuer (case-insensitive) or the format used to generate one.',
        },
        currency: {
            tooltip: `Returns a random currency object, containing code, name and symbol properties.`,
            title: 'Currency',
            success: 'Faked currency!',
        },
        currencyCode: {
            tooltip: `Returns a random currency code. (The short text/abbreviation for the currency (e.g. US Dollar -> USD))`,
            title: 'Currency Code',
            success: 'Faked currency code!',
        },
        currencyName: {
            tooltip: `Returns a random currency name.`,
            title: 'Currency Name',
            success: 'Faked currency name!',
        },
        currencySymbol: {
            tooltip: `Returns a random currency symbol.`,
            title: 'Currency Symbol',
            success: 'Faked currency symbol!',
        },
        ethereumAddress: {
            tooltip: `
                Creates a random, non-checksum Ethereum address. To generate a checksummed Ethereum address (with specific per character casing), 
                wrap this method in a custom method and use third-party libraries to transform the result.
            `,
            title: 'Ethereum Address',
            success: 'Faked Ethereum address!',
        },
        iban: {
            tooltip: `Generates a random iban.`,
            title: 'IBAN',
            success: 'Faked IBAN!',
            countryCodeLabel: 'Country Code',
            countryCodeTooltip:
                'The country code from which you want to generate an IBAN, if none is provided a random country will be used.',
            formattedLabel: 'Formatted',
            formattedTooltip:
                'Return a formatted version of the generated IBAN.',
        },
        litecoinAddress: {
            tooltip: `Generates a random litecoin address.`,
            title: 'Litecoin Address',
            success: 'Faked Litecoin address!',
        },
        maskedNumber: {
            tooltip: `Generates a random masked number.`,
            title: 'Masked Number',
            success: 'Faked masked number!',
            ellipsisLabel: 'Ellipsis',
            ellipsisTooltip: 'Whether to prefix the numbers with an ellipsis.',
            lengthLabel: 'Length',
            lengthTooltip: 'The length of the unmasked number.',
            parensLabel: 'Parens',
            parensTooltip: 'Whether to use surrounding parenthesis.',
        },
        pin: {
            tooltip: `Generates a random PIN number.`,
            title: 'PIN',
            success: 'Faked PIN!',
            lengthLabel: 'Length',
            lengthTooltip: 'The length of the PIN.',
        },
        routingNumber: {
            tooltip: `Generates a random routing number.`,
            title: 'Routing Number',
            success: 'Faked routing number!',
        },
        transactionDescription: {
            tooltip: `Generates a random transaction description.`,
            title: 'Transaction Description',
            success: 'Faked transaction description!',
        },
        transactionType: {
            tooltip: `Returns a random transaction type.`,
            title: 'Transaction Type',
            success: 'Faked transaction type!',
        },
    },
    git: {
        title: 'Git 🌿',
        branch: {
            tooltip: `Generates a random branch name.`,
            title: 'Branch',
            success: 'Faked branch!',
        },
        commitDate: {
            tooltip: `Generates a date string for a git commit using the same format as git log.`,
            title: 'Commit Date',
            success: 'Faked commit date!',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the commit.',
        },
        commitEntry: {
            tooltip: `Generates a random commit entry as printed by git log.`,
            title: 'Commit Entry',
            success: 'Faked commit entry!',
            eolLabel: 'EOL',
            eolTooltip:
                "Choose the end of line character to use. 'LF' = '\\n', 'CRLF' = '\\r\\n'",
            optionLF: 'LF',
            optionCRLF: 'CRLF',
            mergeLabel: 'Merge',
            mergeTooltip: 'Set to true to generate a merge message line.',
            refDateLabel: 'Reference Date',
            refDateTooltip:
                'The date to use as reference point for the commit.',
        },
        commitMessage: {
            tooltip: `Generates a random commit message.`,
            title: 'Commit Message',
            success: 'Faked commit message!',
        },
        commitSha: {
            tooltip: `
                Generates a random commit sha.
                By default, the length of the commit sha is 40 characters.
                For a shorter commit sha, use the length option.
                Usual short commit sha length is:
                7 for GitHub,
                8 for GitLab
            `,
            title: 'Commit SHA',
            success: 'Faked commit SHA!',
            lengthLabel: 'Length',
            lengthTooltip: 'The length of the commit SHA.',
        },
    },
    hacker: {
        title: 'Hacker 🎭',
        abbreviation: {
            tooltip: `Returns a random hacker/IT abbreviation.`,
            title: 'Abbreviation',
            success: 'Faked abbreviation!',
        },
        adjective: {
            tooltip: `Returns a random hacker/IT adjective.`,
            title: 'Adjective',
            success: 'Faked adjective!',
        },
        ingVerb: {
            tooltip: `Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).`,
            title: 'Verb (ing)',
            success: 'Faked verb (ing)!',
        },
        noun: {
            tooltip: `Returns a random hacker/IT noun.`,
            title: 'Noun',
            success: 'Faked noun!',
        },
        phrase: {
            tooltip: `Generates a random hacker/IT phrase.`,
            title: 'Phrase',
            success: 'Faked phrase!',
        },
        verb: {
            tooltip: `Returns a random hacker/IT verb.`,
            title: 'Verb',
            success: 'Faked verb!',
        },
    },
    image: {
        title: 'Image 📷',
        avatar: {
            tooltip: `Returns a random avatar image URL.`,
            title: 'Avatar',
            success: 'Faked avatar!',
        },
        avatarGitHub: {
            tooltip: `Generates a random avatar from GitHub.`,
            title: 'Avatar GitHub',
            success: 'Faked GitHub avatar!',
        },
        avatarLegacy: {
            tooltip: `Generates a random avatar from https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar.`,
            title: 'Avatar Legacy',
            success: 'Faked legacy avatar!',
        },
        dataUri: {
            tooltip: `Generates a random data uri containing an URL-encoded SVG image or a Base64-encoded SVG image.`,
            title: 'Data URI',
            success: 'Faked data URI!',
            colorLabel: 'Color',
            colorTooltip:
                'The color of the image. Must be a color supported by svg.',
            heightLabel: 'Height',
            heightTooltip: 'The height of the image.',
            widthLabel: 'Width',
            widthTooltip: 'The width of the image.',
            typeLabel: 'Type',
            typeTooltip:
                'The type of the image to return. Consisting of the file extension and the used encoding.',
            optionSvgBase64: 'SVG Base64',
            optionSvgUri: 'SVG URI',
        },
        url: {
            tooltip: `Generates a random image URL.`,
            title: 'URL',
            success: 'Faked URL!',
            heightLabel: 'Height',
            heightTooltip: 'The height of the image.',
            widthLabel: 'Width',
            widthTooltip: 'The width of the image.',
        },
        urlLoremFlickr: {
            tooltip: `Generates a random image url provided via https://loremflickr.com.`,
            title: 'URL Lorem Flickr',
            success: 'Faked URL Lorem Flickr!',
            categoryLabel: 'Category',
            categoryTooltip: 'Category to use for the image.',
            heightLabel: 'Height',
            heightTooltip: 'The height of the image.',
            widthLabel: 'Width',
            widthTooltip: 'The width of the image.',
        },
        urlPicsumPhotos: {
            tooltip: `Generates a random image url provided via https://picsum.photos.`,
            title: 'URL Picsum Photos',
            success: 'Faked URL Picsum Photos!',
            blurLabel: 'Blur',
            blurTooltip: 'Whether the image should be blurred.',
            greyscaleLabel: 'Greyscale',
            greyscaleTooltip: 'Whether the image should be greyscale.',
            heightLabel: 'Height',
            heightTooltip: 'The height of the image.',
            widthLabel: 'Width',
            widthTooltip: 'The width of the image.',
        },
        urlPlaceholder: {
            tooltip: `Generates a random image url provided via https://via.placeholder.com.`,
            title: 'URL Placeholder',
            success: 'Faked URL Placeholder!',
            backgroundColorLabel: 'Background Color',
            backgroundColorTooltip: 'The background color of the image.',
            formatLabel: 'Format',
            formatTooltip: 'The format of the image.',
            optionGif: 'GIF',
            optionJpg: 'JPG',
            optionJpeg: 'JPEG',
            optionPng: 'PNG',
            optionWebp: 'WEBP',
            textLabel: 'Text',
            textTooltip: 'The text to display on the image.',
            textColorLabel: 'Text Color',
            textColorTooltip: 'The text color of the image.',
            heightLabel: 'Height',
            heightTooltip: 'The height of the image.',
            widthLabel: 'Width',
            widthTooltip: 'The width of the image.',
        },
    },
    internet: {
        title: 'Internet 🌐',
        avatar: {
            tooltip: `Returns a random avatar URL.`,
            title: 'Avatar',
            success: 'Faked avatar!',
        },
        color: {
            tooltip: `
                Generates a random css hex color code in aesthetically pleasing color palette.
                Based on http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
            `,
            title: 'Color',
            success: 'Faked color!',
            blueBaseLabel: 'Blue Base',
            blueBaseTooltip:
                'The optional base blue in range between 0 and 255.',
            greenBaseLabel: 'Green Base',
            greenBaseTooltip:
                'The optional base green in range between 0 and 255.',
            redBaseLabel: 'Red Base',
            redBaseTooltip: 'The optional base red in range between 0 and 255.',
        },
        displayName: {
            tooltip: `
                Generates a display name using the given person's name as base. The resulting display name may use one or both of the provided names. 
                If the input names include Unicode characters, the resulting display name will contain Unicode characters. It will not contain spaces.
            `,
            title: 'Display Name',
            success: 'Faked display name!',
            firstNameLabel: 'First Name',
            firstNameTooltip: 'The optional first name to use.',
            lastNameLabel: 'Last Name',
            lastNameTooltip: 'The optional last name to use.',
        },
        domainName: {
            tooltip: `Generates a random domain name.`,
            title: 'Domain Name',
            success: 'Faked domain name!',
        },
        domainSuffix: {
            tooltip: `Returns a random domain suffix.`,
            title: 'Domain Suffix',
            success: 'Faked domain suffix!',
        },
        domainWord: {
            tooltip: `Generates a random domain word.`,
            title: 'Domain Word',
            success: 'Faked domain word!',
        },
        email: {
            tooltip: `Generates an email address using the given person's name as base.`,
            title: 'Email',
            success: 'Faked email!',
            allowSpecialCharactersLabel: 'Allow Special Characters',
            allowSpecialCharactersTooltip:
                "Whether special characters such as .!#$%&'*+-/=?^_`{|}~ should be included in the email address.",
            firstNameLabel: 'First Name',
            firstNameTooltip: 'The optional first name to use.',
            lastNameLabel: 'Last Name',
            lastNameTooltip: 'The optional last name to use.',
            providerLabel: 'Provider',
            providerTooltip:
                'The mail provider domain to use. If not specified, a random free mail provider will be chosen.',
        },
        emoji: {
            tooltip: `Generates a random emoji.`,
            title: 'Emoji',
            success: 'Faked emoji!',
        },
        exampleEmail: {
            tooltip: `Generates an email address using an example mail provider using the given person's name as base.`,
            title: 'Example Email',
            success: 'Faked example email!',
            allowSpecialCharactersLabel: 'Allow Special Characters',
            allowSpecialCharactersTooltip:
                "Whether special characters such as .!#$%&'*+-/=?^_`{|}~ should be included in the email address.",
            firstNameLabel: 'First Name',
            firstNameTooltip: 'The optional first name to use.',
            lastNameLabel: 'Last Name',
            lastNameTooltip: 'The optional last name to use.',
        },
        httpMethod: {
            tooltip: `Returns a random HTTP method.`,
            title: 'HTTP Method',
            success: 'Faked HTTP method!',
        },
        httpStatusCode: {
            tooltip: `Returns a random HTTP status code.`,
            title: 'HTTP Status Code',
            success: 'Faked HTTP status code!',
        },
        ip: {
            tooltip: `Generates a random IPv4 or IPv6 address.`,
            title: 'IP',
            success: 'Faked IP!',
        },
        ipv4: {
            tooltip: `Generates a random IPv4 address.`,
            title: 'IPv4',
            success: 'Faked IPv4!',
        },
        ipv6: {
            tooltip: `Generates a random IPv6 address.`,
            title: 'IPv6',
            success: 'Faked IPv6!',
        },
        mac: {
            tooltip: `Generates a random MAC address.`,
            title: 'MAC',
            success: 'Faked MAC!',
            separatorLabel: 'Separator',
            separatorTooltip:
                "The optional separator to use. Can be either ':', '-' or ''.",
            optionColon: ':',
            optionDash: '-',
            optionNone: 'None',
        },
        password: {
            tooltip: `Generates a random password.`,
            title: 'Password',
            success: 'Faked password!',
            lengthLabel: 'Length',
            lengthTooltip: 'The length of the password to generate.',
            memorableLabel: 'Memorable',
            memorableTooltip:
                'Whether the generated password should be memorable.',
            prefixLabel: 'Prefix',
            prefixTooltip: 'The prefix to use.',
        },
        port: {
            tooltip: `Generates a random port number.`,
            title: 'Port',
            success: 'Faked port!',
        },
        protocol: {
            tooltip: `Returns a random web protocol. Either http or https.`,
            title: 'Protocol',
            success: 'Faked protocol!',
        },
        url: {
            tooltip: `Generates a random http(s) url.`,
            title: 'URL',
            success: 'Faked URL!',
            appendSlashLabel: 'Append Slash',
            appendSlashTooltip:
                'Whether to append a slash to the end of the url (path).',
            protocolLabel: 'Protocol',
            protocolTooltip: 'The protocol to use.',
            optionHttp: 'HTTP',
            optionHttps: 'HTTPS',
        },
        userAgent: {
            tooltip: `Returns a random user agent string.`,
            title: 'User Agent',
            success: 'Faked user agent!',
        },
        userName: {
            tooltip: `Generates a username using the given person's name as base. The resulting username may use neither, one or both of the names provided. This will always return a plain ASCII string. Some basic stripping of accents and transliteration of characters will be done.`,
            title: 'User Name',
            success: 'Faked user name!',
            firstNameLabel: 'First Name',
            firstNameTooltip: 'The optional first name to use.',
            lastNameLabel: 'Last Name',
            lastNameTooltip: 'The optional last name to use.',
        },
    },
    location: {
        title: 'Location 📍',
        buildingNumber: {
            tooltip: `Generates a random building number.`,
            title: 'Building Number',
            success: 'Faked building number!',
        },
        cardinalDirection: {
            tooltip: `Returns a random cardinal direction (north, east, south, west).`,
            title: 'Cardinal Direction',
            success: 'Faked cardinal direction!',
            abbreviatedLabel: 'Abbreviated',
            abbreviatedTooltip:
                'If true this will return abbreviated directions (N, E, etc). Otherwise this will return the long name.',
        },
        city: {
            tooltip: `Generates a random localized city name.`,
            title: 'City',
            success: 'Faked city!',
        },
        country: {
            tooltip: `Generates a random country name.`,
            title: 'Country',
            success: 'Faked country!',
        },
        countryCode: {
            tooltip: `Returns a random ISO_3166-1 country code.`,
            title: 'Country Code',
            success: 'Faked country code!',
            variantLabel: 'Variant',
            variantTooltip:
                "The code to return. Can be either 'alpha-2' (two-letter code), 'alpha-3' (three-letter code) or 'numeric' (numeric code).",
            optionAlpha2: 'Alpha-2',
            optionAlpha3: 'Alpha-3',
            optionNumeric: 'Numeric',
        },
        county: {
            tooltip: `Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.`,
            title: 'County',
            success: 'Faked county!',
        },
        direction: {
            tooltip: `Returns a random direction (cardinal and ordinal; northwest, east, etc).`,
            title: 'Direction',
            success: 'Faked direction!',
            abbreviatedLabel: 'Abbreviated',
            abbreviatedTooltip:
                'If true this will return abbreviated directions (NW, E, etc). Otherwise this will return the long name.',
        },
        latitude: {
            tooltip: `Generates a random latitude.`,
            title: 'Latitude',
            success: 'Faked latitude!',
            boundLabel: 'Bound',
            boundTooltip: 'The bounds for the latitude to generate.',
            precisionLabel: 'Precision',
            precisionTooltip:
                'The number of decimal points of precision for the latitude.',
        },
        longitude: {
            tooltip: `Generates a random longitude.`,
            title: 'Longitude',
            success: 'Faked longitude!',
            boundLabel: 'Bound',
            boundTooltip: 'The bounds for the longitude to generate.',
            precisionLabel: 'Precision',
            precisionTooltip:
                'The number of decimal points of precision for the longitude.',
        },
        nearbyGPSCoordinate: {
            tooltip: `Generates a random GPS coordinate within the specified radius from the given coordinate.`,
            title: 'Nearby GPS Coordinate',
            success: 'Faked nearby GPS coordinate!',
            metricLabel: 'Metric',
            metricTooltip:
                'If true assume the radius to be in kilometers. If false for miles.',
            originLatitudeLabel: 'Origin Latitude',
            originLatitudeTooltip:
                'The original coordinate to get a new coordinate close to. If no coordinate is given, a random one will be chosen.',
            originLongitudeLabel: 'Origin Longitude',
            originLongitudeTooltip:
                'The original coordinate to get a new coordinate close to. If no coordinate is given, a random one will be chosen.',
            radiusLabel: 'Radius',
            radiusTooltip:
                'The maximum distance from the given coordinate to the new coordinate.',
        },
        ordinalDirection: {
            tooltip: `Returns a random ordinal direction (northwest, southeast, etc).`,
            title: 'Ordinal Direction',
            success: 'Faked ordinal direction!',
            abbreviatedLabel: 'Abbreviated',
            abbreviatedTooltip:
                'If true this will return abbreviated directions (NW, SE, etc). Otherwise this will return the long name.',
        },
        secondaryAddress: {
            tooltip: `Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.`,
            title: 'Secondary Address',
            success: 'Faked secondary address!',
        },
        state: {
            tooltip: `Returns a random localized state, or other equivalent first-level administrative entity for the locale's country such as a province or region.`,
            title: 'State',
            success: 'Faked state!',
            abbreviatedLabel: 'Abbreviated',
            abbreviatedTooltip:
                'If true this will return abbreviated first-level administrative entity names. Otherwise this will return the long name.',
        },
        street: {
            tooltip: `Generates a random localized street name.`,
            title: 'Street',
            success: 'Faked street!',
        },
        streetAddress: {
            tooltip: `Generates a random localized street address.`,
            title: 'Street Address',
            success: 'Faked street address!',
            useFullAddressLabel: 'Use Full Address',
            useFullAddressTooltip:
                'When true this will generate a full address. Otherwise it will just generate a street address.',
        },
        timeZone: {
            tooltip: `Returns a random timezone.`,
            title: 'Time Zone',
            success: 'Faked time zone!',
        },
        zipCode: {
            tooltip: `Generates random zip code from specified format. If format is not specified, the locale's zip format is used.`,
            title: 'Zip Code',
            success: 'Faked zip code!',
            formatLabel: 'Format',
            formatTooltip:
                "The optional format used to generate the zip code. This won't be used if the state option is specified.",
            stateLabel: 'State',
            stateTooltip:
                'The state to generate the zip code for. If the current locale does not have a corresponding postcode_by_state definition, an error is thrown.',
        },
    },
    lorem: {
        title: 'Lorem 📝',
        lines: {
            tooltip: `Generates the given number lines of lorem separated by '\\n'.`,
            title: 'Lines',
            success: 'Faked lines!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of lines to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of lines to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        paragraph: {
            tooltip: `Generates a paragraph with the given number of sentences.`,
            title: 'Paragraph',
            success: 'Faked paragraph!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of sentences to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of sentences to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        paragraphs: {
            tooltip: `Generates the given number of paragraphs.`,
            title: 'Paragraphs',
            success: 'Faked paragraphs!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of paragraphs to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of paragraphs to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            separatorLabel: 'Separator',
            separatorTooltip: 'The separator between paragraphs.',
        },
        sentence: {
            tooltip: `Generates a space separated list of words beginning with a capital letter and ending with a period.`,
            title: 'Sentence',
            success: 'Faked sentence!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of words to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of words to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        sentences: {
            tooltip: `Generates the given number of sentences.`,
            title: 'Sentences',
            success: 'Faked sentences!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of sentences to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of sentences to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            separatorLabel: 'Separator',
            separatorTooltip: 'The separator to add between sentences.',
        },
        slug: {
            tooltip: `Generates a slugified text consisting of the given number of hyphen separated words.`,
            title: 'Slug',
            success: 'Faked slug!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of words to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of words to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        text: {
            tooltip: `Generates a random text based on a random lorem method.`,
            title: 'Text',
            success: 'Faked text!',
        },
        word: {
            tooltip: `Generates a word of a specified length.`,
            title: 'Word',
            success: 'Faked word!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: 'The strategy to use when generating the word.',
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        words: {
            tooltip: `Generates a space separated list of words.`,
            title: 'Words',
            success: 'Faked words!',
            minLabel: 'Min',
            minTooltip: 'The minimum number of words to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum number of words to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
    },
    music: {
        title: 'Music 🎵',
        genre: {
            tooltip: `Returns a random music genre.`,
            title: 'Genre',
            success: 'Faked genre!',
        },
        songName: {
            tooltip: `Returns a random song name.`,
            title: 'Song Name',
            success: 'Faked song name!',
        },
    },
    number: {
        title: 'Number 🔢',
        bigInt: {
            tooltip: 'Returns a BigInt number.',
            title: 'Big Int',
            success: 'Faked BigInt!',
            minLabel: 'Min',
            minTooltip: 'Lower bound for generated bigint.',
            maxLabel: 'Max',
            maxTooltip: 'Upper bound for generated bigint.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        binary: {
            tooltip: 'Returns a binary number.',
            title: 'Binary',
            success: 'Faked binary!',
            minLabel: 'Min',
            minTooltip: 'Lower bound for generated number.',
            maxLabel: 'Max',
            maxTooltip: 'Upper bound for generated number.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        float: {
            tooltip: `Returns a single random floating-point number for a given precision or range and precision.`,
            title: 'Float',
            success: 'Faked float!',
            minLabel: 'Min',
            minTooltip: 'Lower bound for generated number.',
            maxLabel: 'Max',
            maxTooltip: 'Upper bound for generated number.',
            precisionLabel: 'Precision',
            precisionTooltip: 'Precision of the generated number.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        hex: {
            tooltip: `Returns a lowercase hexadecimal number.`,
            title: 'Hex',
            success: 'Faked hex!',
            minLabel: 'Min',
            minTooltip: 'Lower bound for generated number.',
            maxLabel: 'Max',
            maxTooltip: 'Upper bound for generated number.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        int: {
            tooltip: `Returns a single random integer between zero and the given max value or the given range. The bounds are inclusive.`,
            title: 'Int',
            success: 'Faked int!',
            minLabel: 'Min',
            minTooltip: 'Lower bound for generated number.',
            maxLabel: 'Max',
            maxTooltip: 'Upper bound for generated number.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        octal: {
            tooltip: `Returns an octal number.`,
            title: 'Octal',
            success: 'Faked octal!',
            minLabel: 'Min',
            minTooltip: 'Lower bound for generated number.',
            maxLabel: 'Max',
            maxTooltip: 'Upper bound for generated number.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
    },
    person: {
        title: 'Person 👨🏻',
        bio: {
            tooltip: `Returns a random short biography.`,
            title: 'Bio',
            success: 'Faked bio!',
        },
        firstName: {
            tooltip: `Returns a random first name.`,
            title: 'First Name',
            success: 'Faked first name!',
            sexLabel: 'Sex',
            sexTooltip:
                "The optional sex to use. Can be either 'female' or 'male'.",
            optionMale: 'Male',
            optionFemale: 'Female',
        },
        fullName: {
            tooltip: `Generates a random full name.`,
            title: 'Full Name',
            success: 'Faked full name!',
            firstNameLabel: 'First Name',
            firstNameTooltip: 'The optional first name.',
            lastNameLabel: 'Last Name',
            lastNameTooltip: 'The optional last name.',
            sexLabel: 'Sex',
            sexTooltip:
                "The optional sex to use. Can be either 'female' or 'male'.",
            optionFemale: 'Female',
            optionMale: 'Male',
        },
        gender: {
            tooltip: 'Returns a random gender.',
            title: 'Gender',
            success: 'Faked gender!',
        },
        jobArea: {
            tooltip: `Generates a random job area.`,
            title: 'Job Area',
            success: 'Faked job area!',
        },
        jobDescriptor: {
            tooltip: `Generates a random job descriptor.`,
            title: 'Job Descriptor',
            success: 'Faked job descriptor!',
        },
        jobTitle: {
            tooltip: `Generates a random job title.`,
            title: 'Job Title',
            success: 'Faked job title!',
        },
        jobType: {
            tooltip: `Generates a random job type.`,
            title: 'Job Type',
            success: 'Faked job type!',
        },
        lastName: {
            tooltip: `Returns a random last name.`,
            title: 'Last Name',
            success: 'Faked last name!',
            sexLabel: 'Sex',
            sexTooltip:
                "The optional sex to use. Can be either 'female' or 'male'.",
            optionFemale: 'Female',
            optionMale: 'Male',
        },
        middleName: {
            tooltip: `Returns a random middle name.`,
            title: 'Middle Name',
            success: 'Faked middle name!',
            sexLabel: 'Sex',
            sexTooltip:
                "The optional sex to use. Can be either 'female' or 'male'.",
            optionFemale: 'Female',
            optionMale: 'Male',
        },
        prefix: {
            tooltip: `Returns a random person prefix.`,
            title: 'Prefix',
            success: 'Faked prefix!',
            sexLabel: 'Sex',
            sexTooltip:
                "The optional sex to use. Can be either 'female' or 'male'.",
            optionFemale: 'Female',
            optionMale: 'Male',
        },
        sex: {
            tooltip: `
                Returns a random sex. Output of this method is localised, so it should not be used to fill 
                the parameter sex available in some other modules for example faker.person.firstName().
            `,
            title: 'Sex',
            success: 'Faked sex!',
        },
        sexType: {
            tooltip: `Returns a random sex type.`,
            title: 'Sex Type',
            success: 'Faked sex type!',
        },
        suffix: {
            tooltip: `Returns a random person suffix.`,
            title: 'Suffix',
            success: 'Faked suffix!',
        },
        zodiacSign: {
            tooltip: `Returns a random zodiac sign.`,
            title: 'Zodiac Sign',
            success: 'Faked zodiac sign!',
        },
    },
    phone: {
        title: 'Phone 📞',
        imei: {
            tooltip: `Generates IMEI number.`,
            title: 'IMEI',
            success: 'Faked IMEI!',
        },
        number: {
            tooltip: `Generates a random phone number.`,
            title: 'Number',
            success: 'Faked number!',
            formatLabel: 'Format',
            formatTooltip:
                'Format of the phone number. Defaults to a random phone number format.',
        },
    },
    science: {
        title: 'Science 🔬',
        chemicalElement: {
            tooltip: 'Returns a random periodic table element.',
            title: 'Chemical Element',
            success: 'Faked chemical element!',
        },
        unit: {
            tooltip: 'Returns a random scientific unit.',
            title: 'Unit',
            success: 'Faked unit!',
        },
    },
    string: {
        title: 'String 🔡',
        alpha: {
            tooltip: `Generating a string consisting of letters in the English alphabet.`,
            title: 'Alpha',
            success: 'Faked alpha!',
            casingLabel: 'Casing',
            casingTooltip: 'The casing of the characters.',
            optionLower: 'Lower',
            optionUpper: 'Upper',
            optionMixed: 'Mixed',
            excludeLabel: 'Exclude',
            excludeTooltip:
                'An array with characters which should be excluded in the generated string.',
            minLabel: 'Min',
            minTooltip: 'The number or range of characters to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The number or range of characters to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        alphanumeric: {
            tooltip: `Generating a string consisting of alpha characters and digits.`,
            title: 'Alphanumeric',
            success: 'Faked alphanumeric!',
            casingLabel: 'Casing',
            casingTooltip: 'The casing of the characters.',
            optionLower: 'Lower',
            optionUpper: 'Upper',
            optionMixed: 'Mixed',
            excludeLabel: 'Exclude',
            excludeTooltip:
                'An array pf characters and digits which should be excluded in the generated string.',
            minLabel: 'Min',
            minTooltip:
                'The number or range of characters and digits to generate.',
            maxLabel: 'Max',
            maxTooltip:
                'The number or range of characters and digits to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        binary: {
            tooltip: `Returns a binary string.`,
            title: 'Binary',
            success: 'Faked binary!',
            minLabel: 'Min',
            minTooltip:
                'The number or range of characters to generate after the prefix.',
            maxLabel: 'Max',
            maxTooltip:
                'The number or range of characters to generate after the prefix.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            prefixLabel: 'Prefix',
            prefixTooltip: 'Prefix for the generated number.',
        },
        fromCharacters: {
            tooltip: `Generates a string from the given characters.`,
            title: 'From Characters',
            success: 'Faked from characters!',
            minLabel: 'Min',
            minTooltip: 'The minimum length of the string to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum length of the string to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            charactersLabel: 'Characters',
            charactersTooltip:
                'The characters to use for the string. Can be a string or an array of characters. If it is an array, then each element is treated as a single character even if it is a string with multiple characters.',
        },
        hexadecimal: {
            tooltip: `Returns a hexadecimal string.`,
            title: 'Hexadecimal',
            success: 'Faked hexadecimal!',
            casingLabel: 'Casing',
            casingTooltip: 'Casing of the generated number.',
            optionLower: 'Lower',
            optionUpper: 'Upper',
            optionMixed: 'Mixed',
            minLabel: 'Min',
            minTooltip:
                'The number or range of characters to generate after the prefix.',
            maxLabel: 'Max',
            maxTooltip:
                'The number or range of characters to generate after the prefix.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            prefixLabel: 'Prefix',
            prefixTooltip: 'Prefix for the generated number.',
        },
        nanoId: {
            tooltip: `Generates a Nano ID.`,
            title: 'Nano ID',
            success: 'Faked Nano ID!',
            minLabel: 'Min',
            minTooltip: 'The minimum length of the Nano ID to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum length of the Nano ID to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        numeric: {
            tooltip: `Generates a given length string of digits.`,
            title: 'Numeric',
            success: 'Faked numeric!',
            allowLeadingZeroesLabel: 'Allow Leading Zeroes',
            allowLeadingZeroesTooltip:
                'Whether leading zeros are allowed or not.',
            excludeLabel: 'Exclude',
            excludeTooltip:
                'An array of digits which should be excluded in the generated string.',
            minLabel: 'Min',
            minTooltip: 'The number or range of digits to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The number or range of digits to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        octal: {
            tooltip: `Returns an octal string.`,
            title: 'Octal',
            success: 'Faked octal!',
            minLabel: 'Min',
            minTooltip:
                'The number or range of characters to generate after the prefix.',
            maxLabel: 'Max',
            maxTooltip:
                'The number or range of characters to generate after the prefix.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            prefixLabel: 'Prefix',
            prefixTooltip: 'Prefix for the generated number.',
        },
        sample: {
            tooltip: `Returns a string containing UTF-16 chars between 33 and 125 (! to }).`,
            title: 'Sample',
            success: 'Faked sample!',
            minLabel: 'Min',
            minTooltip: 'The minimum length of the string to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum length of the string to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        symbol: {
            tooltip: `Returns a string containing only special characters from the following list: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ \` { | } ~`,
            title: 'Symbol',
            success: 'Faked symbol!',
            minLabel: 'Min',
            minTooltip: 'The minimum length of special characters to generate.',
            maxLabel: 'Max',
            maxTooltip: 'The maximum length of special characters to generate.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        uuid: {
            tooltip: `Returns a UUID v4 (Universally Unique Identifier).`,
            title: 'UUID',
            success: 'Faked UUID!',
        },
    },
    system: {
        title: 'System 🖥️',
        commonFileExt: {
            tooltip: `Returns a commonly used file extension.`,
            title: 'Common File Extension',
            success: 'Faked common file extension!',
        },
        commonFileName: {
            tooltip: `Returns a random file name with a given extension or a commonly used extension.`,
            title: 'Common File Name',
            success: 'Faked common file name!',
            extensionLabel: 'Extension',
            extensionTooltip:
                'Extension. Empty string is considered to be not set.',
        },
        commonFileType: {
            tooltip: `Returns a commonly used file type.`,
            title: 'Common File Type',
            success: 'Faked common file type!',
        },
        cron: {
            tooltip: 'Returns a random cron expression.',
            title: 'Cron',
            success: 'Faked cron!',
            includeNonStandardLabel: 'Include Non-Standard',
            includeNonStandardTooltip:
                'Whether to include a @yearly, @monthly, @daily, etc text labels in the generated expression.',
            includeYearLabel: 'Include Year',
            includeYearTooltip:
                'Whether to include a year in the generated expression.',
        },
        directoryPath: {
            tooltip: `Generates a directory path.`,
            title: 'Directory Path',
            success: 'Faked directory path!',
        },
        fileExt: {
            tooltip: `Returns a file extension.`,
            title: 'File Extension',
            success: 'Faked file extension!',
            mimeTypeLabel: 'Mime Type',
            mimeTypeTooltip: 'Valid mime-type',
        },
        fileName: {
            tooltip: `Returns a random file name with extension.`,
            title: 'File Name',
            success: 'Faked file name!',
            minExtensionsLabel: 'Min Extensions',
            minExtensionsTooltip:
                'Define how many extensions the file name should have.',
            maxExtensionsLabel: 'Max Extensions',
            maxExtensionsTooltip:
                'Define how many extensions the file name should have.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
        filePath: {
            tooltip: `Returns a file path.`,
            title: 'File Path',
            success: 'Faked file path!',
        },
        fileType: {
            tooltip: `Returns a file type.`,
            title: 'File Type',
            success: 'Faked file type!',
        },
        mimeType: {
            tooltip: `Returns a mime-type.`,
            title: 'Mime Type',
            success: 'Faked mime type!',
        },
        networkInterface: {
            tooltip: `Returns a random network interface.`,
            title: 'Network Interface',
            success: 'Faked network interface!',
            interfaceSchemaLabel: 'Interface Schema',
            interfaceSchemaTooltip:
                'The interface schema. Can be one of index, slot, mac, pci.',
            optionIndex: 'Index',
            optionSlot: 'Slot',
            optionMac: 'Mac',
            optionPci: 'PCI',
            interfaceTypeLabel: 'Interface Type',
            interfaceTypeTooltip:
                'The interface type. Can be one of en, wl, ww.',
            optionEn: 'EN',
            optionWl: 'WL',
            optionWw: 'WW',
        },
        semVer: {
            tooltip: `Returns a semantic version.`,
            title: 'Semantic Version',
            success: 'Faked semantic version!',
        },
    },
    vehicle: {
        title: 'Vehicle 🚗',
        bicycle: {
            tooltip: `Returns a type of bicycle.`,
            title: 'Bicycle',
            success: 'Faked bicycle!',
        },
        color: {
            tooltip: `Returns a vehicle color.`,
            title: 'Color',
            success: 'Faked color!',
        },
        fuel: {
            tooltip: `Returns a fuel type.`,
            title: 'Fuel',
            success: 'Faked fuel!',
        },
        manufacturer: {
            tooltip: `Returns a manufacturer name.`,
            title: 'Manufacturer',
            success: 'Faked manufacturer!',
        },
        model: {
            tooltip: `Returns a vehicle model.`,
            title: 'Model',
            success: 'Faked model!',
        },
        type: {
            tooltip: `Returns a vehicle type.`,
            title: 'Type',
            success: 'Faked type!',
        },
        vehicle: {
            tooltip: `Returns a random vehicle.`,
            title: 'Vehicle',
            success: 'Faked vehicle!',
        },
        vin: {
            tooltip: `Returns a vehicle identification number (VIN).`,
            title: 'VIN',
            success: 'Faked VIN!',
        },
        vrm: {
            tooltip: `Returns a vehicle registration number (Vehicle Registration Mark - VRM)`,
            title: 'VRM',
            success: 'Faked VRM!',
        },
    },
    word: {
        title: 'Word 📖',
        adjective: {
            tooltip: `Returns an adjective of random or optionally specified length.`,
            title: 'Adjective',
            success: 'Faked adjective!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        adverb: {
            tooltip: `Returns an adverb of random or optionally specified length.`,
            title: 'Adverb',
            success: 'Faked adverb!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        conjunction: {
            tooltip: `Returns a conjunction of random or optionally specified length.`,
            title: 'Conjunction',
            success: 'Faked conjunction!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        interjection: {
            tooltip: `Returns an interjection of random or optionally specified length.`,
            title: 'Interjection',
            success: 'Faked interjection!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        noun: {
            tooltip: `Returns a noun of random or optionally specified length.`,
            title: 'Noun',
            success: 'Faked noun!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        preposition: {
            tooltip: `Returns a preposition of random or optionally specified length.`,
            title: 'Preposition',
            success: 'Faked preposition!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        sample: {
            tooltip: `Returns a random sample of random or optionally specified length.`,
            title: 'Sample',
            success: 'Faked sample!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        verb: {
            tooltip: `Returns a verb of random or optionally specified length.`,
            title: 'Verb',
            success: 'Faked verb!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
            strategyLabel: 'Strategy',
            strategyTooltip: `
                The strategy to apply when no words with a matching length are found. Available error handling strategies:
                fail: Throws an error if no words with the given length are found.
                shortest: Returns any of the shortest words.
                closest: Returns any of the words closest to the given length.
                longest: Returns any of the longest words.
                any-length: Returns a word with any length.
            `,
            optionAnyLength: 'Any Length',
            optionClosest: 'Closest',
            optionFail: 'Fail',
            optionLongest: 'Longest',
            optionShortest: 'Shortest',
        },
        words: {
            tooltip: `Returns a string containing a number of space separated random words.`,
            title: 'Words',
            success: 'Faked words!',
            minLabel: 'Min',
            minTooltip: 'The expected length of the word.',
            maxLabel: 'Max',
            maxTooltip: 'The expected length of the word.',
            errorMaxMustBeGreaterThanMin: 'Max must be greater than min.',
            errorMinMustBeLessThanMax: 'Min must be less than max.',
        },
    },
};
