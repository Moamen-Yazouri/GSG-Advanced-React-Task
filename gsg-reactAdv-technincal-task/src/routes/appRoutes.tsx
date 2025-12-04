import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { LoadingSpinner } from "../components/shared/loadingSpinner";
import { routes } from "./routes";


const AppRoutes = () => {
    const appRoutes = useRoutes([routes]);
  return (
    <Suspense fallback={<LoadingSpinner />}>
        {appRoutes}
    </Suspense>
  )
}

export default AppRoutes