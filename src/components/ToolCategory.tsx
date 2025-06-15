import React from 'react';
import ToolCard from './ToolCard';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  tools: Tool[];
}

interface ToolCategoryProps {
  category: Category;
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ category }) => {
  const CategoryIcon = category.icon;

  return (
    <div className="mb-16" data-category={category.id}>
      <h3 className="flex items-center gap-3 text-2xl lg:text-3xl font-semibold mb-8 text-white relative">
        <CategoryIcon className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
        {category.title}
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-transparent ml-4"></div>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolCategory;