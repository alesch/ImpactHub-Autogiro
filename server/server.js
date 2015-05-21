Meteor.publish('allInvoices', function () {
    return Invoices.find();
});

Meteor.methods({
    nexudusLogin : nexudusLogin,

    alexLogin : function () {
        return nexudusLogin(
            {username:'alex@schenkman.info', password:'Lo82EfFe4'});
    }
});

function nexudusLogin (credentials) {
    var url = 'https://spaces.nexudus.com/api/billing/coworkerinvoices';
    var result, invoice;

    try {
        result = HTTP.get(url, {
            params: {
                size: 800,
                CoworkerInvoice_Paid: false
            },
            auth: credentials.username + ':' + credentials.password
        });

    } catch (e) {
        console.log(e);
        return false;
    }

    //todo return to the client and do the import later?
    //how long does the import take?
    _(result.data.Records).each(function (record) {
        invoice = _.pick(record, 'CoworkerId', 'BillToName', 'Description',
            'DueDate', 'TotalAmount', 'PaidAmount', 'CreatedOn', 'UniqueId');
        invoice._id         = invoice.UniqueId;
        invoice.CreatedOn   = new Date(invoice.CreatedOn);
        invoice.DueDate     = new Date(invoice.DueDate);
        Invoices.upsert(invoice._id, invoice);
    });

    return true;
}
