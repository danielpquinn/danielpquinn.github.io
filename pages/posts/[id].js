import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout';

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <time datetime={postData.date}>{postData.date}</time>
        <h2>{postData.title}</h2>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
