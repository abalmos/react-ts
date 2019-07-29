import React, { render } from 'react-dom';
import { css, Global } from '@emotion/core';
import 'normalize.css';

render(
  <>
    <Global
      styles={css`
        background: green;
      `}
    />
    <h1
      css={css`
        color: red;
      `}
    >
      This is a test!
    </h1>
  </>,
  document.getElementById('root')
);
