import { Box, TextField } from '@material-ui/core';
import { FiShoppingBag } from 'react-icons/fi';
import { Container, Title, Slogan, FormBox } from './style';

export const Cadastro = () => {

    return (
        <Container>
             <FormBox>
                <div>
                    <h4>Cadastro</h4>
                    <button>Retornar para o Login</button>
                </div>
                <Box
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
                            helperText
                            fullWidth
                        />
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
                        <TextField
                            variant="filled"
                            style={{border: "none"}}
                            label="Confirme sua senha"
                            type="password"
                            helperText
                            fullWidth
                        />
                        <button>Cadastrar</button>
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