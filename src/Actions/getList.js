export const getList = (name) => {
     return  fetch(`http://universities.hipolabs.com/search?name=${name}`).then(response => response.json());
}