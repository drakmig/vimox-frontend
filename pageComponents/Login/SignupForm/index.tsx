import React from 'react';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { HelperText } from '@components/Form/HelperText';
import { Grid } from '@components/Layout/Grid';
import { Typography } from '@components/DataDisplay/Typography';
import { useForm } from '@hooks/useForm';
import { signupSchema } from '@utils/yupSchemas';

export const SignupForm = (): JSX.Element => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    isValidForm,
  } = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values, helpers) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} autoComplete='nope'>
      <Typography as='h3' margin='0 0 8px 0' white>
        Inscríbase para una Cuenta Gratuita
      </Typography>
      <Typography margin='0 0 28px 0'>
        ¡Únete a GxAnime! ¡Se tarda un clic!
      </Typography>
      <Grid cols='1' gap={2}>
        <div>
          <Input
            type='text'
            placeholder='Nombre de usuario'
            name='username'
            value={values.username}
            error={Boolean(errors.username)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.username && <HelperText error>{errors.username}</HelperText>}
        </div>
        <div>
          <Input
            type='email'
            placeholder='Tu correo'
            name='email'
            value={values.email}
            error={Boolean(errors.email)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.email && <HelperText error>{errors.email}</HelperText>}
        </div>
        <div>
          <Input
            type='password'
            name='password'
            placeholder='Tu contraseña'
            showPasswordStrengthBar
            value={values.password}
            error={Boolean(errors.password)}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <HelperText error>{errors.password}</HelperText>}
        </div>
        <div>
          <Input
            type='password'
            placeholder='Confirmar contraseña'
            name='passwordConfirmation'
            value={values.passwordConfirmation}
            error={Boolean(errors.passwordConfirmation)}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.passwordConfirmation && (
            <HelperText error>{errors.passwordConfirmation}</HelperText>
          )}
        </div>
        <Button primary type='submit' disabled={!isValidForm || isSubmitting}>
          Crear una cuenta
        </Button>
      </Grid>
    </form>
  );
};
