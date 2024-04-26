import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from './ui/separator';

// interface FieldProps {
//   firstName: string;
//   middleName: string;
// }

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

type FormFieldName = keyof z.infer<typeof formSchema>;

const formFields: {
  name: FormFieldName;
  label: string;
  placeholder: string;
  description: string;
}[] = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    description: '',
  },
  {
    name: 'middleName',
    label: 'Middle Name',
    placeholder: 'Middle Name',
    description: '',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Last Name',
    description: '',
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    placeholder: 'Date of Birth',
    description: '',
  },
  {
    name: 'streetAddress',
    label: 'Address',
    placeholder: 'Address',
    description: '',
  },
  {
    name: 'streetAddress2',
    label: 'Address 2',
    placeholder: 'Address 2',
    description: '',
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'City',
    description: '',
  },
  {
    name: 'state',
    label: 'State',
    placeholder: 'State',
    description: '',
  },
  {
    name: 'zipCode',
    label: 'Zip Code',
    placeholder: 'Zip Code',
    description: '',
  },
  {
    name: 'phoneNumber',
    label: 'Phone',
    placeholder: 'Phone',
    description: '',
  },
  {
    name: 'emailAddress',
    label: 'Email',
    placeholder: 'Email',
    description: '',
  },
];

function MemberForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      emailAddress: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Grouping date of birth */}
          <div className="flex gap-4">
            <FormField
              name="dateOfBirth"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="MM/DD/YYYY"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Grouping name fields */}
          <div className="flex gap-4">
            <div className="grow basis-5/12">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="shrink">
              <FormField
                name="middleName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Middle Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grow basis-5/12">
              <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator />
          {/* Grouping address fields */}
          <div className="flex gap-4">
            <div className="flex-grow">
              <FormField
                name="streetAddress"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Street Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-grow">
              <FormField
                name="streetAddress2"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address 2</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Street Address 2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-grow basis-5/12">
              <FormField
                name="city"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="shrink"></div>
            <FormField
              name="state"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="State"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex-grow basis-5/12">
              <FormField
                name="zipCode"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ZIP Code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator />
          {/* Grouping phone and email fields */}
          <div className="flex gap-4">
            <div className="flex-grow">
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-grow">
              <FormField
                name="emailAddress"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default MemberForm;
