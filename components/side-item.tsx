import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';
import clsx from 'clsx';

interface SideItemProps {
  href: string;
  icon: IconType;
  label: string;
  isActive: boolean;
}

const SideItem: React.FC<SideItemProps> = ({ href, icon: Icon, label, isActive }) => {
  return (
    <Link href={href}
   
        className={clsx(
          'flex items-center gap-3 px-4 py-2 rounded-md transition-all relative',
          isActive ? 'bg-gray-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        )}
      >
        <Icon className="text-xl" />
        <span className="hidden lg:block text-sm font-medium">{label}</span>
        {isActive && <div className="absolute right-0 top-0 bottom-0 w-2 bg-yellow-600" />}
  
    </Link>
  );
};

export default SideItem;