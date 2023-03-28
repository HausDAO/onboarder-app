import { useFormBuilder } from '@daohaus/form-builder';
import { Buildable, Field, WrappedInput } from '@daohaus/ui';
import React, { useEffect } from 'react';
import { TARGET_DAO } from '../targetDao';

export const ChampionName = (props: Buildable<Field>) => {
  const { id } = props;
  const { watch, setValue } = useFormBuilder();
  const name = watch(id);
  useEffect(() => {
    const template = `${name} | ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].DELEGATAE_NAME} Request`;
    setValue('championName', template);
  }, [name]);

  return <WrappedInput {...props} />;
};
