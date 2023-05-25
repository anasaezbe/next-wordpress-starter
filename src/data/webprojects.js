import { gql } from '@apollo/client';

export const WEBPROJECT_FIELDS = gql`
  fragment WebProjectFields on WebProject {
    id
    databaseId
    date
    webProjectId
    slug
    title
    webProjectContent {
      webSpecs {
        
        projectyear
    
      }
    }
  }
`;

export const QUERY_ALL_WEBPROJECTS_INDEX = gql`
  ${WEBPROJECT_FIELDS}
  query AllWebProjectsIndex {
    webProjects(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields
        }
      }
    }
  }
`;

export const QUERY_ALL_WEBPROJECTS_ARCHIVE = gql`
  ${WEBPROJECT_FIELDS}
  query AllWebProjectsArchive {
    webProjects(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields

          excerpt
        }
      }
    }
  }
`;

export const QUERY_FRAGMENT_WEBPROJECT_BY_SLUG = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectBySlug($slug: ID!) {
    webProject(id: $slug, idType: SLUG) {
      ...WebProjectFields

      excerpt
    }
  }
`;

export const QUERY_ALL_WEBPROJECTS = gql`
  ${WEBPROJECT_FIELDS}
  query AllWebProjects {
    webProjects(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields

          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECT_BY_SLUG = gql`
  ${WEBPROJECT_FIELDS}

  query WebProjectBySlug($slug: ID!) {
    webProject(id: $slug, idType: SLUG) {
      ...WebProjectFields

      excerpt

      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }

      webProjectContent {
        webSpecs {
          cliente
          partners
          projectdescription
          projectyear
          team
        }
        downloads {
          projectDossier {
            mediaItemUrl
          }
          webUrl
        }
        firstProjectDescription
        impactBlock {
          projectQuote
          webFirstMockup {
            altText
            sourceUrl
          }
          maquetacionOpcional
        }
        webDetail1 {
          detailDescription
          detailImg {
            altText
            sourceUrl
          }
          maquetacionOpcional
        }
        webDetail2 {
          detailDescription
          detailImg {
            altText
            sourceUrl
          }
          maquetacionOpcional
        }
        webDetail3 {
          detailDescription
          detailImg {
            altText
            sourceUrl
          }
          maquetacionOpcional
        }
        webDetail4 {
          detailDescription
          detailImg {
            altText
            sourceUrl
          }
          maquetacionOpcional
        }
        webDetail5 {
          detailDescription
          detailImg {
            altText
            sourceUrl
          }
          maquetacionOpcional
        }
        sliderGaleriaFinal {
          img1 {
            altText
            sourceUrl
          }
          img2 {
            altText
            sourceUrl
          }
          img3 {
            altText
            sourceUrl
          }
          img4 {
            altText
            sourceUrl
          }
          img5 {
            altText
            sourceUrl
          }
          img6 {
            altText
            sourceUrl
          }
          img7 {
            altText
            sourceUrl
          }
          img8 {
            altText
            sourceUrl
          }
        }
        videoDestacado {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECTS_BY_CATEGORY_ID_INDEX = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectsByCategoryId($categoryId: Int!) {
    webProjects(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECTS_BY_CATEGORY_ID_ARCHIVE = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectsByCategoryId($categoryId: Int!) {
    webProjects(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields

          excerpt
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECTS_BY_CATEGORY_ID = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectsByCategoryId($categoryId: Int!) {
    webProjects(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          webProjectContent {
            webSpecs {
              cliente
              partners
              projectdescription
              projectyear
              team
            }
            downloads {
              projectDossier {
                mediaItemUrl
              }
              webUrl
            }
            firstProjectDescription
            impactBlock {
              projectQuote
              webFirstMockup {
                altText
                sourceUrl
              }
              maquetacionOpcional
            }
            webDetail1 {
              detailDescription
              detailImg {
                altText
                sourceUrl
              }
              maquetacionOpcional
            }
            webDetail2 {
              detailDescription
              detailImg {
                altText
                sourceUrl
              }
              maquetacionOpcional
            }
            webDetail3 {
              detailDescription
              detailImg {
                altText
                sourceUrl
              }
              maquetacionOpcional
            }
            webDetail4 {
              detailDescription
              detailImg {
                altText
                sourceUrl
              }
              maquetacionOpcional
            }
            webDetail5 {
              detailDescription
              detailImg {
                altText
                sourceUrl
              }
              maquetacionOpcional
            }
            sliderGaleriaFinal {
              img1 {
                altText
                sourceUrl
              }
              img2 {
                altText
                sourceUrl
              }
              img3 {
                altText
                sourceUrl
              }
              img4 {
                altText
                sourceUrl
              }
              img5 {
                altText
                sourceUrl
              }
              img6 {
                altText
                sourceUrl
              }
              img7 {
                altText
                sourceUrl
              }
              img8 {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECTS_BY_AUTHOR_SLUG_INDEX = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectByAuthorSlugIndex($slug: String!) {
    webProjects(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECTS_BY_AUTHOR_SLUG_ARCHIVE = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectByAuthorSlugArchive($slug: String!) {
    webProjects(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECTS_BY_AUTHOR_SLUG = gql`
  ${WEBPROJECT_FIELDS}
  query WebProjectByAuthorSlug($slug: String!) {
    webProjects(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...WebProjectFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECT_SEO_BY_SLUG = gql`
  query WebProjectSEOBySlug($slug: ID!) {
    webProject(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const QUERY_WEBPROJECT_PER_PAGE = gql`
  query WebProjectPerPage {
    allSettings {
      readingSettingsWebProjectsPerPage
    }
  }
`;
