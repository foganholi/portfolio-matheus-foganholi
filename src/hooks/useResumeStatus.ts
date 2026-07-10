import { useEffect, useState } from 'react';

export function useResumeStatus(path: string) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(path, { method: 'HEAD' })
      .then((response) => {
        if (active) {
          setExists(response.ok);
        }
      })
      .catch(() => {
        if (active) {
          setExists(false);
        }
      });

    return () => {
      active = false;
    };
  }, [path]);

  return exists;
}
