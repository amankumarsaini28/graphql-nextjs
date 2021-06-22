import * as React from 'react';
import { useRouter } from 'next/router';

export const RootPage = () => {
    const { asPath } = useRouter();
    return (
        <div>
            <h1>Page</h1>
            <small>{asPath}</small>
        </div>
    );
};
