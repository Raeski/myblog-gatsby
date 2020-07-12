import React from 'react' 
import { useStaticQuery, graphql} from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const AboutPage = () => {

    const { allMarkdownRemark} = useStaticQuery (
        graphql `
            query PostList {
                allMarkdownRemark {
                    edges {
                        node {
                        fields {
                         slug
                        }
                        frontmatter {
                            title
                            date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
                            description
                            category
                            background
                        }
                        timeToRead
                        }
                    }
                    }
            }
            
        `
    )
const postList = allMarkdownRemark.edges

    return (
        <Layout>
            <SEO title="About" />
            {postList.map(({
                node: { 
                    frontmatter: {background, category, date, description, title},
                    timeToRead,
                    fields: {slug},
                    },
                    }) => (
                        <PostItem
                            slug={slug}
                            background={background}
                            category={category}
                            date={date}
                            timeToRead={timeToRead}
                            title={title}
                            description={description}
                    />       
                    ))}
           
        </Layout>
    )
}

export default AboutPage