const heading = React.createElement(
    'h1',
    { id: 'title', className: 'heading' },
    'Namaste React'
)
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(heading);