import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMachinelearningWebservices implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Machinelearning Webservices',
                name: 'N8nDevAzureMachinelearningWebservices',
                icon: { light: 'file:./azure-machinelearning-webservices.png', dark: 'file:./azure-machinelearning-webservices.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'APIs enable CRUD operations on Azure ML Web Services resources.',
                defaults: { name: 'Azure Machinelearning Webservices' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMachinelearningWebservicesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
