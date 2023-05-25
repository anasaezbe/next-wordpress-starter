import { getApolloClient } from 'lib/apollo-client';

import { updateUserAvatar } from 'lib/users';
import { sortObjectsByDate } from 'lib/datetime';

import {
  QUERY_ALL_WEBPROJECTS_INDEX,
  QUERY_ALL_WEBPROJECTS_ARCHIVE,
  QUERY_ALL_WEBPROJECTS,
  QUERY_WEBPROJECT_BY_SLUG,
  QUERY_FRAGMENT_WEBPROJECT_BY_SLUG,
  QUERY_WEBPROJECTS_BY_AUTHOR_SLUG_INDEX,
  QUERY_WEBPROJECTS_BY_AUTHOR_SLUG_ARCHIVE,
  QUERY_WEBPROJECTS_BY_AUTHOR_SLUG,
  QUERY_WEBPROJECTS_BY_CATEGORY_ID_INDEX,
  QUERY_WEBPROJECTS_BY_CATEGORY_ID_ARCHIVE,
  QUERY_WEBPROJECTS_BY_CATEGORY_ID,
  QUERY_WEBPROJECT_SEO_BY_SLUG,
  QUERY_WEBPROJECT_PER_PAGE,
} from 'data/webprojects';

/**
 * webProjectPathBySlug
 */

export function webProjectPathBySlug(slug) {
  return `/webprojects/${slug}`;
}

/**
 * getwebProjectBySlug
 */

export async function getWebProjectBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let webProjectData;
  let seoData;
  
  

  try {
    webProjectData = await apolloClient.query({
      query: QUERY_WEBPROJECT_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[webProject][getWebProjectBySlug] Failed to query WebProject data: ${e.message}`);
    throw e;
  }

  if (!webProjectData?.data.webProject) return { webProject: undefined };

  const webProject = [webProjectData?.data.webProject].map(mapWebProjectData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_WEBPROJECT_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[webprojects][getWebProjectBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    // console.log('webProject Object:', webProject);

    const { seo = {} } = seoData?.data?.webProject || {};

    webProject.metaTitle = seo.title;
    webProject.metaDescription = seo.metaDesc;
    webProject.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      webProject.canonical = seo.canonical;
    }

    webProject.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    webProject.article = {
      author: webProject.og.author,
      modifiedTime: webProject.og.modifiedTime,
      publishedTime: webProject.og.publishedTime,
      publisher: webProject.og.publisher,
    };

    webProject.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    webProject.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    webProject,
  };
}

/**
 * getWebProjectCardBySlug
 */





export async function getWebProjectCardBySlug(slug) {
  const apolloClient = getApolloClient();

  let webProjectData;

  try {
    webProjectData = await apolloClient.query({
      query: QUERY_WEBPROJECT_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[webprojects][getWebProjectCardBySlug] Failed to query webProject data: ${e.message}`);
    throw e;
  }

  const webProject = webProjectData?.data?.webProject;

  // mapWebProjectData would need to be defined elsewhere and should
  // transform the raw webProject data into the shape needed for the webProjectCard.
  return mapWebProjectData(webProject);
}



/**
 * getAllwebprojects
 */

const allWebProjectsIncludesTypes = {
  all: QUERY_ALL_WEBPROJECTS,
  archive: QUERY_ALL_WEBPROJECTS_ARCHIVE,
  index: QUERY_ALL_WEBPROJECTS_INDEX,
};

export async function getAllWebProjects(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allWebProjectsIncludesTypes[queryIncludes],
  });
  

  const webprojects = data?.data.webProjects.edges.map(({ node = {} }) => node);

  // console.log(webprojects);
  return {
    webprojects: Array.isArray(webprojects) && webprojects.map(mapWebProjectData),
  };
}

/**
 * getwebProjectsByAuthorSlug
 */

const webProjectsByAuthorSlugIncludesTypes = {
  all: QUERY_WEBPROJECTS_BY_AUTHOR_SLUG,
  archive: QUERY_WEBPROJECTS_BY_AUTHOR_SLUG_ARCHIVE,
  index: QUERY_WEBPROJECTS_BY_AUTHOR_SLUG_INDEX,
};

