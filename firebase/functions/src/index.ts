import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.firestore 
	.document('products/{productId}')
	.onCreate((snap, context) => {
		const docId: number = context.params.productId;
		const value: any = snap.data();
		const name: string = value.name;
		const productRef: any = admin.firestore().collection('products').doc(docId);
		return productRef.update({message: `Nice ${name}! - Love Cloud Funcs`})
	})