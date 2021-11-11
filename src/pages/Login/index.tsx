import { Box, TextField } from '@material-ui/core';
import { FiShoppingBag } from 'react-icons/fi';
import { Container, Title, Slogan, FormBox } from './style';

export const Login = () => {

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
                            helperText
                            fullWidth
                        />
                        <TextField
                            variant="filled"
                            label="Senha"
                            type="password"
                            helperText
                            fullWidth
                        />
                        <button>Logar</button>
                </Box>
                <div>
                    <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                    <button>Cadastrar</button>

                </div>        
            </FormBox>
        </Container>
    )
}