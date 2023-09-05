let list1 = ["Mary", "Luke", "Hank", "James", "Lucy", "Donald"];

const iterator1 = list1[Symbol.iterator]();

const container1 = document.querySelector(".list1");

for (let i = 0; i < list1.length; i++) {
  const pippie1 = document.createElement("p");
  pippie1.innerHTML = iterator1.next().value;
  container1.appendChild(pippie1);
}

let list2 = ["Mercedez Benz", "BMW", "Ford", "Toyota", "Nissan", "Audi"];

const container2 = document.querySelector(".list2");

for (let value of list2) {
  const pippie2 = document.createElement("p");
  pippie2.innerHTML = value;
  container2.appendChild(pippie2);
}
