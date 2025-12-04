import type { RouteObject } from "react-router-dom";
import { NotFoundPage } from "../components/shared/notFound";
import CharacterListPageWithTitle from "../pages/characterListPage";
import CharacterDetailsPageWithTitle from "../pages/characterDetailsPage";




export const routes: RouteObject = {
    path: "",
      children: [
    {
      index: true,
      element: <CharacterListPageWithTitle />,
    },
    {
      path: "characters/:id",
      element: <CharacterDetailsPageWithTitle />,
    },
    {
      path: "*",
      element: <NotFoundPage />
    },
  ],
}