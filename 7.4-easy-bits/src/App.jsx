import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {notifications, totalNotificationSelector } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkCount.network >= 100 ? "99+" : networkCount.network})
      </button>
      <button>Jobs ({networkCount.jobs}) </button>
      <button>Message ({networkCount.messaging}) </button>
      <button>Notification ({networkCount.notifications}) </button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
