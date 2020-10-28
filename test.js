export default {
  properties: [
    {
      label: 'PRODUCT User Access Key',
      name: 'ucvAccessKey',
      type: 'Secure',
      description: 'The user access key to authenticate with the PRODUCT server',
      required: true
    },
    {
      name: 'serverUrl',
      label: 'URL',
      description: 'The URL of the HCL Compass server',
      required: true,
      type: 'String'
    },
    {
      name: 'userName',
      label: 'Username',
      type: 'String',
      description: 'The user name to authenticate with the HCL Compass server',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      description: 'The password used to authenticate with the Compass server',
      required: false,
      type: 'Secure'
    },
    {
      label: 'Repo',
      name: 'repo',
      type: 'String',
      description: 'The repository of the Compass project',
      required: true
    },
    {
      label: 'Database',
      name: 'db',
      type: 'String',
      description: 'The database of the Compass project from which to pull the data',
      required: true
    },
    {
      label: 'Custom Field Mapping',
      name: 'fieldMapping',
      type: 'Multiline',
      description: 'Map Compass fields to PRODUCT as a JSON Object. Please refer the document for an example',
      required: false
    },
    {
      label: 'Resync',
      name: 'resync',
      type: 'Boolean',
      description: 'Manually force a resync of all the records',
      required: false
    }
  ],
  endpoints: [],
  scheduledEvents: [SyncCompassIssueEvent],
  taskDefinitions: [],
  eventTriggers: [],
  qualityHandlers: [],
  displayName: 'Compass',
  pluginId: 'ucv-ext-compass',
  description: 'Compass plug-in imports and synchronizes issues from a Compass server as issues in the PRODUCT server'
}
