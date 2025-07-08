"use client"

import { useRouter, usePathname } from '@/i18n/navigation';
import { ReactNode, useTransition } from 'react';
import { useParams } from 'next/navigation';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcher({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-ignore
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label className={clsx(
      "m-1 relative",
      isPending && "transition-opacity [&:disabled]:opacity-30"
    )}>
        <p className='sr-only'>{label}</p>
        <select
            name="language-selector"
            id="language-selector"
            aria-label="language selector"
            defaultValue={defaultValue}
            disabled={isPending}
            onChange={onSelectChange}
            className="cursor-pointer"
        >
          {children}
        </select>
    </label>
  )
}