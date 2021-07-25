import React from 'react';
import GithubProvider from './providers/github-provider'
import { ResetCSS } from './globals/resetCSS';
import App from './App';

const Providers = () => {
    return (
        <main>

            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>

        </main>
    )
}

export default Providers;