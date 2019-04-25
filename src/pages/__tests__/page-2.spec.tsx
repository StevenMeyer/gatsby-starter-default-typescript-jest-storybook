import * as React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from '../../../__mocks__/gatsby'; // mocked

import PageTwo from '../page-2';

beforeEach(() => {
    StaticQuery.mockImplementation(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: 'GatsbyJS',
                },
            },
        }),
    );
});

describe('Page Two', () => {
    it('contains NOT FOUND text', () => {
        const { getByText } = render(<PageTwo/>);

        const el = getByText('Welcome to page 2');

        expect(el).toBeInTheDocument();
    });
});