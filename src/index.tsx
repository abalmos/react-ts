import { Fragment } from 'react';
import React, { render } from 'react-dom';
import { css, Global } from '@emotion/core';
import 'normalize.css';

render(
  <Fragment>
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
  </Fragment>,
  document.getElementById('root')
);
