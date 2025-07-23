import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  isEven?: boolean;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
}

const Table: React.FC<TableProps> = ({ children, className }) => (
  <div className={cn('bg-white border border-gray-200 rounded-lg overflow-hidden', className)}>
    {children}
  </div>
);

const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => (
  <div className={cn('grid grid-cols-2 bg-gray-50 p-4 font-semibold text-gray-900', className)}>
    {children}
  </div>
);

const TableRow: React.FC<TableRowProps> = ({ children, className, isEven = false }) => (
  <div className={cn(
    'grid grid-cols-2 p-4 border-t border-gray-200',
    isEven ? 'bg-gray-50' : 'bg-white',
    className
  )}>
    {children}
  </div>
);

const TableCell: React.FC<TableCellProps> = ({ children, className, isHeader = false }) => (
  <div className={cn(isHeader ? 'text-gray-900' : 'text-gray-700', className)}>
    {children}
  </div>
);

export { Table, TableHeader, TableRow, TableCell };