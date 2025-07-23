import React from 'react';
import { Table, TableHeader, TableRow, TableCell } from '@/components/ui/Table';
import { QUIET_HOURS } from '@/data/quietHours';
import { SectionTitle } from '../ui/Titles';
import SectionLayout from '../layout/SectionLayout';

const QuietHoursSection: React.FC = () => {
  return (
    <SectionLayout>
              <SectionTitle title="Quiet Hours" />
      <Table>
        <TableHeader>
          <TableCell isHeader>Day</TableCell>
          <TableCell isHeader>Hours</TableCell>
        </TableHeader>
        {QUIET_HOURS.map((schedule, index) => (
          <TableRow key={schedule.day} isEven={index % 2 === 0}>
            <TableCell isHeader>{schedule.day}</TableCell>
            <TableCell>{schedule.hours}</TableCell>
          </TableRow>
        ))}
      </Table>
    </SectionLayout>
  );
};

export default QuietHoursSection;