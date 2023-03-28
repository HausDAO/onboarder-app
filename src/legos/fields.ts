import { TARGET_DAO } from '../targetDao';
import { CustomFieldLego } from './config';

export const APP_FIELD: Record<string, CustomFieldLego> = {
  NAME: {
    id: 'name',
    type: 'championName',
    label: `${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].DELEGATAE_NAME} Name`,
    placeholder: 'Enter name',
  },
  DESCRIPTION: {
    id: 'description',
    type: 'textarea',
    label: 'Brief Platform Description',
    placeholder: 'Enter description',
    helperText:
      'A succinct discription of your profile that gets across your purpose at a glance',
  },
  LINK: {
    id: 'link',
    type: 'input',
    label: 'Full Platform Link',
    placeholder: 'http://',
    expectType: 'url',
    helperText: 'Please provide a link to your detailed profile',
  },
};
