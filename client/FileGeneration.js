Template.FileGeneration.onCreated(function () {
    this.filterDate = new ReactiveVar(moment().date(2));
});

function invoices (template) {
    var date, invoices;
    date = template.filterDate.get().toDate();
    invoices = Invoices.find(
        { CreatedOn : {$gte : date}}, {sort :{CreatedOn: 1}});
    return invoices;
}


Template.FileGeneration.helpers({
    invoices : function () {
        return invoices(Template.instance());
    }
    ,
    thisMonth : function () {
        var date = Template.instance().filterDate.get();
        return date.format('YYYY-MM-DD');
    }
    ,
    invoiceCount : function () {
        return invoices(Template.instance()).count();
    }
});

Template.FileGeneration.events({
    'change input#invoiceFrom' : function (event) {
        var date = moment(event.target.value);
        Template.instance().filterDate.set(date);
    }
});

Template.Invoice.helpers({
    formatedTotal : function () {
        return s.numberFormat(this.TotalAmount,0,',','.');
    }
    ,
    formattedCreatedOn: function () {
        return moment(this.CreatedOn).format('YY-MM-DD');
    }
    ,
    formattedDueDate: function () {
        return moment(this.DueDate).format('YY-MM-DD');
    }

});