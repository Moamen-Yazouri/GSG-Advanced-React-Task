import type { RouteObject } from "react-router-dom";
import CharactersPage from "../components/charater-list";



export const publicRoutes: RouteObject = {
    path: "",
      children: [
    {
      index: true,
      element: <CharactersPage />,
    },
    // {
    //   path: "characters/:id",
    //   element: <CharacterDetailsPage />,
    // },
    // {
    //   path: "*",
    //   element: <NotFoundPage />
    // },
  ],
}