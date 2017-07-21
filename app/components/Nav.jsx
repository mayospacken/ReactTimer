var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="vertical medium-horizontal menu">
                    <li className="menu-text">React Timer App</li>
                    <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                    <li><Link to="/countdown" activeClassName="active">Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="vertical medium-horizontal menu">
                    <li className="menu-text">created by <a href="http://www.silu-berlin.de" target="_blank">Mario</a></li>
                </ul>
            </div>
        </div>
    );
}

module.exports = Nav;
