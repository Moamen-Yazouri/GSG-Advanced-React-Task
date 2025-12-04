import Characters from "../components/charater-list";
import routeHOC from "../routes/HOC/withTitle";

const CharacterListPage = () => {
  return <Characters />;
};

const withHOC = routeHOC({
  title: "GSG Technical | Character List",
});

const CharacterListPageWithTitle = withHOC(CharacterListPage);

export default CharacterListPageWithTitle;