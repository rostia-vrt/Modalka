const fruits = [
    {id: 1, title: 'Apple', price: 20},
    {id: 2, title: 'Orange', price: 30},
    {id: 3, title: 'Mango', price: 40}
];

const modal = $.modal({
    title: 'My Modal',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'ok', type: 'primary', handler() {
            console.log('Primary btn clicked');  
            modal.close();
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked');  
            modal.close();
        }}
    ]
});
