import * as React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from '../../../__mocks__/gatsby'; // mocked

import Index from '../index';

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: 'GatsbyJS',
                },
            },
        }),
    ).mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: 'GatsbyJS',
                },
            },
        }),
    ).mockImplementationOnce(({ render }) =>
        render({
            placeholderImage: {
                childImageSharp: {
                    fluid: {
                        aspectRatio: 1,
                        sizes: '100 200 300',
                        src: 'pretend-i-am-a-base64-encoded-image',
                        srcSet: 'asdfasdf',
                    },
                },
            },
        }),
    );
});

describe('Index', () => {
    it('contains a greeting', () => {
        const { getByText } = render(<Index/>);

        const greeting = getByText('Hi people');

        expect(greeting).toBeInTheDocument();
    });
});