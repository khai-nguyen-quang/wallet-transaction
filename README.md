# wallet-transaction
A website that is able to connect to Metamask wallet and perform a send transaction

## Environment installation for client

Vite Installation guide 
https://tailwindcss.com/docs/guides/vite

Tailwindcss installation guide

Navigation bar for Mobile view
https://flowbite.com/docs/components/navbar/

CSS for ETH card
https://csshero.org/mesher/

```
cd client
npm create vite@latest
npm install

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install react-icons --save

npm run dev
```

## Environment installation for contract

Hardhat installation guide
https://hardhat.org/tutorial/creating-a-new-hardhat-project

```
cd smart_contract
npm init -y
npm install --save-dev hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install dotenv --save-dev

npx hardhat
npx hardhat test

```

Create file ./smart_contract/.env and add below content
```
//.env
PRIVATE_KEY=<private_key_of_wallet_account>
API_KEY=<dapp_api_key>
API_HTTPS=<<dapp_api_http_link>
```

Deploy the smart contract onto goerli test network
`npx hardhat run --network goerli scripts/deploy.js`
