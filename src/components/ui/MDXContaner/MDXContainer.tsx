import { ReactNode } from 'react';

interface MDXContainerProps {
  children: ReactNode;
}

export default function MDXContainer({
  children,
}: MDXContainerProps) {
  return <div className="container">{children}</div>;
}
