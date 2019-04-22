document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	const db = firebase.firestore();
	const myPost = db.collection('posts').doc('firstpost');
	// console.log(app);

	myPost.get()
		.then(doc => {
			const data = doc.data();
			const createdAt = new Date(data.createdAt.seconds * 1000);
			// console.log( 'data',data);

			document.write( data.title + `<br>`);
			document.write( createdAt );
		})
		.catch(reason => {
			if( reason.toString().indexOf('insufficient permissions'>-1)) {
				console.log('Please login.');
				return;
			}
			console.log(reason);
			//document.write('Error: ' + err);
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

