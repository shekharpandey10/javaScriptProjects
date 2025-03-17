const lunches = [];

const addLunchToEnd = (lunches, lunchItem) => {
  lunches.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}

const addLunchToStart = (lunches, lunchItem) => {
  lunches.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunches;
}

const removeLastLunch = (lunches) => {
  if (lunches.length == 0)
    console.log("No lunches to remove.")
  const lunchItem = lunches.pop();
  console.log(`${lunchItem} removed from the end of the lunch menu.`);
  return lunches;
}

const removeFirstLunch = (lunches) => {
  if (lunches.length == 0) {
    console.log("No lunches to remove.");
    return [];
  }
  const lunchItem = lunches.shift();
  console.log(`${lunchItem} removed from the start of the lunch menu.`);
  return lunches;
}

const getRandomLunch = (lunches) => {
  if(lunches.length==0){
    console.log("No lunches available.");
    return;
  }
  const num=Math.floor(Math.random()* lunches.length)
  console.log(`Randomly selected lunch: ${lunches[num]}`)
}

const showLunchMenu =(lunches)=>{
  if(lunches.length==0){
    console.log("The menu is empty.")
  }else{
    console.log(`Menu items: ${lunches.join(", ")}`)
  }
}

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(lunches, "Sushi");
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])
