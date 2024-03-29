import React from 'react';

// contexts
// import useCommandStore from '@/contexts/use-command';

// utils
import { supabase } from '@/utils/supabase';

// icons
import {
  ExitIcon,
  CubeIcon,
  ChatBubbleIcon,
  GearIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

interface Link {
  title: string;
  icon: React.ReactNode;
}

const links: Link[] = [
  {
    title: 'Dashboard',
    icon: <ChatBubbleIcon className="size-5" />,
  },
  {
    title: 'Hub',
    icon: <CubeIcon className="size-5" />,
  },
  {
    title: 'Settings',
    icon: <GearIcon className="size-5" />,
  },
];

export const Navigation: React.FC = () => {
  // const setOpen = useCommandStore((state) => state.setOpen);

  return (
    <nav className="flex w-14 flex-shrink-0 flex-col items-center justify-between border-r border-neutral-800">
      <section className="flex flex-col items-center">
        <article className="flex h-14 w-14 items-center justify-center border-b border-neutral-800">
          <img
            src="logo.svg"
            alt="logo"
            className="h-7 w-7 duration-700 ease-linear hover:animate-spin"
          />
        </article>

        {/** links */}
        <article className="flex flex-col space-y-2 pt-2">
          {links.map((item: Link, key: React.Key) => (
            <NavItem
              title={item.title}
              icon={item.icon}
              variant="link"
              key={key}
            />
          ))}
        </article>
      </section>

      {/** actions */}
      <section className="flex flex-col space-y-2 pb-2">
        <NavItem
          title="Search"
          icon={<MagnifyingGlassIcon className="h-4 w-4" />}
          variant="button"
          exec={async () => console.log('app search')}
        />
        <NavItem
          title="Sign out"
          icon={<ExitIcon className="h-4 w-4" />}
          variant="button"
          exec={async () => supabase.auth.signOut()}
        />
      </section>
    </nav>
  );
};

interface itemProps {
  title: string;
  icon: React.ReactNode;
  variant: 'link' | 'button';
  exec?: () => void;
}

const NavItem: React.FC<itemProps> = ({ title, icon, exec, variant }) => {
  if (variant == 'link') {
    return (
      <a
        className="flex h-10 w-10 items-center justify-center rounded text-neutral-600 hover:bg-neutral-800 hover:text-neutral-300"
        href="#"
      >
        {icon}
        <p className="hidden">{title}</p>
      </a>
    );
  }

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded text-neutral-600 hover:bg-neutral-800 hover:text-neutral-300"
      type="button"
      onClick={exec}
    >
      {icon}
    </button>
  );
};
