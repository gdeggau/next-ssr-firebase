import React from "react";

const BlogPage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.content}</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { URL } = process.env;
  const { slug } = ctx.params;
  const response = await fetch(`${URL}/api/blog/${slug}`).then((res) =>
    res.json()
  );
  return {
    props: response,
  };
};

export default BlogPage;
