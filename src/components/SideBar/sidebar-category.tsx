import { SidebarNavItem } from './sidebar-nav-item';
import type { NavCategory } from './items';

interface SidebarCategoryProps {
  category: NavCategory;
}

export function SidebarCategory({ category }: SidebarCategoryProps) {
  return (
    <div className="space-y-2">
      <h3
        className="text-xs font-semibold uppercase tracking-wider px-4"
        style={{ color: 'var(--sidebar-text)' }}
      >
        {category.category}
      </h3>
      <div className="space-y-1">
        {category.items.map((item) => (
          <SidebarNavItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
}
