export const ifObjectInArray = (array, object) =>
    array.map(object => object.name).indexOf(object.name) !== -1