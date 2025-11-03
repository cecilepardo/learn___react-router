import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams<{ id: string }>();
  return <h1>Article {id}</h1>;
}

export default Article;