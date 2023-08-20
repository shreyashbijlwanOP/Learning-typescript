import { TableHeader } from "./ListUsers";

interface TableHeaderProps {
  data: TableHeader[];
}

const TableHeader = ({ data }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {data.map((thData) => (
          <th key={thData.label}>{thData.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
