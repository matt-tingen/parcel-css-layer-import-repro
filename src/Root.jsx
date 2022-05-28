import { Global } from '@emotion/react';

export const Root = () => {
  // The background here cannot be defined statically because it pulls from a
  // third party theme via react context.
  return <Global styles={{ body: { background: 'green' } }} />;
};
