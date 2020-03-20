import React from 'react';
import PropTypes from 'prop-types';

import { splitUpperCase } from '../shared/utils';

import { useTranslation } from '../i18n';

export default function DocLink({ docname, name }) {
  const translatedName = useTranslation(name);
  const translatedTitle = useTranslation('Read docs for {name} (opens in a new tab)', { name });
  const translatedHref = useTranslation('https://reactjs.org/docs/react-component.html#{docname}', { docname });

  const children = splitUpperCase(translatedName);

  return (
    docname
      ? (
        <a
          href={translatedHref}
          target="_blank"
          rel="noopener noreferrer"
          title={translatedTitle}
        >
          {children}
        </a>
      )
      : (
        <span>
          {children}
        </span>
      )
  );
}

DocLink.propTypes = {
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
};
