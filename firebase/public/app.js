document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	const db = firebase.firestore();
	const productsRef = db.collection('products');

	const query = productsRef
		.orderBy('price', 'desc')
		.limit(2)
		.where('price', '>=', 10);

	query.get()
		.then(products => {
			products.forEach(doc => {
				data = doc.data();
				document.write(`${data.name} at $${data.price}<br>`);
			})
		});
});

