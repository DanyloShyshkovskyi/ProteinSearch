import Search from "../Search/Search";
import {useEffect, useState} from "react";
import Checkbox from "../Checkbox/Checkbox";
import {getList} from "../../Actions/getList";
import useRequest from "../../Hooks/useRequest";
import Counter from "../Counter/Counter";
import ResetButton from "../ResetButton/ResetButton";
import {ifObjectInArray} from "../../Helpers/ifObjectInArray";
import {addRemoveChecked} from "../../Helpers/addRemoveChecked";
import useEventListener from "../../Hooks/useEventListener";

function ProteinSearch() {

    const [searchValue, setSearchValue] = useState('');
    const [checkedArray, setCheckedArray] = useState([])
    const [itemList] = useRequest(()=>getList(searchValue),searchValue)

    const [isOpenSearch, setIsOpenSearch] = useState(false)

    const closeSearch = () => {
        setSearchValue("")
        setIsOpenSearch(false)
    }

    const pressEsc = (event) => {
        if (event.key === "Escape") {
            closeSearch()
        }
    }

    const onResetClick = (e) => {
        e.stopPropagation()
        setSearchValue("")
        setCheckedArray([])
    }

    useEventListener("click",closeSearch)
    useEventListener("keydown",pressEsc)

    const onChecked = (item) => {
        setCheckedArray(prevState => addRemoveChecked(prevState, item))
    }

    useEffect(()=>{
        console.log("Checked Elements:")
        console.log(checkedArray)
    },[checkedArray])



    return (
        <div className={"proteinSearchBlock"}>
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setIsOpen={setIsOpenSearch}
                isOpen={isOpenSearch}
                onButtonClick={closeSearch}
            >
                <Counter
                    onClick={()=>setSearchValue("")}
                    counterValue={checkedArray.length}
                />
            </Search>
            <div className={`checkbox-list ${isOpenSearch ? "open" : ""}`}>
                {checkedArray.map((item, index) =>
                        <Checkbox
                            key={index}
                            label={item.name}
                            checked={checkedArray.includes(item)}
                            isHide={ifObjectInArray(itemList, item)}
                            onChecked={()=>onChecked(item)}
                        />)}
                {itemList?.map((item, index) =>
                    <Checkbox
                        key={index}
                        label={item.name}
                        checked={ifObjectInArray(checkedArray, item)}
                        onChecked={()=>onChecked(item)}
                    />)}
                <ResetButton
                    label={"Reset"}
                    onClick={onResetClick}
                    isHide={checkedArray.length === 0}
                />
            </div>
        </div>
    );
}

export default ProteinSearch;
