import { LanguageCode, PluginCommonModule, VendurePlugin } from '@vendure/core';

/**
 * Adds a stable identifier that points to the customer record in an external system.
 * The value is intentionally optional: existing customers remain valid after install.
 */
@VendurePlugin({
  imports: [PluginCommonModule],
  configuration: (config) => {
    config.customFields.Customer.push({
      name: 'externalReference',
      type: 'string',
      nullable: true,
      label: [
        {
          languageCode: LanguageCode.en,
          value: 'External reference',
        },
      ],
    });

    return config;
  },
  compatibility: '>=3.0.0',
})
export class CustomerReferencePlugin {}
