'use client';

import { ReactNode, useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export default function ClientOnly({ children }: { children: ReactNode }) {
  const hasMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}

