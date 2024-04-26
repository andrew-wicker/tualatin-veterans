import React, { useState } from 'react';
import FormField from './FormField';

interface Member {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  emailAddress: string;
  [key: string]: string;
}

const MemberForm: React.FC = () => {
  const [member, setMember] = useState<Member>({
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
  });

  const fields = [
    { label: 'First Name', type: 'text', name: 'firstName' },
    { label: 'Middle Name', type: 'text', name: 'middleName' },
    { label: 'Last Name', type: 'text', name: 'lastName' },
    { label: 'Date of Birth', type: 'text', name: 'dateOfBirth' },
    { label: 'Street Address', type: 'text', name: 'streetAddress' },
    { label: 'Street Address', type: 'text', name: 'streetAddress2' },
    { label: 'City', type: 'text', name: 'city' },
    { label: 'State', type: 'text', name: 'state' },
    { label: 'Zip', type: 'text', name: 'zipCode' },
    { label: 'Phone', type: 'text', name: 'phoneNumber' },
    { label: 'Email', type: 'text', name: 'emailAddress' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const memberString = JSON.stringify(member);
      console.log('the member string is: ', memberString);
      const response = await fetch('http://localhost:3000/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(member),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log('Member saved successfully: ', data);
      }
    } catch (error) {
      console.error('Failed to save the member: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={member[field.name] as string}
          onChange={handleChange}
        />
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default MemberForm;
