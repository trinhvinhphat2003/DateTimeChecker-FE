import "./AppIcon.css"
const AppIcon = (props) => {

    const {handleClose} = props;

    return (
        <div className="app-icon" onClick={() => handleClose()}>
            <div className="img"><img src="https://www.thebrandlaureate.com/wp-content/uploads/2019/05/LOGO-FPT-University.jpg" /></div>    
        </div>
    )
}

export default AppIcon;