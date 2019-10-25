import * as React from 'react';
import useForm from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  age: yup
    .number()
    .positive('age must > 0')
    .required('age is required'),
});

const SampleForm: React.FC = React.memo(() => {
  const { register, handleSubmit, errors } = useForm<{
    age: string;
  }>({
    validationSchema,
  });

  const onSubmit = (data: any) => {
    alert(data.age);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Validation with yup</h2>
      <input name="age" ref={register} />
      {errors.age && errors.age.message}
      <button type="submit">Submit</button>
    </form>
  );
});

export default SampleForm;
