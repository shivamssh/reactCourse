const h1 = React.createElement('h1',{
    id:'h1-id',
    className: 'theme'
},'Day-1');
const h2 = React.createElement('h2', {
    id:'h2-id',
    className: 'theme'
}, '24-DEC-2022 Saturday'
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([h1, h2]);