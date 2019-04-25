/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import Helmet from 'react-helmet';
import {graphql, StaticQuery } from 'gatsby';

type Metadata = { name: string; property?: never; content: string } |
    { name?: never; property: string; content: string }

interface SEOProps {
    description?: string,
    keywords?: string[],
    lang?: string,
    meta?: Metadata[],
    title: string,
}

const SEO = ({ description, lang, meta, keywords, title }: SEOProps) => (
    <StaticQuery query={
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `}
                 render={(data) => {
                     const {site} = data;
                     const metaDescription = description || site.siteMetadata.description;

                     return (
                         <Helmet
                             htmlAttributes={{
                                 lang,
                             }}
                             title={title}
                             titleTemplate={`%s | ${site.siteMetadata.title}`}
                             meta={[
                                 {
                                     name: 'description',
                                     content: metaDescription,
                                 },
                                 {
                                     property: 'og:title',
                                     content: title,
                                 },
                                 {
                                     property: 'og:description',
                                     content: metaDescription,
                                 },
                                 {
                                     property: 'og:type',
                                     content: 'website',
                                 },
                                 {
                                     name: 'twitter:card',
                                     content: 'summary',
                                 },
                                 {
                                     name: 'twitter:creator',
                                     content: site.siteMetadata.author,
                                 },
                                 {
                                     name: 'twitter:title',
                                     content: title,
                                 },
                                 {
                                     name: 'twitter:description',
                                     content: metaDescription,
                                 },
                             ]
                                 .concat(
                                     keywords.length > 0
                                         ? {
                                             name: 'keywords',
                                             content: keywords.join(', '),
                                         }
                                         : [],
                                 )
                                 .concat(meta)}
                         />
                     );
                 }}/>
);

SEO.defaultProps = {
    description: '',
    keywords: [],
    lang: 'en',
    meta: [],
};

export default SEO;
