import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';

export default function Home({
  allPostsData,
}) {
  return (
    <Layout>
      <section>
        <h2>Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <small>
                <time datetime={date}>{date}</time> -
              </small>
              {' '}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
