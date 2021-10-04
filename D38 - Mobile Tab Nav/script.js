const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');

console.log(listItems);
console.log(contents);

listItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();
		item.classList.add('active');
		contents[index].classList.add('show');
	});
});

function hideAllContents() {
	contents.forEach((content) => {
		content.classList.remove('show');
	});
}
function hideAllItems() {
	listItems.forEach((item) => {
		item.classList.remove('active');
	});
}
