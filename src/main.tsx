import { ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/react';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import './configs/antd';
import './configs/aws-cognito';
import { formConfig } from './configs/config';
import './configs/sentry';
import './configs/theme/antd.less';
import GlobalStyle from './GlobalStyle';
import { client } from './graphql/client';
import i18n from './shared/i18n';
import { ResetCSS } from '#/shared/components/common';

ReactDOM.render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback="An error has occurred">
      <I18nextProvider i18n={i18n}>
        <ResetCSS />
        <GlobalStyle />
        <ApolloProvider client={client}>
          <ConfigProvider form={formConfig} componentSize="large">
            <App />
          </ConfigProvider>
        </ApolloProvider>
      </I18nextProvider>
    </Sentry.ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);
