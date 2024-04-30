import { Member, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Member[]> {
  const response = await fetch('http://localhost:3000/api');
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data = await response.json();

  return data;
}

export default async function MemberDataTable() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
