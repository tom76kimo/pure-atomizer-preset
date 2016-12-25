var React = require('react');
var ReactDom = require('react-dom');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div className="pure-button pure-button-primary Mend(5px)">Hello!</div>
                <div className="pure-button pure-button-disabled">World!</div>
            </div>
        );
    }
})

ReactDom.render(<Main />, document.querySelector('#main'));
