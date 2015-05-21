Template.FileGeneration.onRendered(function () {
    this.filterDate = new ReactiveVar(moment().date(2));
});

Template.FileGeneration.helpers({
    invoices : function () {
        var date = Template.instance().filterDate.get();
        return Invoices.find({ CreatedOn : {$gte : date}});
    }
    ,
    thisMonth : function () {
        var date = Template.instance().filterDate.get();
        return date.format('YYYY-MM-DD');
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
        numeral.language('sv');
        return numeral(this.TotalAmount).format('0,000')
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