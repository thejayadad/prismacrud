'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { FiHome, FiDollarSign, FiPlusCircle, FiUsers } from 'react-icons/fi';
import SideItem from './side-item';


const SideLinks: React.FC = () => {
    const pathname = usePathname();
  
    const links = [
      { href: '/', label: 'Home', icon: FiHome },
      { href: '/paid', label: 'Paid', icon: FiDollarSign },
      { href: '/unpaid', label: 'Unpaid', icon: FiUsers },
      { href: '/new', label: 'New', icon: FiPlusCircle },
    ];
  
    return (
      <div className="space-y-2">
        {links.map(({ href, label, icon }) => (
          <SideItem
            key={href}
            href={href}
            label={label}
            icon={icon}
            isActive={pathname === href}
          />
        ))}
      </div>
  )
}

export default SideLinks