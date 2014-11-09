Ext.create('Ext.panel.Panel', {
    bodyPadding: 5,
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Start date'
    }, {
        xtype: 'datefield',
        fieldLabel: 'End date'
    }],
    renderTo: Ext.getBody()
});