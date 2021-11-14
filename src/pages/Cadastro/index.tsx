import { Box, TextField } from '@material-ui/core';
import { FiShoppingBag } from 'react-icons/fi';
import { Container, Title, Slogan, FormBox } from './style';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formSchema } from '../../components/Validation';
import axios from 'axios';

interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export const Cadastro = () => {
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<User>({resolver: yupResolver(formSchema)});

    const handleForm = ({name, email, password }: User) => {
        const data = {
            name,
            email,
            password
        }

        axios
            .post<User>('https://hamburgueria-api-maria.herokuapp.com/register', data)
            .then(() => {
                console.log(data)
                history.push("/login")
            })
            .catch((err) => console.log(err));
    }


    return (
        <Container>
             <FormBox>
                <div>
                    <h4>Cadastro</h4>
                    <button onClick={() => history.push('/login')}>Retornar para o Login</button>
                </div>
                <Box
                    onSubmit={handleSubmit(handleForm)}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '330px' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField
                            label="Nome"
                            type="text"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            fullWidth
                        />
                        <TextField
                            label="E-mail"
                            type="text"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            fullWidth
                        />
                        <TextField
                            variant="filled"
                            label="Senha"
                            type="password"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            fullWidth
                        />
                        <TextField
                            variant="filled"
                            style={{border: "none"}}
                            label="Confirme sua senha"
                            type="password"
                            {...register("confirmPassword")}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                            fullWidth
                        />
                        <button type='submit'>Cadastrar</button>
                </Box>      
            </FormBox>
            <div className='header'>
                <Title>
                    <h2>Burguer<span>Kenzie</span></h2>
                </Title>
                <Slogan>
                    <div>
                        <FiShoppingBag color='#27AE60' />
                    </div>
                    <span>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</span>
                </Slogan>
            </div>

        </Container>
    )
}