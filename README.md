# Vendure Customer Reference Plugin

A small Vendure plugin that adds an optional `externalReference` custom field to `Customer` records.

## Use case

Commerce teams often keep a customer identifier in a CRM, ERP, support desk, or data warehouse. This plugin provides a single, typed place to retain that upstream identifier on the Vendure customer record without altering Vendure core entities.

## Install from GitHub

```bash
npm install git+https://github.com/maksim-zaranok-meduzzen/vendure-customer-reference-plugin.git
```

Then add the plugin to your Vendure configuration:

```ts
import { CustomerReferencePlugin } from 'vendure-customer-reference-plugin';

export const config = {
  plugins: [CustomerReferencePlugin],
};
```

## Behaviour

- Adds `externalReference` as an optional string custom field on `Customer`.
- Keeps the value in the normal Vendure custom-field system, so it is available to Admin API and Shop API integrations according to your permissions.
- Does not call external systems or store credentials.

## Development

```bash
npm install
npm run build
```

The build produces CommonJS output in `dist/`.

## Compatibility

Vendure 3 and later.

## License

MIT# Vendure Customer Reference Plugin

A small Vendure plugin that adds an optional `externalReference` custom field to `Customer` records.

## Use case

Commerce teams often keep a customer identifier in a CRM, ERP, support desk, or data warehouse. This plugin provides a single, typed place to retain that upstream identifier on the Vendure customer record without altering Vendure core entities.

## Install

```bash
npm install vendure-customer-reference-plugin
```

Then add the plugin to your Vendure configuration:

```ts
import { CustomerReferencePlugin } from 'vendure-customer-reference-plugin';

export const config = {
  plugins: [CustomerReferencePlugin],
};
```

## Behaviour

- Adds `externalReference` as an optional string custom field on `Customer`.
- Keeps the value in the normal Vendure custom-field system, so it is available to Admin API and Shop API integrations according to your permissions.
- Does not call external systems or store credentials.

## Development

```bash
npm install
npm run build
```

The build produces CommonJS output in `dist/`.

## Compatibility

Vendure 3 and later.

## License

MIT
