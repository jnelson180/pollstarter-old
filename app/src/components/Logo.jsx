module.exports = class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="logo-div">
                <img src="../../../public/img/pollstarter-50.png" className="logo-50" id="imgLogo" />
                <h1 className="pollstarter-nav-text">Pollstarter</h1>
            </div>
        )
    }
}
