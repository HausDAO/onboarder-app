import { FormLego } from '@daohaus/form-builder';
import { TARGET_DAO } from '../targetDao';
import { CustomFormLego } from './config';
import { APP_FIELD } from './fields';
import { APP_TX } from './tx';

export const APP_FORM: Record<string, CustomFormLego> = {
  VERIFY_DELEGATE: {
    id: 'VERIFY_DELEGATE',
    title: `Verify ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].DELEGATAE_NAME}`,
    subtitle: 'Verification Proposal',
    description: `Verify yourself as a DAO ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].DELEGATAE_NAME}`,
    requiredFields: { name: true, description: true, link: true },
    log: true,
    tx: APP_TX.VERIFY_DELEGATE,
    fields: [
      APP_FIELD.NAME,
      APP_FIELD.DESCRIPTION,
      APP_FIELD.LINK,
      // {
      //   id: 'segment',
      //   type: 'formSegment',
      //   title: 'User Data',
      //   fields: [
      //     {
      //       ...FIELD.DESCRIPTION,
      //       id: 'delegateDescription',
      //       label: 'User Description',
      //     },
      //     { ...FIELD.LINK, id: 'delegateLink' },
      //   ],
      // },
    ],
  },
};
