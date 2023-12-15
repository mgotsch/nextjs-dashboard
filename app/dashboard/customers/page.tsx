import Table from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query: string;
  };
}) {

  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense fallback={<CustomersTableSkeleton />}>
        <Table customers ={customers}/>
      </Suspense>
    </div>
  );
}