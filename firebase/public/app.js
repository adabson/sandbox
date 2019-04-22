document.addEventListener("DOMContentLoaded", event => {

	const app = firebase.app();
	// console.log(app);

	const db = firebase.firestore();

	const myPost = db.collection('posts').doc('firstpost');

	myPost.get()
		.then(doc => {
			const data = doc.data();
			const createdAt = new Date(data.createdAt.seconds * 1000);
			// console.log( 'data',data);

			document.write( data.title + `<br>`);
			document.write( createdAt );
		})

});

function googleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth()
	  .signInWithPopup(provider)
		.then( result => {
			const user = result.user;
			document.write(`Hello ${user.displayName}`);
			// console.log(user);
		});
}