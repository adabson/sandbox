https://www.youtube.com/watch?v=9kRgVxULbag

npm i -g firebase tools
firebase login 
firebase init hosting
firebase serve
firebase deploy 
npm i -g firebase-tools
firebase init functions
firebase deploy --only functions

>create firebase project 
>enable google auth
Firebase uses json web tokens for authentication,
so there's an encrypted token on the browser to id the user 


Firebase Realtime Database vs Cloud Firestore
https://firebase.googleblog.com/2017/10/cloud-firestore-for-rtdb-developers.html
While the Firebase Realtime Database is basically a giant JSON tree where anything goes and lawlessness rules the land1, Cloud Firestore is more structured. Cloud Firestore is a document-model database, which means that all of your data is stored in objects called documents that consist of key-value pairs

Cloud Firestore 
	>enhanced scalibility 
	>indexes permit for better larger querying (if you set up your models right)
	> 10x concurrent client connections (1M instead of 100k)

> you may wanna put firebase app on wetbox and see if you can login

The Realtime Database primarily determines cost based on the amount of data that's downloaded
Cloud Firestore's pricing is primarily driven by the number of reads or writes that you perform.

Downsides to cloud:
	Detecting presense (what user/devices are online)
	Higher lag 
	if you do lots of small reads+writes per second, it could get more costly than real time database 

simple dataset read frequently -> use realtime db
larger dataset with relational dataset -> use cloud firestore 

firebase follows mongodb (concept of documents), most widely adopted no-sql db in the world
firestore noSql data modelling 
data simmilar to js object 

      allow read, write;
      allows all

      allow read, write: if false; // < delete : if false to go ham and let anyone write

			if request.auth.uid != null;

https://firebase.google.com/docs/firestore/security/get-started?authuser=0

replace 
    <script defer src="/__/firebase/5.10.0/firebase-database.js"></script>
with 
    <script defer src="/__/firebase/5.10.0/firebase-firestore.js"></script>

(lat,long) = (-33,151)
= integer point closest to Newcastle

user auth system directly tied to your database
we can listen to data changes in realtime 
myPost.onSnapshot(doc => {...});

^ really cool. 
If your app is realtime in nature,
this could save a whole lot of time :)

firebase does OPTIMISTIC UPDATES
(if you have a listener on the field,
it updates ui imediatly while sending to backend)

with firestore, you can query docs in a very expressive way

query operators:
	* field
	* operator 
	* value 

ie 
`	const query = productsRef.where('price', '>', 10);`

returns all products whos price is greater than 10 

    <!-- update the version number as needed -->
    <script defer src="/__/firebase/5.10.0/firebase-app.js"></script>
    <!-- include only the Firebase features as you need -->
    <script defer src="/__/firebase/5.10.0/firebase-auth.js"></script>
    <script defer src="/__/firebase/5.10.0/firebase-firestore.js"></script>
    <script defer src="/__/firebase/5.10.0/firebase-messaging.js"></script>
    <script defer src="/__/firebase/5.10.0/firebase-storage.js"></script>
    <!-- initialize the SDK after all desired features are loaded -->
    <script defer src="/__/firebase/init.js"></script>

firebase.json SPA url rewrites: 
    // ,"rewrites": [
    //   {
    //     "source": "**",
    //     "destination": "/index.html"
    //   }
    // ]

functions ~ kinda like your own 
node.js server that runs on demand.

instead of having one app, 
create microservices that 
handle 1 specific function.

you can share info between backend code + database.
see /functions directory 

the admin sdk can only be used in a cloud-like environment