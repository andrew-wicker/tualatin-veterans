import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  middleName: z.string().min(0).max(50),
  lastName: z.string().min(2).max(50),
  dateOfBirth: z.string().min(8).max(10),
  streetAddress: z.string().min(2).max(100),
  streetAddress2: z.string().min(2).max(100),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(2),
  zipCode: z.string().min(5).max(10),
  phoneNumber: z.string().min(7).max(15),
  emailAddress: z.string().email(),
});

function MemberForm() {
  return (
    <div>
      <h3>Member form</h3>
    </div>
  );
}

export default MemberForm;
