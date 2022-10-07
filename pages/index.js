import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  //leverage the fs module
  const files = fs.readdirSync("posts");

  //loop over all the posts to extract the fontmatter
  // part to get the title and image.
  const posts = files.map((fileName) => {
    //define slug
    const slug = fileName.replace(".md", "");

    //read file by using fs module again & once loaded
    //we use the matter pkg to read the file & extract
    //the data object (change data var to frontmatter)
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    //last thing is to return the props that our
    //componnent will recieve
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
