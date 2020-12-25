import React from "react";
import HomeScreen from "./screen/homeScreen";
import IntroScreen from "./screen/introScreen";
import SearchScreen from "./screen/searchScreen";
import PriceScreen from "./screen/PriceScreen";
import ContactScreen from "./screen/contactScreen";
import AddScreen from "./screen/addScreen";
import Detail from "./screen/detail";
import Change from "./screen/change";
const routers = [
  {
    path: "/",
    exact: true,
    main: () => <HomeScreen />,
  },
  {
    path: "/gioithieu",
    exact: true,
    main: () => <IntroScreen />,
  },
  {
    path: "/tracuu",
    exact: true,
    main: () => <SearchScreen />,
  },
  {
    path: "/banggia",
    exact: true,
    main: () => <PriceScreen />,
  },
  {
    path: "/lienhe",
    exact: true,
    main: () => <ContactScreen />,
  },
  {
    path: "/themdonhang",
    exact: true,
    main: ({ history }) => <AddScreen history={history} />,
  },
  {
    path: "/chitiet" + "/:orderCode",
    exact: true,
    main: ({ history, match }) => <Detail history={history} match={match} />,
  },
  {
    path: "/sua" + "/:id",
    exact: true,
    main: ({ history, match }) => <Change history={history} match={match} />,
  },
];
export default routers;
