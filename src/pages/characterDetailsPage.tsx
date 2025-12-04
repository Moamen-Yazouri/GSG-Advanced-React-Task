import CharacterDetails from "../components/character-details";
import routeHOC from "../routes/HOC/withTitle";

const CharacterDetailsPage = () => {
  return <CharacterDetails />;
};

const CharacterDetailsPageWithTitle = routeHOC({
  title: "GSG Technical | Character Details",
})(CharacterDetailsPage);

export default CharacterDetailsPageWithTitle;
