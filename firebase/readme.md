https://www.youtube.com/watch?v=9kRgVxULbag

npm i -g firebase tools
firebase login 
firebase init hosting
firebase serve
firebase deploy 

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

