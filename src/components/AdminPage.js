import { TabsEvents } from "./TabsEvents";

export const AdminPage = (props) => {
  const { setView } = props;

  return (
    <div className="admin-page">
      <h1 className="d-flex justify-content-around">ADMIN PAGE</h1>
      <TabsEvents />
    </div>
  );
};
