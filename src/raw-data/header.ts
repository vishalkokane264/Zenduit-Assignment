import {
  FormattedList,
  History,
  Logout,
  Notifications,
  People,
  Reports,
  SubmissionIcon,
} from "../Assets";
import { IMenu, ITopNavigation } from "../Components/topNavigation";
import randomStringFunc from "../Utils/randomString";

export const HeaderData: ITopNavigation = {
  title: "ZenduForms",
  menu: {
    options: [
      {
        id: randomStringFunc(),
        name: "Forms",
        icon: FormattedList,
      },
      {
        id: randomStringFunc(),
        name: "Customers",
        icon: People,
      },
      {
        id: randomStringFunc(),
        name: "Submissions",
        icon: SubmissionIcon,
      },
      {
        id: randomStringFunc(),
        name: "History",
        icon: History,
      },
      {
        id: randomStringFunc(),
        name: "Reports",
        icon: Reports,
      },
      {
        id: randomStringFunc(),
        name: "Workflow",
        icon: Reports,
      },
    ],
    active: "Submissions",
  },
  actions: [
    {
      id: randomStringFunc(),
      name: "Notifications",
      icon: Notifications,
    },
    {
      id: randomStringFunc(),
      name: "Logout",
      icon: Logout,
    },
  ],
  actionClicked: function (action: IMenu): void {
    console.error("action cliecked");
  },
  menuClicked: function (menu: IMenu): any {
    console.error("menu cliecked");
  },
};
