'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ObjectId } from 'mongodb';

export type Member = {
  _id: ObjectId; // MongoDB ObjectId
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string; // Date as a string in MM/DD/YYYY format
  streetAddress: string;
  streetAddress2?: string; // Optional field
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  emailAddress: string;
  __v?: number; // Mongoose version key (optional)
};

export const columns: ColumnDef<Member>[] = [
  {
    id: 'actions',
    cell: ({ row }) => {
      const member = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='h-8 w-8 p-0'
            >
              <span className='sr-only'>Open Menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(member._id.toString())
              }
            >
              Copy Member ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View member</DropdownMenuItem>
            <DropdownMenuItem>Edit member</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: '_id',
    header: 'Document ID',
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'middleName',
    header: 'Middle Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'dateOfBirth',
    header: 'Date of Birth',
  },
  {
    accessorKey: 'streetAddress',
    header: 'Street Address',
  },
  {
    accessorKey: 'streetAddress2',
    header: 'Street Address 2',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'zipCode',
    header: 'ZIP Code',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
  {
    accessorKey: 'emailAddress',
    header: 'Email Address',
  },
];
