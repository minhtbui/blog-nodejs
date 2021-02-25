const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        // check which field to sort
        const sortedField = field === sort.field ? sort.type : 'default';

        const icons = {
            default: 'bi bi-funnel',
            asc: 'bi bi-sort-down-alt',
            desc: 'bi bi-sort-down',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortedField];
        const type = types[sortedField];

        const href = Handlebars.escapeExpression(
            `?_sort&field=${field}&type=${type}`,
        );

        return new Handlebars.SafeString(
            ` <a href="${href}"><i class="${icon}"></i></a>`,
        );
    },
};
