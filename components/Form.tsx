'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from './ui/button';
import Input from './ui/input';
import useHeaderStore from '@/hooks/use-header-store';

const schema = z.object({
  firstName: z
    .string()
    .min(2, 'Minimo de caracteres (2)!')
    .max(30, 'Limite de caracteres (30) atingido!'),
  lastName: z
    .string()
    .min(2, 'Minimo de caracteres (2)!')
    .max(30, 'Limite de caracteres (30) atingido!'),
});

type FormProps = z.infer<typeof schema>;

export default function Form() {
  const headerStore = useHeaderStore();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: 'Breaking',
      lastName: 'Bad',
    },
  });

  const handleFormSubmit = (formData: FormProps) => {
    if (isValid) {
      headerStore.setHeader(formData.firstName, formData.lastName);
    }
  };

  return (
    <form className=" mt-20" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex gap-4 mb-4">
        <Input
          id="firstName"
          label="First Name"
          register={register}
          required
          errors={errors}
        />
        <Input
          id="lastName"
          label="Last Name"
          register={register}
          required
          errors={errors}
        />
      </div>
      <Button type="submit" label="Breakingfy" />
    </form>
  );
}
