var language = {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        var b = number % 10;
        return (b === 1 || b === 2) ? ':a' : ':e';
    },
    currency: {
        symbol: 'kr'
    }
};

numeral.language('sv', language);
