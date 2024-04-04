# flamingo-dashboard-athon

## Introduction

This repo is a collection of resources you may find useful while participating in Flamingo Finance's 1,000+ GAS Dashboard-ATHON.

## Folder structure

- **assets**: images and svgs to make your creation beautiful
- **data**: core data for pools and tokens on Flamingo Finance (MainNet data)
- **js**: javascript files to speed up your development

## API js client

The file "api-client.js" in the js folder contains a javascript ECMA 2020 class built with the hardcoded URL of the API with all the endpoints ready to be used and integrated into your code.

### How to use it

Install axios:

```
npm install axios
```

Use the client:

```javascript
// Import the client class
import ApiClient from './js/api-client';

// Create the client with a custom url or leave blank to use default one (https://neo-api.b-cdn.net)
const client = new ApiClient();

// Use it to retrieve data
const data = await client.getFlamingoLivedataPricesLatest();
```

## API docs

To create something awesome you need data. Go to https://neo-api.b-cdn.net/docs#/ to explore all the available endpoints.

## Useful links

- https://flamingo.finance/
- https://neo-api.b-cdn.net/docs#/
- https://neo.org/
