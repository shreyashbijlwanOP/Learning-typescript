import { IUser } from "../services/APIRespInterfaces/UserInterface";
import { fetchData } from "../services/user";

export interface TableHeader {
  label: string;
}

const tableHeader: TableHeader[] = [
  { label: "Sl.No" },
  { label: "Name" },
  { label: "email" },
];

import { useState, useCallback, useEffect } from "react";
import THeader from "./TableHeader";

const ListUsers = () => {
  const [data, setData] = useState<IUser[]>([]);

  const [dataLoading, setDataLoading] = useState(true);

  const loadUserList = useCallback(async () => {
    setDataLoading(true);

    const resp = await fetchData<IUser[]>("/users");
    setData(resp);

    setDataLoading(false);
  }, []);

  useEffect(() => {
    loadUserList();
  }, [loadUserList]);

  return (
    <div>
      {dataLoading && (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Loading Please Wait
        </h1>
      )}

      {!dataLoading && data.length > 0 && (
        <table>
          <THeader data={tableHeader} />
          <tbody>
            {data.map((rowData, i) => (
              <tr key={rowData.id}>
                <td>{i + 1}</td>
                <td>{rowData.name}</td>
                <td>{rowData.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListUsers;
