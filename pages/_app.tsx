import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import variables from '../styles/variables.module.scss';
import '../styles/index.scss';

function MyApp({ Component, pageProps }): ReactElement<AppProps> {
    return (
        <main>
            <Component {...pageProps} variables={variables} />
        </main>
    )
}

export default MyApp;