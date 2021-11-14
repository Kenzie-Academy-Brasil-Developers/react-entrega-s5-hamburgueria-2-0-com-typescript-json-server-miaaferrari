import { Box, TextField } from '@material-ui/core';
import { FiShoppingBag } from 'react-icons/fi';
import { Container, Title, Slogan, FormBox } from './style';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useHistory } from "react-router";
import { loginFormSchema } from "../../components/Validation";
import { useContext } from "react";
import axios from 'axios';
import { useAuth } from '../../providers/Auth';

interface User {
    id?: number;
    email: string;
    password: string;
    token?: any;
}


export const Login = () => {
    const history = useHistory();
    const { signIn } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<User>({resolver: yupResolver(loginFormSchema)});

    const handleForm = (data: User) => {
        console.log(data)
        signIn(data);
    }

    return (
        <Container>
            <div>
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
            <FormBox>
                <h4>Login</h4>
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
                        <button type='submit'>Logar</button>
                </Box>
                <div>
                    <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                    <button onClick={() => history.push('/cadastro')}>Cadastrar</button>
                </div>        
            </FormBox>
        </Container>
    )
}