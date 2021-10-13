const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
	{
		name: 'Jane Smith',
		position: 'Interior Design',
		photo: 'https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti harum ea eveniet alias architecto sint Tempore minus officiis ad praesentium hic error. Saepe, fugiat. Error distinctio accusamus fugit dignissimos, quasi dolorum corrupti excepturi consequatur quod maiores debitis harum veniam sed possimus magnam soluta quo quaerat iusto. Tempora quibusdam sequi reiciendis!',
	},
	{
		name: 'John Smith',
		position: 'Constructor',
		photo: 'https://images.unsplash.com/photo-1616618315347-f573ab590156?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		text: 'Saepe, fugiat. Error distinctio accusamus fugit dignissimos, quasi dolorum corrupti excepturi consequatur quod maiores debitis harum veniam sed possimus magnam soluta quo quaerat iusto. Tempora quibusdam sequi reiciendis!',
	},
	{
		name: 'Rob Pike',
		position: 'Go Creator',
		photo: 'https://images.unsplash.com/photo-1585236849667-fbf263ee748a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGl0JTIwZ3V5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti harum ea eveniet alias architecto sint Tempore minus officiis ad praesentium hic error. Saepe, fugiat. ',
	},
];

let idx = 1;

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx];

	testimonial.innerHTML = text;
	userImage.src = photo;
	userName.innerHTML = name;
	role.innerHTML = position;

	idx++;

	if (idx > testimonials.length - 1) {
		idx = 0;
	}
}

setInterval(updateTestimonial, 10000);
