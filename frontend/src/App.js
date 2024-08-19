// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

// 도전 / 연습
// 1. 다섯 개의 새로운 (더미) 페이지 컴포넌트를 추가하세요 (내용은 간단한 <h1> 요소일 수 있습니다)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. 이 다섯 페이지에 대한 라우팅 및 경로 정의를 추가하세요
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. 모든 페이지 컴포넌트 위에 <MainNavigation> 컴포넌트를 추가하는 루트 레이아웃을 추가하세요
// 4. MainNavigation에 제대로 작동하는 링크를 추가하세요
// 5. MainNavigation의 링크가 활성화될 때 "active" 클래스를 받도록 하세요
// 6. EventsPage에 더미 이벤트 목록을 출력하세요
//    각 목록 항목은 해당 EventDetailPage로의 링크를 포함해야 합니다
// 7. EventDetailPage에서 선택된 이벤트의 ID를 출력하세요
// 보너스: 모든 /events... 페이지 컴포넌트 위에 <EventNavigation> 컴포넌트를 추가하는 또 다른 (중첩된) 레이아웃 경로를 추가하세요
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventDetailPage, { loader as itemLoader } from "./pages/EventDetail";
import EventsPage, { loader as eventLoader } from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventLayout from "./pages/EventLayout";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: itemLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
