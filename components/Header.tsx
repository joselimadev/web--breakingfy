'use client';

import { PERIODIC_TABLE } from '@/constants/periodic-table';
import useHeaderStore from '@/hooks/use-header-store';
import { cn } from '@/lib/utils';

export function highlightElementText(text: string) {
  const textSplited = text.toLowerCase().split('');
  const elementWithTwoLetters = `${textSplited[0].toUpperCase()}${
    textSplited[1]
  }`;
  const elementWithOneLetter = textSplited[0].toUpperCase();

  if (PERIODIC_TABLE[elementWithTwoLetters]) {
    return (
      <>
        <strong
          className={`w-44 h-44 flex items-center justify-center ${PERIODIC_TABLE[elementWithTwoLetters]}`}
        >
          {elementWithTwoLetters}
        </strong>
        {text.substring(2, text.length)}
      </>
    );
  } else if (PERIODIC_TABLE[elementWithOneLetter]) {
    return (
      <>
        <strong
          className={`w-44 h-44 flex items-center justify-center ${PERIODIC_TABLE[elementWithOneLetter]}`}
        >
          {elementWithOneLetter}
        </strong>
        {text.substring(1, text.length)}
      </>
    );
  } else {
    <>
      <strong
        className={cn(
          'bg-green-800 w-44 h-44 flex items-center justify-center',
        )}
      >
        {text.substring(0, 2)}
      </strong>
      {text.substring(2, text.length)}
    </>;
  }
}

export default function Header() {
  const headerStore = useHeaderStore();

  return (
    <header className="text-9xl text-white flex flex-col items-center">
      <span className="flex items-center">
        {highlightElementText(headerStore.firstName)}
      </span>
      <span className="flex items-center mt-6">
        {highlightElementText(headerStore.lastName)}
      </span>
    </header>
  );
}
