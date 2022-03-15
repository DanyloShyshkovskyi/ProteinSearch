function ResetButton({label, onClick, isHide}) {

    return !isHide &&
    <button className={"reset-button"} onClick={onClick}>{label}</button>

}

export default ResetButton;