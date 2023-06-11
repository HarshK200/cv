const date = new Date()
const date_element = document.getElementById("dynamic_date")
const year = date.getFullYear();

console.log(year)

date_element.innerHTML = `© ${year} Harsh K.@Sharkster youtube`