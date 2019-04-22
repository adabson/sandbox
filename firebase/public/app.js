document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	const db = firebase.firestore();
	const productsRef = db.collection('products');

	const query = productsRef.where('price', '>', 10);

	console.log('hi');
	query.get()
		.then(products => {
			console.log('d', products);
			products.forEach(doc => {
				console.log('eee');
				data = doc.data();
				document.write(`${data.name} at $${data.price}<br>`);
			})
		});
});

