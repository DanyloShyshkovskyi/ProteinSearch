function Counter({counterValue, onClick}) {

    const onButtonClick = () => {
        onClick()
    }

    return counterValue !== 0 &&
        <div onClick={onButtonClick} className={"counter"}>
            {counterValue}
        </div>

}

export default Counter;