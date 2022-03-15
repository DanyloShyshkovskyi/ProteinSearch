export const addRemoveChecked = (array, object) => {
    const indexOf = array.map(object => object.name).indexOf(object.name);
    let newArray = []
    if (indexOf === -1)
        newArray = array.concat(object)
    else {
        newArray = array.filter(prevState_item => prevState_item.name !== object.name)
    }
    return newArray
}