const container = document.getElementById('container');
container.className = 'd-flex row row-cols-4';
function insertIcons(iconsArray, iconsCreationContainer) {
  iconsCreationContainer.innerHTML = '';
  iconsArray.forEach((element) => {
    const card = document.createElement('div');
    card.className = 'card col text-center my-4';
    card.innerHTML = `
      <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
      <span>${element.name}</span>
    `;
    iconsCreationContainer.append(card);
  });
}
insertIcons(lists, container);
const selettore = document.getElementById('selettore');
selettore.addEventListener('change', function () {
  const iconsTypeSelected = this.value;
  console.log(this.value);
  if (iconsTypeSelected != 'Tutti') {
    const filteredIcons = lists.filter((iconArgument) => {
      if (iconArgument.type == iconsTypeSelected) {
        return true;
      }
    });
    insertIcons(filteredIcons, container);
  } else {
    insertIcons(lists, container);
  }
});
