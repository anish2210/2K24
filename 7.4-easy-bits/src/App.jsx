import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useSetRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}){" "}
      </button>
      <button>Jobs ({jobsAtomCount}) </button>
      <button>Message ({messagingAtomCount}) </button>
      <button>Notification ({notificationAtomCount}) </button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
