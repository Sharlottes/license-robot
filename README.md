# UNITY LICENSE ROBOT

automatically activate the Unity personal license.

the core source code is from [activate-unity](https://github.com/kuler90/activate-unity/blob/master/src/license-robot.js), basically kinds of Github Action.

## Getting Started

0. install Node.js if you don't have it yet.
1. clone this repository locally
2. before starting, you need to download the Unity license request file via the Unity Hub. see [GET ALF FILE](#get-alf-file)
3. because Unity Authorizator sometimes requires 2FA, the crawler needs a 2FA token. see [GET 2FA TOKEN](#get-2fa-token)
4. create `.env` file at the root path of this repository
5. fill in your own unity account email, password, and the 2FA Token.

```env
ID=asdf@email.com
PASSWORD=12345678
2FA_TOKEN=****************
```

5. install NPM packages and run the project by Node.js

```bash
npm i
node .
```

### GET ALF FILE

Get the steps in the below video and save the downloaded `.alf` file at the root path of this repository.

you can't get steps 2 and 3 in _How to activate an existing license dialog_. because Unity disables activating personal license manually.


https://github.com/Sharlottes/license-robot/assets/60801210/93408d48-c2e2-446e-8861-8b55beee48dc


### GET 2FA TOKEN

1. log in to [Unity website](https://unity.com/)
2. [go to My Account's Security tab](https://id.unity.com/en/security)
3. get the steps as in the below video and click _Can't scan the barcode?_ and get the token (remove whitespaces in it - ASDF FDSA ASDF FDSA -> ASDFFDSAASDFFDSA).

https://github.com/Sharlottes/license-robot/assets/60801210/c01a1426-5c56-4b8f-8bdc-176d5ad262f2
