'use client';

import useHeaderStore from '@/hooks/use-header-store';

export default function Header() {
  const headerStore = useHeaderStore();

  return (
    <header className="text-9xl text-white flex flex-col items-center">
      <span className="flex items-center">
        <strong className="bg-green-800 w-44 h-44 flex items-center justify-center">
          Br
        </strong>
        eaking
      </span>
      <span className="flex items-center mt-6">
        <strong className="bg-green-800 w-44 h-44 flex items-center justify-center">
          Ba
        </strong>
        d
      </span>
      {headerStore.firstName} {headerStore.lastName}
    </header>
  );
}
