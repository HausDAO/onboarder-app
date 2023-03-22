import { CustomFieldLego } from './config';

export const APP_FIELD: Record<string, CustomFieldLego> = {
  NAME: {
    id: 'name',
    type: 'championName',
    label: 'Contributor Name',
    placeholder: 'Enter name',
  },
  DESCRIPTION: {
    id: 'description',
    type: 'textarea',
    label: 'Brief Description of Skills',
    placeholder: 'Enter description',
    helperText:
      'A succinct discription of your skills that gets across your purpose at a glance',
  },
  LINK: {
    id: 'link',
    type: 'input',
    label: 'Full Profile Link',
    placeholder: 'http://',
    expectType: 'url',
    helperText: 'Please provide a link to your detailed profile',
  },
};
