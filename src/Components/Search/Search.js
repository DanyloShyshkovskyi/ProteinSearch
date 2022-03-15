function Search({searchValue, setSearchValue, children, setIsOpen, isOpen, onButtonClick}) {

    const onSearchClick = (e) => {
        e.stopPropagation()
        setIsOpen(true)
    }

    const onChange = (e) => setSearchValue(e.target.value)

    const buttonClick = (e) =>{
        e.stopPropagation()
        onButtonClick()
    }

    return (
        <form
            onClick={onSearchClick}
            className={"search-box"}
        >
            <input
                type={"text"}
                placeholder={" "}
                value={searchValue}
                onChange={onChange}
                className={`search-box__input ${isOpen ? "open" : ""}`}
            />
            <button onClick={buttonClick} className={"clear-button"} type={"reset"}/>
            {children}
        </form>
    );
}

export default Search;