export async function getWebProjectsByAuthorSlug({ slug, ...options }) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  let webProjectData;

  try {
    webProjectData = await apolloClient.query({
      query: WebProjectsByAuthorSlugIncludesTypes[queryIncludes],
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[WebProjects][getWebProjectsByAuthorSlug] Failed to query webProject data: ${e.message}`);
    throw e;
  }

  const WebProjects = webProjectData?.data.WebProjects.edges.map(({ node = {} }) => node);

  return {
    WebProjects: Array.isArray(WebProjects) && WebProjects.map(mapWebProjectData),
  };
}

/**
 * getWebProjectsByCategoryId
 */

const WebProjectsByCategoryIdIncludesTypes = {
  all: QUERY_WEBPROJECTS_BY_CATEGORY_ID,
  archive: QUERY_WEBPROJECTS_BY_CATEGORY_ID_ARCHIVE,
  index: QUERY_WEBPROJECTS_BY_CATEGORY_ID_INDEX,
};

export async function getWebProjectsByCategoryId({ categoryId, ...options }) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  let webProjectData;

  try {
    webProjectData = await apolloClient.query({
      query: webProjectsByCategoryIdIncludesTypes[queryIncludes],
      variables: {
        categoryId,
      },
    });
  } catch (e) {
    console.log(`[webProjects][getwebProjectsByCategoryId] Failed to query webProject data: ${e.message}`);
    throw e;
  }

  const webProjects = webProjectData?.data.webProjects.edges.map(({ node = {} }) => node);

  return {
    webProjects: Array.isArray(webProjects) && webProjects.map(mapWebProjectData),
  };
}

/**
 * getRecentwebProjects
 */

export async function getRecentWebProjects({ count, ...options }) {
  const { webProjects } = await getAllWebProjects(options); //formato?
  console.log("getRecentWebProjects returns:", webProjects); //Me sale undefined
  const sorted = sortObjectsByDate(webProjects); //problema con el date
  return {
    webProjects: sorted.slice(0, count),
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;');

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.');

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');

  return sanitized;
}

/**
 * mapWebProjectData
 */

export function mapWebProjectData(webProject = {}) {
  const data = { ...webProject };

  

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default


  // Clean up the featured image to make them more easy to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  //If we have projectyear, turn it into a date.

  return data;
}

/**
 * getRelatedWebProjects
 */

export async function getRelatedWebProjects(categories, webProjectId, count = 5) {
  if (!Array.isArray(categories) || categories.length === 0) return;

  let related = {
    category: categories && categories.shift(),
  };

  if (related.category) {
    const { webProjects } = await getWebProjectsByCategoryId({
      categoryId: related.category.databaseId,
      queryIncludes: 'archive',
    });

    const filtered = webProjects.filter(({ webProjectId: id }) => id !== webProjectId);
    const sorted = sortObjectsByDate(filtered);

    related.webProjects = sorted.map((webProject) => ({ title: webProject.title, slug: webProject.slug }));
  }

  if (!Array.isArray(related.webProjects) || related.webProjects.length === 0) {
    const relatedWebProjects = await getRelatedWebProjects(categories, webProjectId, count);
    related = relatedWebProjects || related;
  }

  if (Array.isArray(related.webProjects) && related.webProjects.length > count) {
    return related.webProjects.slice(0, count);
  }

  return related;
}

/**
 * sortStickyWebProjects
 */

export function sortStickyWebProjects(webProjects) {
  return [...webProjects].sort((webProject) => (webProject.isSticky ? -1 : 1));
}

/**
 * getWebProjectsPerPage
 */

export async function getWebProjectsPerPage() {
  //If webProject_PER_PAGE is defined at next.config.js
  if (process.env.WEBPROJECTS_PER_PAGE) {
    console.warn(
      'You are using the deprecated WEBPROJECT_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.WEBPROJECTS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_WEBPROJECT_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsWebProjectsPerPage);
  } catch (e) {
    console.log(`Failed to query webProject per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getPagesCount(webProjects, webProjectsPerPage) {
  const _webProjectsPerPage = webProjectsPerPage ?? (await getwebProjectsPerPage());
  return Math.ceil(webProjects.length / _webProjectsPerPage);
}

/**
 * getPaginatedWebProjects
 */

export async function getPaginatedWebProjects({ currentPage = 1, ...options } = {}) {
  const { webProjects } = await getAllWebProjects(options);
  const webProjectsPerPage = await getWebProjectsPerPage();
  const pagesCount = await getPagesCount(webProjects, WebProjectsPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      webProjects: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = webProjectsPerPage * (page - 1);
  const sortedWebProjects = sortStickyWebProjects(webProjects);
  return {
    webProjects: sortedWebProjects.slice(offset, offset + webProjectsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}
