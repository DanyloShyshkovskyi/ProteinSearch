
function Checkbox({label, onChecked, checked, isHide}) {

    return !isHide &&
        <label onClick={e => e.stopPropagation()} className={`checkbox ${checked ? "active" : ""}`}>
            <input
                type="checkbox"
                onChange={onChecked}
                checked={checked}
            />
            {label}
            <span
                className={"checkbox__item"}
                aria-hidden="true"
            />
        </label>

}

export default Checkbox;