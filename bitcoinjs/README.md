# Dumb, computationally-inefficient (js lol) dormant Bitcoin address guesser
  * `npm install` to install
  * `npm start` to run
  * SoYourSayingTheresAChance.jpg
  * This can be run offline, node needs permission to write to file
  * Good luck! (you'll need it)

## How to make a WIF (importable private address)
  1. Take a private key `0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D` = 256 bits
  2. Add a `0x80` (mainnet) or `0xef` (testnet) addresses. Also add a `0x01` at the end if the private key will correspond to a compressed public key
  3. Perform SHA256 on the extended key
  4. Performe SHA256 on the result of the SHA256 hash
  5. Take the first 4 bytes of the second SHA256 hash, this is the checksum
  6. Add the 4 checksum bytes from point 5 at the end of the extended key from point 2
  7. Convert the result from a byte string into a base58 string using Base58Check encoding, this is the walvar import format private key is 256bytes (64 nibbles)
  8. WIF should start with `5` (uncompressed format), or `K`/`L` (compressed address format)

## Private/public address example (come at me, Github scrapers):
  * `L5AvBWoPP5khkr41CyTL3VUa1c5gLZeLvx5gZLTuCQocBKa2thxi`
  * `19rJ5PSjfEn6XXfP3Jqj8Ggend5bbygcYu`

## Notes
  * We use v 3.3.2 of bitcoinjs-lib (`keyPair.getAddress()` has since been refactored)
  * Will write to a file called `WIN-[unixTimestamp]` if successfull (test by setting `testing=true`)
  * WIF is a way of encoding a private ECDSA (Elliptic Curve Digital Signature Algorithm) key
  * Example:
    ```
    const keyPair = bitcoin.ECPair.makeRandom();
    console.log(keyPair.toWIF());
    console.log(keyPair.getAddress());
    ```
