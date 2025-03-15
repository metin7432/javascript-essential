const breakfastMenu  =  ['Pancakes - $12', 'Eggs Benedict - $22,99', 'Oatmeal - $21.99', 'Frittata - $15 '];
const mainCourseMenu =  ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu    =  ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML =
breakfastMenu.map((item ,index) => `<p> item: ${index + 1}: ${item}</p>`).join("");

document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p> item ${index}: ${item}</p>`});
    document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

    dessertItem = '';

    for(let i = 0; i< dessertMenu.length; i++){
     
        dessertItem +=  `<p> item: ${i + 1}: ${dessertMenu[i]}</p>`
    }

    document.getElementById('dessertMenuItems').innerHTML = dessertItem;