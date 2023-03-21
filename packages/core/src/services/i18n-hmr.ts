import { useEffect } from 'react';

import { isServer } from '@your-monorepo/core/utils/browser';
import { useTranslation } from 'next-i18next';

export const useI18nextHMR = (isDevmode: boolean): void => {
  const { i18n } = useTranslation();

  if (isServer()) {
    import('i18next-hmr/server').then(({ applyServerHMR }) => {
      applyServerHMR(i18n);
    });
  }

  useEffect(() => {
    if (isDevmode) {
      import('i18next-hmr/client').then(({ applyClientHMR }) => {
        applyClientHMR(i18n);
      });
    }
  }, [i18n, isDevmode]);

  if (!isDevmode) {
    return;
  }
};
