import React from 'react';
export default function DocsId({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: URLSearchParams;
}) {
  console.log('searchParams', searchParams);

  return <div>page {params.id}</div>;
}
