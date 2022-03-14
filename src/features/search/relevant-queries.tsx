/* eslint-disable react/no-danger */
import { BookInfo } from '@/common/types/index.model';
import { FunctionComponent } from 'react';

type RelevantQueriesProps = {
  data: {
    highlight: string;
    id: string;
    info: BookInfo;
    page: number;
    text: string;
  }[];
};

const RelevantQueries: FunctionComponent<RelevantQueriesProps> = ({ data }) => {
  return (
    <section className="mt-3 overflow-hidden border border-black/10 dark:border-gray-800">
      <table className="w-full">
        <thead className="h-10 border-b border-black/10 bg-primary-light text-lg text-light-100 dark:border-gray-800 dark:bg-primary-dark dark:text-dark-100">
          <tr>
            <th className="px-2">No</th>
            <th className="px-2">Halaman</th>
            <th>Relevant Query</th>
            <th>Judul Buku</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10 dark:divide-gray-800">
          {data.map(({ id, page, highlight, info }, index) => (
            <tr key={id + page} className="!h-[50px]">
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{page}</td>
              <td className="truncate px-5" dangerouslySetInnerHTML={{ __html: highlight }} />
              <td>
                <p className="text-center">{info.title}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RelevantQueries;
